---
title: "[프로그래머스] 자연수 뒤집어 배열로 만들기"
published: 2026-09-07
description: "Lv.1 · 기본 · 문자열"
tags: ["문자열", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12932) · **Lv.1**

## 문제 요약

#### 문제 설명

자연수 `n`을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
예를들어 `n`이 `12345`이면 `[5,4,3,2,1]`을 리턴합니다.

#### 제한 조건

* `n`은 10,000,000,000 이하인 자연수입니다.

#### 입출력 예

|     n | return        |
| ----: | ------------- |
| 12345 | `[5,4,3,2,1]` |

## 접근

str로 바꾼 후 for문으로 앞에서부터 순회
list에 하나씩 집어넣고 뒤집기 or insert()로 앞에서 부터 넣기

## 풀이

```python title="solution1.py"
def solution(n):
    answer = []
    for i in str(n):
        answer.append(int(i))
    return answer[::-1]
```

```python title="solution2.py"
def solution(n):
    return list(map(int, reversed(str(n))))
```
* `str(n)` → 숫자를 문자열로 변환: `12345` → `"12345"`
* `reversed()` → 뒤집은 리스트를 반환 : `"12345"` → `"54321"`
* `리스트.reverse()` : 그 리스트 자체를 뒤집음
* `map(int, ...)` → 각 문자를 숫자로 변환
map(함수, 반복가능한_자료), 자료의 각 원소에 함수를 적용해준다.
* `list()` → 리스트로 변환

```python title="solution3.py"
def solution(n):
    return [int(i) for i in str(n)][::-1]
```

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

컴프리헨션과 map, filter와 같은 내장 함수를 잘 활용해보자.