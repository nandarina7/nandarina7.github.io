import { execFileSync } from "node:child_process";

/**
 * 글 파일의 마지막 git 커밋 시각을 frontmatter 에 넣는다.
 *
 * 수정일을 손으로 적지 않아도 되도록, 커밋 이력에서 자동으로 가져온다.
 * 아직 커밋하지 않은 글이나 git 저장소 밖에서는 아무 값도 넣지 않으므로,
 * 그럴 때는 수정일이 표시되지 않는다.
 *
 * 주의: CI 에서 얕은 복제(shallow clone)를 하면 이력이 없어 값을 못 얻는다.
 * .github/workflows/deploy.yml 의 checkout 에 fetch-depth: 0 이 필요하다.
 */
export function remarkGitUpdated() {
	return (_tree, file) => {
		const filepath = file.history?.[0];
		if (!filepath) return;

		try {
			const iso = execFileSync(
				"git",
				["log", "-1", "--format=%cI", "--", filepath],
				{ encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
			).trim();

			if (iso) {
				file.data.astro.frontmatter.gitUpdated = iso;
			}
		} catch {
			// git 이 없거나 저장소가 아니면 그냥 넘어간다
		}
	};
}
