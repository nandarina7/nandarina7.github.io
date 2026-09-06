---
title: "[프로그래머스] 두 정수 사이의 합"
published: 2026-09-05
description: "Lv.1 · 기본 · 연속합"
tags: ["Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12912) · **Lv.1**

## 문제 요약

#### 문제 설명

두 정수 `a`, `b`가 주어졌을 때 `a`와 `b` 사이에 속한 모든 정수의 합을 리턴하는 함수 `solution`을 완성하세요.

예를 들어 `a = 3`, `b = 5`인 경우, `3 + 4 + 5 = 12`이므로 `12`를 리턴합니다.

#### 제한 조건

- `a`와 `b`가 같은 경우는 둘 중 아무 수나 리턴하세요.
- `a`와 `b`는 `-10,000,000` 이상 `10,000,000` 이하인 정수입니다.
- `a`와 `b`의 대소관계는 정해져 있지 않습니다.

#### 입출력 예

| a | b | return |
|---:|---:|---:|
| 3 | 5 | 12 |
| 3 | 3 | 3 |
| 5 | 3 | 12 |

## 접근

처음에는 for문으로 길게 풀이를 작성하려 했으나 컴프리헨션으로 짧고 간지나는 코드를 짜기로 결심함.

그리고 리스트 전용 함수인 sum도 같이 사용하여 풀이를 만들었지만, a와 b의 대소관계가 정해져있지 않은것을 뒤늦게 확인. (오답)

max와 min을 우선 뽑고 sum과 리스트 컴프리헨션을 사용하여 다음과 같이 풀이 1을 완성함.

이후 AI에게 조언을 구해서 더 짧은 한줄 코드를 완성

## 풀이

#### 1번 풀이

```python title="solution1.py"
def solution(a, b):
    c = max(a,b)
    d = min(a,b)
    answer = sum([x for x in range(d, c+1)])
    return answer
```

#### 2번 풀이

```python title="solution2.py"
def solution(a, b):
    return sum(range(min(a,b),max(a,b)+1))
```

#### 3번 풀이

```python title="solution2.py"
def solution(a, b):
    return (abs(a-b)+1)*(a+b)//2
```

## 시간복잡도

다른 사람 풀이중에 시그마 합공식을 사용해서 푼 풀이가 있었음! (3번 풀이)

그건 시간복잡도가 O(n)이고 나머지 1,2번 풀이는 O(n)임.

- 시간: O(n)
- 공간: O(n)

## 배운 점

수학 공식을 이용한 풀이는 전혀 생각못했다. 수학 공식을 이용하는 방법도 떠올릴 수 있도록 해야겠음.