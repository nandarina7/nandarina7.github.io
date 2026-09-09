---
title: "[프로그래머스] 가운데 글자 가져오기"
published: 2026-09-08
description: "Lv.1 · 기본 · 문자열"
tags: ["기본", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12903) · **Lv.1**

## 문제 요약

#### 문제 설명

단어 `s`의 가운데 글자를 반환하는 함수, `solution`을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

#### 제한사항

- `s`는 길이가 1 이상, 100이하인 스트링입니다.

#### 입출력 예

| s | return |
|---|---|
| "abcde" | "c" |
| "qwer" | "we" |

## 접근

짝수 홀수 나눠서 반환

## 풀이

```python title="solution1.py"
def solution(s):
    if len(s)%2==0:
        answer = s[len(s)//2-1 : len(s)//2+1]
    else:
        answer = s[len(s)//2]
    return answer
```
내가 처음 짠 코드

```python title="solution2.py"
def solution(s):
    return s[(len(s)-1)//2 : len(s)//2 + 1]
```
인덱스는 0부터 시작함. 리스트의 길이는 1부터 시작함. 따라서 리스트의 길이가 0부터 시작하도록 -1을 해줌.
(사실 약간 감이 안온다. 그냥 홀짝은 if문으로 구현하는게 편하고 직관적인 듯)

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

if문 안쓰고 하는법