---
title: "[프로그래머스] x만큼 간격이 있는 n개의 숫자"
published: 2026-09-06
description: "Lv.1 · 기본 · 배열"
tags: ["배열", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/00000) · **Lv.1**

## 문제 요약

##### 문제 설명

함수 `solution`은 정수 `x`와 자연수 `n`을 입력받아, `x`부터 시작해 `x`씩 증가하는 숫자를 `n`개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수 `solution`을 완성해주세요.

##### 제한 조건

* `x`는 `-10000000` 이상, `10000000` 이하인 정수입니다.
* `n`은 1000 이하인 자연수입니다.

##### 입출력 예

|  x |  n | answer             |
| -: | -: | ------------------ |
|  2 |  5 | `[2, 4, 6, 8, 10]` |
|  4 |  3 | `[4, 8, 12]`       |
| -4 |  2 | `[-4, -8]`         |

## 접근

for문 연습 문제

## 풀이

```python title="solution1.py"
def solution(x, n):
    return [i*x + x for i in range(n)]
```

```python title="solution2.py"
def solution(x, n):
    return [i for i in range(x, x*(n+1), x)]
```

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

리스트 컴프리헨션 연습