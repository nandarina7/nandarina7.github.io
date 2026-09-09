---
title: "[프로그래머스] 정수 내림차순으로 배치하기"
published: 2026-09-07
description: "Lv.1 · 기본 · 배열"
tags: ["배열", "Python"]
category: "PS/프로그래머스"
draft: false
lang: "ko"
---

> [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12933#) · **Lv.1**

## 문제 요약

#### 문제 설명

함수 `solution`은 정수 `n`을 매개변수로 입력받습니다. `n`의 각 자릿수를 큰 것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.

예를 들어 `n`이 `118372`면 `873211`을 리턴하면 됩니다.

#### 제한 조건

- `n`은 10이상 8000000000 이하인 자연수입니다.

#### 입출력 예

| n | return |
|---|---:|
| 118372 | 873211 |

## 접근

가장 처음에 생각난 방법은 str로 만든 후 하나씩 꺼내서 딕셔너리에 넣은 후에 딕셔너리를 정렬해서 큰 순서대로 개수만큼 나열하기...
풀이를 보면 너무 길고 좀 답답한 느낌이 든다.

그래서 힙소트로도 구현해봤는데, 힙소트는 리스트로 쓰는게 아니라, 무조건 pop 또는 push하는 형태로 써야한다.. 이거 저번에도 실수했는데 또 실수해서 덕분에 복습함 (힙소트의 리스트는 트리구조라서 리스트 자체가 정렬되어 있지 않음)

join과 sort를 이용해서 최종 풀이를 아래와같이 만들었다.

## 풀이

```python title="solution1.py"
def solution(n):
    dic = {}
    for i in str(n):
        dic[i] = dic.get(i, 0) + 1
    answer = ""
    for k,v in sorted(dic.items(), reverse=True):
        print(k, v)
        for i in range(v):
            answer += str(k)
    return int(answer)
```

```python title="solution2.py"
def solution(n):
    return int(''.join(sorted(str(n), reverse=True)))
```

list(str(n))해야하지 않는가? 의문이 들었다면 당신은 적어도 파이썬을 해본사람.
놀랍게도 sorted는 문자열을 입력으로 받을 수 있다! 그리고 반환값은 무조건 리스트이다. 즉, `문자열 -> 리스트`가 된다.

[참고하세요](https://sennieworld.tistory.com/46)

## 시간복잡도

- 시간: O(n)
- 공간: O(n)

## 배운 점

sort()와 sorted()가 문자열도 입력받는다.