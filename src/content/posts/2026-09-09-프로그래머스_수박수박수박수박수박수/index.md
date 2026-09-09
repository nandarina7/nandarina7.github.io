---
title: "[프로그래머스] 수박수박수박수박수박수?"
published: 2026-09-09
description: "Lv.1 · 해시 · 한 줄 요약"
tags: ["해시", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12922) · **Lv.1**

## 문제 요약

#### 문제 설명

길이가 `n`이고, `"수박수박수박수...."`와 같은 패턴을 유지하는 문자열을 리턴하는 함수, `solution`을 완성하세요. 예를들어 `n`이 4이면 `"수박수박"`을 리턴하고 3이라면 `"수박수"`를 리턴하면 됩니다.

#### 제한 조건

* `n`은 길이 10,000이하인 자연수입니다.

#### 입출력 예

|  n | return   |
| -: | :------- |
|  3 | `"수박수"`  |
|  4 | `"수박수박"` |


## 접근

"수박" 단위로 문자열 생성해서 슬라이싱하기

## 풀이

```python title="solution.py"
def solution(n):
    return ("수박"*((n+1)//2))[0:n]
```

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

그냥 n을 곱하면 메모리가 터질수도?