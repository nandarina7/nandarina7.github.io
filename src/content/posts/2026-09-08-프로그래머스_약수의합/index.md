---
title: "[프로그래머스] 약수의 합"
published: 2026-09-08
description: "Lv.1 · 기본 · 수학"
tags: ["수학", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12928) · **Lv.1**

## 문제 요약

#### 문제 설명

정수 `n`을 입력받아 `n`의 약수를 모두 더한 값을 리턴하는 함수, `solution`을 완성해주세요.

#### 제한 사항

- `n`은 0 이상 30000이하인 정수입니다.

#### 입출력 예

| n | return |
|---:|---:|
| 12 | 28 |
| 5 | 6 |

#### 입출력 예 설명

##### 입출력 예 #1

12의 약수는 `1, 2, 3, 4, 6, 12`입니다. 이를 모두 더하면 28입니다.

##### 입출력 예 #2

5의 약수는 `1, 5`입니다. 이를 모두 더하면 6입니다.

## 접근

소수찾기 알고리즘이 생각났는데, 약수니까 그냥 1부터 n까지 나누어 떨어지는 값들을 리스트로 담아서 sum함

## 풀이

```python title="solution.py"
def solution(n):
    return sum(i for i in range(1, n+1) if n%i==0)
```

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

```python
print(i for i in range(1, n+1) if n%i==0)
```
를 하면
`<generator object solution.<locals>.<genexpr> at 0x719101d45490>`가 뜬다.
제너레이터라서 리스트로 묶어주어야 쓸 수 있음. sum은 제네레이터도 가능한 듯.