---
title: "[프로그래머스] 짝수와 홀수"
published: 2026-09-09
description: "Lv.1 · 기본"
tags: ["Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12937) · **Lv.1**

## 문제 요약

#### 문제 설명

정수 `num`이 짝수일 경우 `"Even"`을 반환하고 홀수인 경우 `"Odd"`를 반환하는 함수, `solution`을 완성해주세요.

#### 제한 조건

* `num`은 `int` 범위의 정수입니다.
* `0`은 짝수입니다.

#### 입출력 예

| num | return   |
| --: | :------- |
|   3 | `"Odd"`  |
|   4 | `"Even"` |

## 접근

one-line 코드 구현

## 풀이

```python title="solution1.py"
def solution(num):
    return "Odd" if num%2 else "Even"
```
one-line 삼항연산자

## 시간복잡도

- 시간: O(1)
- 공간: O(1)

## 배운 점

기초 문제