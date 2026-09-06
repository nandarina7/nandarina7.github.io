---
title: "[프로그래머스] 최댓값 만들기 (2)"
published: 2026-09-05
description: "Lv.1 · 기본 · 최대값"
tags: ["Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120862) · **Lv.1**

## 문제 요약

#### 문제 설명

정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

#### 제한사항

- `-10,000 ≤ numbers`의 원소 `≤ 10,000`
- `2 ≤ numbers`의 길이 `≤ 100`

#### 입출력 예

| numbers | result |
|---|---:|
| `[1, 2, -3, 4, -5]` | 15 |
| `[0, -31, 24, 10, 1, 9]` | 240 |
| `[10, 20, 30, 5, 5, 20, 5]` | 600 |

#### 입출력 예 설명

#### 입출력 예 #1

- 두 수의 곱중 최댓값은 `-3 * -5 = 15` 입니다.

#### 입출력 예 #2

- 두 수의 곱중 최댓값은 `10 * 24 = 240` 입니다.

#### 입출력 예 #3

- 두 수의 곱중 최댓값은 `20 * 30 = 600` 입니다.

## 접근

최대값이 될 수 있는 경우는
1) 음수 x 음수
2) 양수 x 양수

따라서 정렬 후 앞에서 2개, 뒤에서 2개를 곱한 결과 중 더 큰 값을 최대값으로 한다.

## 풀이

```python title="solution.py"
def solution(numbers):
    numbers.sort()
    return max(numbers[0] * numbers[1], numbers[-1]*numbers[-2])
```

## 시간복잡도

sort()를 사용하기 때문에 시간복잡도는 n log(n)
- 시간: O(n log(n))
- 공간: O(n)

## 배운 점

- 문제 풀기전에 항상 5분정도 고민하기