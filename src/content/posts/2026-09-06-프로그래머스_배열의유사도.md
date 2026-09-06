---
title: "[프로그래머스] 배열의 유사도"
published: 2026-09-06
description: "Lv.1 · 기본 · 배열"
tags: ["배열", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120903) · **Lv.1**

## 문제 요약

#### 문제 설명

두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 `s1`과 `s2`가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항

- `1 ≤ s1`, `s2`의 길이 `≤ 100`
- `1 ≤ s1`, `s2`의 원소의 길이 `≤ 10`
- `s1`과 `s2`의 원소는 알파벳 소문자로만 이루어져 있습니다.
- `s1`과 `s2`는 각각 중복된 원소를 갖지 않습니다.

#### 입출력 예

| s1 | s2 | result |
|---|---|---:|
| `["a", "b", "c"]` | `["com", "b", "d", "p", "c"]` | 2 |
| `["n", "omg"]` | `["m", "dot"]` | 0 |

#### 입출력 예 설명

#### 입출력 예 #1

- `"b"`와 `"c"`가 같으므로 `2`를 return합니다.

#### 입출력 예 #2

- 같은 원소가 없으므로 `0`을 return합니다.

## 접근

각 배열의 최대 크기가 100이하라서 그냥 2중 for문 돌림.
만약 최대 크기가 10000이면 10,000 x 10,000 = 100,000,000으로 시간초과남.

## 풀이

내 풀이
```python title="solution1.py"
def solution(s1, s2):
    answer = 0
    for w1 in s1:
        for w2 in s2:
            if w1 == w2:
                answer += 1
    return answer
```

집합을 이용한 풀이
```python title="solution2.py"
def solution(s1, s2):
    return len((set(s1) & set(s2)))
```
원소 중복이 없어서 가능!

2중 for문 내가 줄여봄 ㅎㅎ
```python title="solution3.py"
def solution(s1, s2):
    return len([x for x in s1 if x in s2])
```

투포인터 방식
시간복잡도 O(n log n)
```python title="solution3.py"
def solution(s1, s2):
    i, j = 0, 0
    s1.sort()
    s2.sort()
    cnt = 0
    
    while(i<len(s1) and j <len(s2)):
        if s1[i] == s2[j]:
            cnt += 1
            i += 1
            j += 1
        else:
            if s1[i] < s2[j]:
                i += 1
            elif s1[i] > s2[j]:
                j += 1
    return cnt
```


## 시간복잡도

set이 해시 기반이므로 시간복잡도가 O(n)임
- 시간: O(n)
- 공간: O(n)

## 배운 점

여러가지 방법으로 구현해보기!

투포인터 복습