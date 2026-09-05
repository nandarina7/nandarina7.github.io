import { type CollectionEntry, getCollection } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getCategoryUrl } from "@utils/url-utils.ts";

// // Retrieve posts and sort them by publication date
async function getRawSortedPosts() {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const sorted = allBlogPosts.sort((a, b) => {
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? -1 : 1;
	});
	return sorted;
}

export async function getSortedPosts() {
	const sorted = await getRawSortedPosts();

	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
	}

	return sorted;
}
export type PostForList = {
	slug: string;
	data: CollectionEntry<"posts">["data"];
};
export async function getSortedPostsList(): Promise<PostForList[]> {
	const sortedFullPosts = await getRawSortedPosts();

	// delete post.body
	const sortedPostsList = sortedFullPosts.map((post) => ({
		slug: post.slug,
		data: post.data,
	}));

	return sortedPostsList;
}
export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { tags: string[] } }) => {
		post.data.tags.forEach((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
	url: string;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { category: string | null } }) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}

		const categoryName =
			typeof post.data.category === "string"
				? post.data.category.trim()
				: String(post.data.category).trim();

		count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({
			name: c,
			count: count[c],
			url: getCategoryUrl(c),
		});
	}
	return ret;
}

export type CategoryNode = {
	/** Segment shown in the sidebar, e.g. "프로그래머스" */
	name: string;
	/** Full slash-delimited path, e.g. "PS/프로그래머스" */
	path: string;
	/** Posts filed directly under this node */
	ownCount: number;
	/** ownCount plus every descendant's count */
	count: number;
	url: string;
	children: CategoryNode[];
};

const CATEGORY_SEPARATOR = "/";

/**
 * Build a tree from slash-delimited category paths.
 *
 * A post filed under "PS/프로그래머스" counts toward the "프로그래머스" node and,
 * through `count`, toward its "PS" ancestor as well — so clicking a parent in the
 * sidebar shows everything beneath it.
 */
export async function getCategoryTree(): Promise<CategoryNode[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const roots: CategoryNode[] = [];
	const byPath = new Map<string, CategoryNode>();

	const nodeFor = (segments: string[]): CategoryNode => {
		const path = segments.join(CATEGORY_SEPARATOR);
		const existing = byPath.get(path);
		if (existing) return existing;

		const node: CategoryNode = {
			name: segments[segments.length - 1],
			path,
			ownCount: 0,
			count: 0,
			url: getCategoryUrl(path),
			children: [],
		};
		byPath.set(path, node);

		if (segments.length === 1) {
			roots.push(node);
		} else {
			nodeFor(segments.slice(0, -1)).children.push(node);
		}
		return node;
	};

	for (const post of allBlogPosts) {
		const raw = post.data.category;
		const segments = (typeof raw === "string" ? raw : String(raw ?? ""))
			.split(CATEGORY_SEPARATOR)
			.map((s) => s.trim())
			.filter(Boolean);

		if (segments.length === 0) {
			segments.push(i18n(I18nKey.uncategorized));
		}

		nodeFor(segments).ownCount++;

		// Roll the post up through every ancestor.
		for (let i = 1; i <= segments.length; i++) {
			nodeFor(segments.slice(0, i)).count++;
		}
	}

	const sortTree = (nodes: CategoryNode[]): CategoryNode[] => {
		nodes.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
		for (const n of nodes) sortTree(n.children);
		return nodes;
	};

	return sortTree(roots);
}
