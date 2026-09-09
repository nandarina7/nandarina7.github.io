---
title: "[프로그래머스] 문자열 다루기 기본"
published: 2026-09-07
description: "Lv.1 · 기본 · 문자열"
tags: ["문자열", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12918) · **Lv.1**

## 문제 요약

#### 문제 설명

문자열 `s`의 길이가 4 혹은 6이고, 숫자로만 구성되어 있는지 확인해주는 함수 `solution`을 완성하세요. 예를 들어 `s`가 `"a234"`이면 `False`를 리턴하고 `"1234"`라면 `True`를 리턴하면 됩니다.

#### 제한 사항

* `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.
* `s`는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

#### 입출력 예

| s        | return  |
| -------- | ------- |
| `"a234"` | `false` |
| `"1234"` | `true`  |


## 접근

파이썬은 숫자인지 확인해주는 함수가 존재함!
[링크](https://sikmulation.tistory.com/83)
문자열 객체가 가지는 내장 함수인 s.isdigit()을 사용하자.

## 풀이

```python title="solution1.py"
def solution(s):
    return s.isdigit() and len(s) in [4,6]
```

```python title="solution2.py"
def solution(s):
    import re
    return bool(re.match("^(\d{4}|\d{6})$", s))
```

#### 정규표현식 핵심 정리

* `\d` → 숫자 1개
* `{4}` → 4개
* `{6}` → 6개
* `|` → 또는
* `^` → 문자열 시작
* `$` → 문자열 끝
* `re.match()` → 패턴과 일치하는지 검사
* `bool()` → `True` / `False`로 변환
즉, **문자열 전체가 숫자 4개 또는 6개인지 검사**하는 코드

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

문자열 기초