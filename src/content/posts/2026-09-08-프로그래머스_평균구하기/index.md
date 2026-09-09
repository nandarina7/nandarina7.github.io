---
title: "[프로그래머스] 평균 구하기"
published: 2026-09-08
description: "Lv.1 · 기본 · 수학"
tags: ["수학", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12944) · **Lv.1**

## 문제 요약

#### 문제 설명

정수를 담고 있는 배열 `arr`의 평균값을 return하는 함수, `solution`을 완성해보세요.

#### 제한사항

- `arr`은 길이 1 이상, 100 이하인 배열입니다.
- `arr`의 원소는 -10,000 이상 10,000 이하인 정수입니다.

#### 입출력 예

| arr | return |
|---|---:|
| [1,2,3,4] | 2.5 |
| [5,5] | 5 |

## 접근

sum이랑 len 바로 생각남

## 풀이

```python title="solution.py"
def solution(arr):
    return sum(arr)/len(arr)
```

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

함수 많이 쓰기