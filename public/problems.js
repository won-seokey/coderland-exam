// Original Python course assessment: 20 + 20 + 15 + 10.
window.PYTHON_COURSES = [{"id": "beginner", "label": "초급", "count": 20}, {"id": "intermediate", "label": "중급", "count": 20}, {"id": "advanced", "label": "고급", "count": 15}, {"id": "expert", "label": "심화", "count": 10}];
window.PYTHON_PROBLEMS = [
  {
    "title": "입력한 이름 그대로",
    "subtitle": "입력과 출력을 한 번씩 사용하기",
    "topics": [
      "문자열 입력",
      "출력"
    ],
    "minutes": 2,
    "description": [
      "이름이 한 줄로 주어진다. 입력받은 이름을 그대로 출력하라.",
      "인사말이나 설명은 붙이지 않는다."
    ],
    "input": [
      "첫째 줄에 이름이 주어진다."
    ],
    "output": [
      "입력받은 이름을 그대로 한 줄에 출력한다."
    ],
    "constraints": [
      "이름은 길이 1~10의 영문 소문자이다."
    ],
    "samples": [
      {
        "input": "mina",
        "output": "mina",
        "explanation": "입력한 mina를 그대로 출력한다."
      },
      {
        "input": "tom",
        "output": "tom",
        "explanation": "이름이 달라도 입력받은 값을 출력한다."
      }
    ],
    "hints": [
      "input()으로 한 줄을 입력받을 수 있다.",
      "입력받은 값을 print()로 출력하자."
    ],
    "approach": [
      "이름을 문자열로 입력받는다.",
      "이름을 그대로 출력한다."
    ],
    "complexity": "시간·공간 O(L), L은 이름 길이",
    "solution": "name = input()\nprint(name)",
    "id": "PY-001",
    "level": 1,
    "difficulty": 1,
    "points": 3,
    "outputMode": "lines",
    "unit": "01 · 입출력",
    "concept": "문자열을 입력받고 그대로 출력할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 이름이 주어진다.",
      "입력받은 이름을 그대로 한 줄에 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 1,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "두 단어를 한 줄로",
    "subtitle": "여러 줄 입력과 공백 출력 확인하기",
    "topics": [
      "입력",
      "출력 형식"
    ],
    "minutes": 3,
    "description": [
      "두 단어가 한 줄에 하나씩 주어진다.",
      "첫 단어와 둘째 단어를 입력 순서대로, 공백 하나로 구분해 한 줄에 출력하라."
    ],
    "input": [
      "첫째 줄에 첫 단어가 주어진다.",
      "둘째 줄에 둘째 단어가 주어진다."
    ],
    "output": [
      "두 단어를 공백으로 구분하여 한 줄에 출력한다."
    ],
    "constraints": [
      "각 단어는 길이 1~10의 영문 소문자이다."
    ],
    "samples": [
      {
        "input": "hello\npython",
        "output": "hello python",
        "explanation": "두 줄의 입력을 한 줄로 모아 출력한다."
      },
      {
        "input": "red\nblue",
        "output": "red blue",
        "explanation": "단어 사이에 공백을 넣는다."
      }
    ],
    "hints": [
      "input()을 두 번 사용해 단어를 각각 저장하자.",
      "print(first, second)는 두 값 사이에 공백을 넣는다."
    ],
    "approach": [
      "단어 두 개를 각각 입력받는다.",
      "print에 두 값을 함께 전달한다."
    ],
    "complexity": "시간·공간 O(L), L은 두 단어의 전체 길이",
    "solution": "first = input()\nsecond = input()\nprint(first, second)",
    "id": "PY-002",
    "level": 2,
    "difficulty": 1,
    "points": 3,
    "outputMode": "lines",
    "unit": "01 · 입출력",
    "concept": "두 줄의 입력을 구별하고 한 줄에 공백으로 묶어 출력할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 첫 단어가 주어진다. 둘째 줄에 둘째 단어가 주어진다.",
      "두 단어를 공백으로 구분하여 한 줄에 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 2,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-003",
    "level": 3,
    "title": "사과는 모두 몇 개?",
    "subtitle": "숫자 두 개를 입력받아 더해 보기",
    "topics": [
      "입력",
      "출력",
      "덧셈"
    ],
    "minutes": 3,
    "points": 3,
    "description": [
      "첫 번째 바구니에 사과 A개, 두 번째 바구니에 사과 B개가 있다.",
      "두 바구니에 들어 있는 사과의 합계를 구하라."
    ],
    "input": [
      "첫째 줄에 A가 주어진다.",
      "둘째 줄에 B가 주어진다."
    ],
    "output": [
      "A와 B를 더한 값을 출력한다."
    ],
    "constraints": [
      "0 ≤ A, B ≤ 100",
      "입력은 모두 정수이다."
    ],
    "samples": [
      {
        "input": "3\n5",
        "output": "8",
        "explanation": "3개와 5개를 더하면 8개이다."
      },
      {
        "input": "0\n7",
        "output": "7",
        "explanation": "첫 바구니가 비어 있어도 같은 방법으로 더하면 된다."
      }
    ],
    "hints": [
      "int(input())으로 정수를 한 개 입력받을 수 있다. 두 번 입력받아 보자.",
      "두 변수를 +로 더하고 print()로 출력하자."
    ],
    "approach": [
      "정수 A와 B를 각각 입력받는다.",
      "print(A + B)로 합계를 출력한다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "a = int(input())\nb = int(input())\nprint(a + b)",
    "difficulty": 2,
    "outputMode": "lines",
    "unit": "02 · 기본 연산",
    "concept": "입력된 숫자를 정수로 바꾸고 더할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 A가 주어진다. 둘째 줄에 B가 주어진다.",
      "A와 B를 더한 값을 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 3,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-004",
    "level": 4,
    "title": "연필값 계산하기",
    "subtitle": "곱셈으로 전체 가격 구하기",
    "topics": [
      "변수",
      "곱셈"
    ],
    "minutes": 4,
    "points": 3,
    "description": [
      "연필 한 자루의 가격은 P원이다. 같은 연필을 N자루 사려고 한다.",
      "할인이나 추가 요금은 없다. 내야 하는 전체 금액을 구하라."
    ],
    "input": [
      "첫째 줄에 연필 한 자루의 가격 P가 주어진다.",
      "둘째 줄에 살 연필의 개수 N이 주어진다."
    ],
    "output": [
      "전체 금액을 숫자로만 출력한다. 원이라는 글자는 붙이지 않는다."
    ],
    "constraints": [
      "1 ≤ P ≤ 1,000",
      "1 ≤ N ≤ 20"
    ],
    "samples": [
      {
        "input": "500\n3",
        "output": "1500",
        "explanation": "500원짜리 연필 3자루는 1,500원이다."
      },
      {
        "input": "100\n1",
        "output": "100",
        "explanation": "한 자루만 사면 한 자루의 가격과 같다."
      }
    ],
    "hints": [
      "가격과 개수를 각각 변수에 저장하자.",
      "전체 가격은 한 자루 가격 × 개수이다. Python의 곱셈 기호는 *이다."
    ],
    "approach": [
      "정수 가격과 개수를 입력받는다.",
      "두 값을 곱해 출력한다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "price = int(input())\ncount = int(input())\nprint(price * count)",
    "difficulty": 2,
    "outputMode": "lines",
    "unit": "02 · 기본 연산",
    "concept": "입력값을 변수에 저장하고 곱셈을 적용할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 연필 한 자루의 가격 P가 주어진다. 둘째 줄에 살 연필의 개수 N이 주어진다.",
      "전체 금액을 숫자로만 출력한다. 원이라는 글자는 붙이지 않는다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 4,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "사탕을 똑같이 나누기",
    "subtitle": "몫과 나머지를 각각 출력하기",
    "topics": [
      "정수 연산",
      "몫",
      "나머지"
    ],
    "minutes": 5,
    "description": [
      "사탕 N개를 학생 K명에게 한 사람당 같은 개수로 최대한 나누어 준다.",
      "한 사람이 받는 사탕 수와 나누고 남은 사탕 수를 구하라."
    ],
    "input": [
      "첫째 줄에 사탕 수 N이 주어진다.",
      "둘째 줄에 학생 수 K가 주어진다."
    ],
    "output": [
      "한 사람이 받는 사탕 수와 남은 사탕 수를 공백으로 구분해 출력한다."
    ],
    "constraints": [
      "0 ≤ N ≤ 100",
      "1 ≤ K ≤ 10"
    ],
    "samples": [
      {
        "input": "17\n5",
        "output": "3 2",
        "explanation": "한 사람당 3개씩 주면 15개를 나누고 2개가 남는다."
      },
      {
        "input": "3\n5",
        "output": "0 3",
        "explanation": "학생 모두에게 같은 개수를 줘야 하므로 아무도 받지 못하고 3개가 남는다."
      }
    ],
    "hints": [
      "//는 정수 나눗셈의 몫, %는 나머지를 구한다.",
      "N // K와 N % K를 순서대로 출력하자."
    ],
    "approach": [
      "사탕 수와 학생 수를 정수로 입력받는다.",
      "몫과 나머지를 계산해 출력한다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "n = int(input())\nk = int(input())\nprint(n // k, n % k)",
    "id": "PY-005",
    "level": 5,
    "difficulty": 3,
    "points": 4,
    "outputMode": "lines",
    "unit": "02 · 기본 연산",
    "concept": "몫과 나머지의 의미를 구별하고 두 결과를 출력할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 사탕 수 N이 주어진다. 둘째 줄에 학생 수 K가 주어진다.",
      "한 사람이 받는 사탕 수와 남은 사탕 수를 공백으로 구분해 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 5,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "짝수일까요?",
    "subtitle": "나머지와 조건문을 연결하기",
    "topics": [
      "조건문",
      "나머지"
    ],
    "minutes": 4,
    "description": [
      "정수 N이 주어진다. N이 짝수인지 홀수인지 판별하라.",
      "2로 나누어떨어지는 정수는 짝수이다. 0도 짝수이다."
    ],
    "input": [
      "첫째 줄에 N이 주어진다."
    ],
    "output": [
      "짝수이면 EVEN, 홀수이면 ODD를 대문자로 출력한다."
    ],
    "constraints": [
      "0 ≤ N ≤ 100"
    ],
    "samples": [
      {
        "input": "8",
        "output": "EVEN",
        "explanation": "8을 2로 나눈 나머지는 0이다."
      },
      {
        "input": "7",
        "output": "ODD",
        "explanation": "7을 2로 나눈 나머지는 1이다."
      }
    ],
    "hints": [
      "N % 2의 결과를 확인하자.",
      "나머지가 0인 경우와 아닌 경우를 if와 else로 나누자."
    ],
    "approach": [
      "정수를 입력받는다.",
      "2로 나눈 나머지에 따라 EVEN 또는 ODD를 출력한다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "n = int(input())\nif n % 2 == 0:\n    print(\"EVEN\")\nelse:\n    print(\"ODD\")",
    "id": "PY-006",
    "level": 6,
    "difficulty": 3,
    "points": 4,
    "outputMode": "lines",
    "unit": "03 · 조건문",
    "concept": "나머지 조건으로 서로 다른 결과를 고를 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 N이 주어진다.",
      "짝수이면 EVEN, 홀수이면 ODD를 대문자로 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 6,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-007",
    "level": 7,
    "title": "통과했을까요?",
    "subtitle": "조건에 따라 다른 글자 출력하기",
    "topics": [
      "조건문",
      "비교 연산"
    ],
    "minutes": 4,
    "points": 4,
    "description": [
      "시험 점수가 60점 이상이면 통과이다. 60점보다 낮으면 다시 도전해야 한다.",
      "점수 S를 보고 통과 여부를 출력하라."
    ],
    "input": [
      "첫째 줄에 점수 S가 주어진다."
    ],
    "output": [
      "60점 이상이면 PASS, 아니면 RETRY를 출력한다. 대문자로 출력한다."
    ],
    "constraints": [
      "0 ≤ S ≤ 100"
    ],
    "samples": [
      {
        "input": "75",
        "output": "PASS",
        "explanation": "75는 60 이상이므로 통과이다."
      },
      {
        "input": "59",
        "output": "RETRY",
        "explanation": "59는 60보다 작으므로 다시 도전해야 한다."
      }
    ],
    "hints": [
      "60점도 통과라는 점을 확인하자.",
      "if score >= 60:과 else:로 나눌 수 있다."
    ],
    "approach": [
      "정수 점수를 입력받는다.",
      "60 이상이면 PASS, 나머지는 RETRY를 출력한다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "score = int(input())\nif score >= 60:\n    print(\"PASS\")\nelse:\n    print(\"RETRY\")",
    "difficulty": 4,
    "outputMode": "lines",
    "unit": "03 · 조건문",
    "concept": "이상·미만 조건과 경계값을 구별할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 점수 S가 주어진다.",
      "60점 이상이면 PASS, 아니면 RETRY를 출력한다. 대문자로 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 7,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "더 큰 수 고르기",
    "subtitle": "두 값을 비교해 하나를 출력하기",
    "topics": [
      "조건문",
      "비교 연산"
    ],
    "minutes": 4,
    "description": [
      "두 정수 A와 B가 주어진다. 더 큰 값을 출력하라.",
      "두 값이 같으면 그 값을 한 번 출력한다."
    ],
    "input": [
      "첫째 줄에 A가 주어진다.",
      "둘째 줄에 B가 주어진다."
    ],
    "output": [
      "두 정수 중 큰 값을 한 번 출력한다."
    ],
    "constraints": [
      "0 ≤ A, B ≤ 100"
    ],
    "samples": [
      {
        "input": "4\n9",
        "output": "9",
        "explanation": "9가 더 크다."
      },
      {
        "input": "5\n5",
        "output": "5",
        "explanation": "같은 값은 한 번만 출력한다."
      }
    ],
    "hints": [
      "A > B인지 비교해 보자.",
      "A가 크지 않다면 B를 출력해도 된다. max()를 사용해도 된다."
    ],
    "approach": [
      "두 정수를 입력받는다.",
      "비교해 더 큰 정수를 출력한다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "a = int(input())\nb = int(input())\nif a > b:\n    print(a)\nelse:\n    print(b)",
    "id": "PY-008",
    "level": 8,
    "difficulty": 4,
    "points": 4,
    "outputMode": "lines",
    "unit": "03 · 조건문",
    "concept": "두 값을 비교하고 같은 값도 처리할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 A가 주어진다. 둘째 줄에 B가 주어진다.",
      "두 정수 중 큰 값을 한 번 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 8,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-009",
    "level": 9,
    "title": "차례대로 번호 붙이기",
    "subtitle": "반복문으로 1부터 N까지 출력하기",
    "topics": [
      "for문",
      "range"
    ],
    "minutes": 5,
    "points": 5,
    "description": [
      "학생 N명에게 1번부터 N번까지 번호를 붙이려고 한다.",
      "1부터 N까지의 정수를 작은 수부터 한 줄에 하나씩 출력하라."
    ],
    "input": [
      "첫째 줄에 학생 수 N이 주어진다."
    ],
    "output": [
      "1부터 N까지 한 줄에 하나씩 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 20"
    ],
    "samples": [
      {
        "input": "4",
        "output": "1\n2\n3\n4",
        "explanation": "1, 2, 3, 4를 각각 다른 줄에 출력한다."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "학생이 한 명이면 1만 출력한다."
      }
    ],
    "hints": [
      "같은 작업을 여러 번 할 때 for문을 사용할 수 있다.",
      "range(1, n + 1)은 1부터 n까지의 수를 만든다."
    ],
    "approach": [
      "학생 수를 정수로 입력받는다.",
      "for문으로 range(1, n+1)의 값을 하나씩 출력한다."
    ],
    "complexity": "시간 O(N) · 추가 공간 O(1)",
    "solution": "n = int(input())\nfor number in range(1, n + 1):\n    print(number)",
    "difficulty": 5,
    "outputMode": "lines",
    "unit": "04 · 반복문",
    "concept": "range의 시작과 끝을 정하고 여러 줄을 출력할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N이 주어진다.",
      "1부터 N까지 한 줄에 하나씩 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 9,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "1부터 더해 보기",
    "subtitle": "반복문으로 합계를 쌓기",
    "topics": [
      "반복문",
      "누적 합"
    ],
    "minutes": 5,
    "description": [
      "정수 N이 주어진다. 1부터 N까지 모든 정수의 합을 구하라."
    ],
    "input": [
      "첫째 줄에 N이 주어진다."
    ],
    "output": [
      "1부터 N까지 더한 값을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100"
    ],
    "samples": [
      {
        "input": "5",
        "output": "15",
        "explanation": "1+2+3+4+5=15이다."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "더할 수가 1 하나뿐이다."
      }
    ],
    "hints": [
      "합계를 담을 변수를 0으로 초기화하자.",
      "range(1, n + 1)의 값을 하나씩 합계에 더하자."
    ],
    "approach": [
      "합계를 0으로 둔다.",
      "1부터 N까지 반복하며 더하고 마지막에 출력한다."
    ],
    "complexity": "시간 O(N) · 추가 공간 O(1)",
    "solution": "n = int(input())\ntotal = 0\nfor number in range(1, n + 1):\n    total += number\nprint(total)",
    "id": "PY-010",
    "level": 10,
    "difficulty": 5,
    "points": 5,
    "outputMode": "lines",
    "unit": "04 · 반복문",
    "concept": "반복문 밖에서 합계를 초기화하고 누적할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 N이 주어진다.",
      "1부터 N까지 더한 값을 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 10,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "구구단의 결과",
    "subtitle": "반복과 곱셈을 함께 사용하기",
    "topics": [
      "for문",
      "곱셈"
    ],
    "minutes": 6,
    "description": [
      "구구단의 단 D가 주어진다. D×1부터 D×9까지의 계산 결과를 순서대로 출력하라.",
      "계산식은 출력하지 않고 숫자 결과만 출력한다."
    ],
    "input": [
      "첫째 줄에 D가 주어진다."
    ],
    "output": [
      "D×1부터 D×9까지의 결과를 한 줄에 하나씩, 총 아홉 줄 출력한다."
    ],
    "constraints": [
      "2 ≤ D ≤ 9"
    ],
    "samples": [
      {
        "input": "2",
        "output": "2\n4\n6\n8\n10\n12\n14\n16\n18",
        "explanation": "2에 1부터 9까지 곱한 결과이다."
      },
      {
        "input": "3",
        "output": "3\n6\n9\n12\n15\n18\n21\n24\n27",
        "explanation": "3단의 계산 결과만 출력한다."
      }
    ],
    "hints": [
      "곱할 수는 1부터 9까지이다.",
      "for문에서 D * number를 출력하자."
    ],
    "approach": [
      "단을 입력받는다.",
      "1부터 9까지 반복하며 단과 곱한 결과를 출력한다."
    ],
    "complexity": "시간·추가 공간 O(1), 출력은 항상 9개",
    "solution": "dan = int(input())\nfor number in range(1, 10):\n    print(dan * number)",
    "id": "PY-011",
    "level": 11,
    "difficulty": 6,
    "points": 5,
    "outputMode": "lines",
    "unit": "04 · 반복문",
    "concept": "반복되는 값에 연산을 적용해 결과를 순서대로 출력할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 D가 주어진다.",
      "D×1부터 D×9까지의 결과를 한 줄에 하나씩, 총 아홉 줄 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 11,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-012",
    "level": 12,
    "title": "모은 점수의 합",
    "subtitle": "리스트의 숫자를 차례로 더하기",
    "topics": [
      "리스트",
      "반복문",
      "누적 합"
    ],
    "minutes": 6,
    "points": 5,
    "description": [
      "게임을 N번 하면서 얻은 점수가 주어진다.",
      "모든 게임에서 얻은 점수를 더해 총점을 구하라."
    ],
    "input": [
      "첫째 줄에 게임 횟수 N이 주어진다.",
      "둘째 줄에 점수 N개가 공백으로 구분되어 주어진다."
    ],
    "output": [
      "모든 점수의 합을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 50",
      "각 점수는 0 이상 100 이하이다."
    ],
    "samples": [
      {
        "input": "4\n10 20 5 15",
        "output": "50",
        "explanation": "10+20+5+15=50이다."
      },
      {
        "input": "3\n0 0 0",
        "output": "0",
        "explanation": "모든 점수가 0이면 총점도 0이다."
      }
    ],
    "hints": [
      "list(map(int, input().split()))으로 한 줄의 정수들을 리스트로 만들 수 있다.",
      "total을 0으로 만들고 각 점수를 하나씩 더하자. sum()을 사용해도 된다."
    ],
    "approach": [
      "점수를 리스트로 입력받고 total을 0으로 초기화한다.",
      "반복문에서 total에 점수를 더한 뒤 출력한다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "n = int(input())\nscores = list(map(int, input().split()))\ntotal = 0\nfor score in scores:\n    total += score\nprint(total)",
    "difficulty": 6,
    "outputMode": "lines",
    "unit": "05 · 리스트",
    "concept": "한 줄의 숫자들을 리스트로 읽어 합칠 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 게임 횟수 N이 주어진다. 둘째 줄에 점수 N개가 공백으로 구분되어 주어진다.",
      "모든 점수의 합을 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 12,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-013",
    "level": 13,
    "title": "키가 충분한 학생 수",
    "subtitle": "반복문 안에서 조건 확인하기",
    "topics": [
      "조건문",
      "반복문",
      "개수 세기"
    ],
    "minutes": 7,
    "points": 6,
    "description": [
      "놀이 기구는 키가 H 이상인 학생만 탈 수 있다. 학생 N명의 키가 주어진다.",
      "놀이 기구를 탈 수 있는 학생이 몇 명인지 구하라."
    ],
    "input": [
      "첫째 줄에 학생 수 N과 기준 키 H가 공백으로 구분되어 주어진다.",
      "둘째 줄에 학생들의 키 N개가 주어진다."
    ],
    "output": [
      "키가 H 이상인 학생 수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100",
      "1 ≤ H ≤ 200",
      "각 학생의 키는 1 이상 200 이하이다."
    ],
    "samples": [
      {
        "input": "5 150\n140 150 160 145 170",
        "output": "3",
        "explanation": "150, 160, 170인 세 학생이 탈 수 있다. 기준 키와 같아도 탈 수 있다."
      },
      {
        "input": "3 180\n150 160 170",
        "output": "0",
        "explanation": "기준을 만족하는 학생이 없다."
      }
    ],
    "hints": [
      "학생의 키를 하나씩 확인하자.",
      "키가 기준 이상일 때만 count를 1 늘리자."
    ],
    "approach": [
      "학생 수와 기준 키, 키 목록을 입력받는다.",
      "키를 순회하며 height >= 기준인 경우를 세어 출력한다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "n, limit = map(int, input().split())\nheights = list(map(int, input().split()))\ncount = 0\nfor height in heights:\n    if height >= limit:\n        count += 1\nprint(count)",
    "difficulty": 7,
    "outputMode": "lines",
    "unit": "05 · 리스트",
    "concept": "반복문 안에서 조건을 검사하고 개수를 셀 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N과 기준 키 H가 공백으로 구분되어 주어진다. 둘째 줄에 학생들의 키 N개가 주어진다.",
      "키가 H 이상인 학생 수를 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 13,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "기준 이상 점수 모으기",
    "subtitle": "조건에 맞는 값을 순서대로 출력하기",
    "topics": [
      "리스트",
      "조건문",
      "필터링"
    ],
    "minutes": 8,
    "description": [
      "점수 N개와 기준 점수 K가 주어진다.",
      "K 이상인 점수만 원래 순서대로 출력하라. 같은 점수가 여러 번 있으면 모두 출력한다.",
      "기준을 만족하는 점수가 없으면 NONE을 출력한다."
    ],
    "input": [
      "첫째 줄에 N과 K가 주어진다.",
      "둘째 줄에 점수 N개가 공백으로 구분되어 주어진다."
    ],
    "output": [
      "기준 이상인 점수를 입력 순서대로 한 줄에 하나씩 출력한다. 없으면 NONE을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 50",
      "0 ≤ K, 각 점수 ≤ 100"
    ],
    "samples": [
      {
        "input": "5 60\n70 40 60 90 60",
        "output": "70\n60\n90\n60",
        "explanation": "60도 포함하며 같은 점수가 반복되어도 그대로 남긴다."
      },
      {
        "input": "3 80\n30 50 70",
        "output": "NONE",
        "explanation": "80 이상인 점수가 없다."
      }
    ],
    "hints": [
      "키가 충분한 학생 수 문제와 조건 검사는 비슷하지만, 이번에는 개수가 아닌 값을 출력한다.",
      "조건을 만족한 점수를 새 리스트에 모으면 빈 결과도 확인할 수 있다."
    ],
    "approach": [
      "조건을 통과한 점수를 새 리스트에 모은다.",
      "새 리스트가 비었으면 NONE, 아니면 원래 순서대로 점수를 출력한다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "n, limit = map(int, input().split())\nscores = list(map(int, input().split()))\npassed = []\nfor score in scores:\n    if score >= limit:\n        passed.append(score)\nif len(passed) == 0:\n    print(\"NONE\")\nelse:\n    for score in passed:\n        print(score)",
    "id": "PY-014",
    "level": 14,
    "difficulty": 7,
    "points": 6,
    "outputMode": "lines",
    "unit": "05 · 리스트",
    "concept": "조건에 맞는 값을 순서·중복을 유지해 모으고 빈 결과를 처리할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 N과 K가 주어진다. 둘째 줄에 점수 N개가 공백으로 구분되어 주어진다.",
      "기준 이상인 점수를 입력 순서대로 한 줄에 하나씩 출력한다. 없으면 NONE을 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 14,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-015",
    "level": 15,
    "title": "단어 속 모음 찾기",
    "subtitle": "문자열을 한 글자씩 살펴보기",
    "topics": [
      "문자열",
      "포함 여부",
      "반복문"
    ],
    "minutes": 7,
    "points": 6,
    "description": [
      "영문 소문자로 된 단어가 주어진다.",
      "모음 a, e, i, o, u가 모두 몇 번 나오는지 구하라. 같은 모음이 여러 번 나오면 각각 센다."
    ],
    "input": [
      "첫째 줄에 영문 소문자로 이루어진 단어가 주어진다."
    ],
    "output": [
      "단어에 포함된 모음의 총개수를 출력한다."
    ],
    "constraints": [
      "단어 길이는 1 이상 1,000 이하이다.",
      "공백이나 대문자는 주어지지 않는다."
    ],
    "samples": [
      {
        "input": "banana",
        "output": "3",
        "explanation": "a가 세 번 나오므로 답은 3이다."
      },
      {
        "input": "sky",
        "output": "0",
        "explanation": "문제에서 정한 다섯 모음이 없다."
      }
    ],
    "hints": [
      "문자열도 for문으로 한 글자씩 읽을 수 있다.",
      "ch in \"aeiou\"로 모음인지 확인할 수 있다."
    ],
    "approach": [
      "모음 개수를 0으로 초기화한다.",
      "단어를 한 글자씩 읽고 aeiou에 포함되는 글자면 1을 더한다."
    ],
    "complexity": "시간 O(L) · 공간 O(L), L은 단어 길이",
    "solution": "word = input()\ncount = 0\nfor ch in word:\n    if ch in \"aeiou\":\n        count += 1\nprint(count)",
    "difficulty": 8,
    "outputMode": "lines",
    "unit": "06 · 문자열",
    "concept": "문자열을 한 글자씩 순회하고 포함 여부를 확인할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 영문 소문자로 이루어진 단어가 주어진다.",
      "단어에 포함된 모음의 총개수를 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 15,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "글자가 처음 나온 위치",
    "subtitle": "문자열의 위치와 탐색 종료 확인하기",
    "topics": [
      "문자열",
      "인덱스",
      "break"
    ],
    "minutes": 8,
    "description": [
      "단어와 찾을 글자가 주어진다. 찾을 글자가 단어에 처음 나타나는 위치를 구하라.",
      "위치는 1부터 센다. 같은 글자가 여러 번 나와도 첫 번째 위치만 출력한다.",
      "글자가 없으면 -1을 출력한다."
    ],
    "input": [
      "첫째 줄에 단어가 주어진다.",
      "둘째 줄에 찾을 글자 한 개가 주어진다."
    ],
    "output": [
      "찾을 글자의 첫 번째 위치를 출력한다. 없으면 -1을 출력한다."
    ],
    "constraints": [
      "단어 길이는 1~100이며 영문 소문자로만 이루어져 있다.",
      "찾을 글자도 영문 소문자 한 개이다."
    ],
    "samples": [
      {
        "input": "banana\na",
        "output": "2",
        "explanation": "a는 2, 4, 6번째에 있지만 처음 위치인 2를 출력한다."
      },
      {
        "input": "apple\nz",
        "output": "-1",
        "explanation": "z가 없으므로 -1이다."
      }
    ],
    "hints": [
      "word[i]는 인덱스 i의 글자이며, 문제에서 말하는 위치는 i+1이다.",
      "글자를 찾았으면 break로 반복을 끝내자."
    ],
    "approach": [
      "정답 위치를 -1로 시작한다.",
      "문자열을 앞에서부터 확인하고 일치하면 위치를 저장한 뒤 반복을 끝낸다."
    ],
    "complexity": "시간 O(L) · 공간 O(L), L은 단어 길이",
    "solution": "word = input()\ntarget = input()\nanswer = -1\nfor i in range(len(word)):\n    if word[i] == target:\n        answer = i + 1\n        break\nprint(answer)",
    "id": "PY-016",
    "level": 16,
    "difficulty": 8,
    "points": 6,
    "outputMode": "lines",
    "unit": "06 · 문자열",
    "concept": "인덱스와 위치 번호를 구별하고 첫 일치에서 종료할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 단어가 주어진다. 둘째 줄에 찾을 글자 한 개가 주어진다.",
      "찾을 글자의 첫 번째 위치를 출력한다. 없으면 -1을 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 16,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-017",
    "level": 17,
    "title": "최고 점수는 몇 번째?",
    "subtitle": "가장 큰 값과 처음 나온 위치 찾기",
    "topics": [
      "리스트",
      "인덱스",
      "최댓값"
    ],
    "minutes": 8,
    "points": 7,
    "description": [
      "학생 N명의 점수가 입력 순서대로 주어진다.",
      "가장 높은 점수와 그 점수를 받은 첫 번째 학생의 번호를 구하라. 학생 번호는 1부터 시작한다.",
      "최고 점수를 받은 학생이 여러 명이면 가장 먼저 입력된 학생의 번호를 출력한다."
    ],
    "input": [
      "첫째 줄에 학생 수 N이 주어진다.",
      "둘째 줄에 점수 N개가 주어진다."
    ],
    "output": [
      "최고 점수와 학생 번호를 공백으로 구분하여 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100",
      "각 점수는 0 이상 100 이하이다."
    ],
    "samples": [
      {
        "input": "5\n70 90 80 90 60",
        "output": "90 2",
        "explanation": "최고 점수는 90이고 처음 받은 학생은 2번이다."
      },
      {
        "input": "1\n0",
        "output": "0 1",
        "explanation": "학생이 한 명이면 그 학생의 점수와 번호를 출력한다."
      }
    ],
    "hints": [
      "첫 번째 점수를 현재 최댓값으로 두고 시작해 보자.",
      "더 큰 점수를 찾았을 때만 점수와 번호를 바꾸면 동점의 첫 위치를 지킬 수 있다."
    ],
    "approach": [
      "첫 번째 학생의 점수와 번호를 저장한다.",
      "리스트의 각 위치를 살펴보고 더 큰 점수에서만 정답을 갱신한다. 인덱스에 1을 더하면 학생 번호가 된다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "n = int(input())\nscores = list(map(int, input().split()))\nbest = scores[0]\nwinner = 1\nfor i in range(n):\n    if scores[i] > best:\n        best = scores[i]\n        winner = i + 1\nprint(best, winner)",
    "difficulty": 9,
    "outputMode": "lines",
    "unit": "07 · 위치와 최댓값",
    "concept": "최댓값과 위치를 함께 관리하고 동점의 첫 위치를 지킬 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N이 주어진다. 둘째 줄에 점수 N개가 주어진다.",
      "최고 점수와 학생 번호를 공백으로 구분하여 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 17,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-018",
    "level": 18,
    "title": "가장 인기 있는 간식",
    "subtitle": "딕셔너리로 투표 수 세기",
    "topics": [
      "딕셔너리",
      "빈도 집계",
      "정렬"
    ],
    "minutes": 10,
    "points": 7,
    "description": [
      "학생 N명이 좋아하는 간식에 투표했다. 간식 이름은 apple, bread, cookie, milk 중 하나이다.",
      "가장 많은 표를 받은 간식의 이름과 득표 수를 구하라.",
      "득표 수가 같으면 이름이 사전순으로 앞선 간식을 고른다. 사전순은 apple, bread, cookie, milk 순서이다."
    ],
    "input": [
      "첫째 줄에 투표 수 N이 주어진다.",
      "다음 N개의 줄에 간식 이름이 한 개씩 주어진다."
    ],
    "output": [
      "선택한 간식의 이름과 득표 수를 공백으로 구분하여 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100",
      "간식 이름은 apple, bread, cookie, milk 중 하나이다."
    ],
    "samples": [
      {
        "input": "5\nmilk\napple\nmilk\nbread\nmilk",
        "output": "milk 3",
        "explanation": "milk가 세 표로 가장 많다."
      },
      {
        "input": "4\nbread\napple\nbread\napple",
        "output": "apple 2",
        "explanation": "두 표씩 같으므로 사전순으로 앞선 apple을 고른다."
      }
    ],
    "hints": [
      "간식 이름을 키, 득표 수를 값으로 하는 딕셔너리를 만들어 보자.",
      "이름을 sorted()로 정렬해 확인하고, 더 많은 표일 때만 정답을 바꾸면 동점도 처리할 수 있다."
    ],
    "approach": [
      "각 간식의 득표 수를 딕셔너리에 누적한다.",
      "간식 이름을 오름차순으로 확인한다. 지금까지 가장 많은 표보다 클 때만 정답을 바꾼다."
    ],
    "complexity": "시간 O(N+U log U) · 공간 O(U), 간식 종류 U는 최대 4",
    "solution": "n = int(input())\ncounts = {}\nfor _ in range(n):\n    snack = input()\n    if snack not in counts:\n        counts[snack] = 0\n    counts[snack] += 1\nwinner = \"\"\nbest = 0\nfor snack in sorted(counts):\n    if counts[snack] > best:\n        winner = snack\n        best = counts[snack]\nprint(winner, best)",
    "difficulty": 9,
    "outputMode": "lines",
    "unit": "08 · 딕셔너리",
    "concept": "딕셔너리로 빈도를 세고 간단한 동점 규칙을 적용할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 투표 수 N이 주어진다. 다음 N개의 줄에 간식 이름이 한 개씩 주어진다.",
      "선택한 간식의 이름과 득표 수를 공백으로 구분하여 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 18,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "title": "학생별 점수 합치기",
    "subtitle": "같은 이름의 점수를 모아 정렬하기",
    "topics": [
      "딕셔너리",
      "누적 합",
      "정렬"
    ],
    "minutes": 10,
    "description": [
      "게임 결과 N개가 주어진다. 한 결과는 학생 이름과 점수로 이루어진다. 같은 학생의 결과가 여러 번 나올 수 있다.",
      "학생별 총점을 구하고, 이름을 사전순으로 정렬해 출력하라.",
      "이름은 anna, ben, chris, dina 중 하나이다. 입력에 등장한 학생만 출력하며, 총점이 0인 학생도 출력한다."
    ],
    "input": [
      "첫째 줄에 결과 수 N이 주어진다.",
      "다음 N개의 줄에 이름과 점수가 공백으로 구분되어 주어진다."
    ],
    "output": [
      "이름의 사전순으로 이름과 총점을 공백으로 구분해 한 줄씩 출력한다.",
      "사전순은 anna, ben, chris, dina 순서이다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100",
      "0 ≤ 각 점수 ≤ 100"
    ],
    "samples": [
      {
        "input": "3\nanna 10\nben 20\nanna 30",
        "output": "anna 40\nben 20",
        "explanation": "anna의 두 점수를 더하면 40이다."
      },
      {
        "input": "2\ndina 0\nben 5",
        "output": "ben 5\ndina 0",
        "explanation": "입력 순서와 상관없이 이름순으로 출력하며, 총점 0도 남긴다."
      }
    ],
    "hints": [
      "이름을 키, 총점을 값으로 저장하자.",
      "이미 있는 이름이면 기존 값에 새 점수를 더한다. 마지막에 이름을 정렬하자."
    ],
    "approach": [
      "입력한 점수를 이름별로 누적한다.",
      "등장한 이름들을 정렬하고 이름과 총점을 함께 출력한다."
    ],
    "complexity": "시간 O(N+U log U) · 공간 O(U), 학생 종류 U는 최대 4",
    "solution": "n = int(input())\ntotals = {}\nfor _ in range(n):\n    name, score = input().split()\n    if name not in totals:\n        totals[name] = 0\n    totals[name] += int(score)\nfor name in sorted(totals):\n    print(name, totals[name])",
    "id": "PY-019",
    "level": 19,
    "difficulty": 10,
    "points": 7,
    "outputMode": "lines",
    "unit": "08 · 딕셔너리",
    "concept": "문자·숫자가 섞인 입력을 읽고 이름별 합계를 출력할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 결과 수 N이 주어진다. 다음 N개의 줄에 이름과 점수가 공백으로 구분되어 주어진다.",
      "이름의 사전순으로 이름과 총점을 공백으로 구분해 한 줄씩 출력한다. 사전순은 anna, ben, chris, dina 순서이다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 19,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "id": "PY-020",
    "level": 20,
    "title": "통과한 학생 명단",
    "subtitle": "입력·합계·조건·정렬을 함께 사용하기",
    "topics": [
      "입력 처리",
      "조건문",
      "리스트",
      "정렬"
    ],
    "minutes": 12,
    "points": 7,
    "description": [
      "학생 N명의 이름과 세 과목 점수가 주어진다. 세 과목의 총점이 180점 이상이면 통과이다.",
      "통과한 학생의 이름을 사전순으로 정렬해 출력하라. 각 과목의 개별 통과 조건은 없다.",
      "통과한 학생이 한 명도 없으면 NONE을 출력한다."
    ],
    "input": [
      "첫째 줄에 학생 수 N이 주어진다.",
      "다음 N개의 줄에 이름과 세 과목 점수가 공백으로 구분되어 주어진다."
    ],
    "output": [
      "통과한 학생의 이름을 사전순으로 한 줄에 한 명씩 출력한다.",
      "통과한 학생이 없으면 NONE을 한 번 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100",
      "이름은 길이 1~10의 영문 소문자이며 중복되지 않는다.",
      "각 과목 점수는 0 이상 100 이하이다.",
      "사전순은 영문 소문자의 a부터 z까지 순서를 따른다."
    ],
    "samples": [
      {
        "input": "3\nmira 70 50 60\nmilo 80 80 80\njune 60 60 59",
        "output": "milo\nmira",
        "explanation": "mira는 180점, milo는 240점으로 통과한다. 이름순으로 milo, mira를 출력한다."
      },
      {
        "input": "2\nanna 50 50 50\nben 0 60 100",
        "output": "NONE",
        "explanation": "두 학생 모두 총점이 180보다 작다."
      }
    ],
    "hints": [
      "한 줄을 split()으로 나눈 뒤 이름과 세 점수를 구별해 보자. 점수만 int로 바꾼다.",
      "통과한 이름을 리스트에 모으고 sorted()로 정렬하자. 리스트가 비었을 때도 생각하자."
    ],
    "approach": [
      "각 줄의 이름과 세 점수를 입력받고 총점을 구한다.",
      "총점이 180 이상인 학생 이름만 리스트에 넣는다.",
      "리스트가 비면 NONE을, 아니면 이름순으로 정렬해 한 줄씩 출력한다."
    ],
    "complexity": "시간 O(N log N) · 공간 O(N) (이름 길이 최대 10)",
    "solution": "n = int(input())\npassed = []\nfor _ in range(n):\n    name, a, b, c = input().split()\n    total = int(a) + int(b) + int(c)\n    if total >= 180:\n        passed.append(name)\nif len(passed) == 0:\n    print(\"NONE\")\nelse:\n    for name in sorted(passed):\n        print(name)",
    "difficulty": 10,
    "outputMode": "lines",
    "unit": "09 · 종합 복습",
    "concept": "입력·정수 변환·합계·조건·정렬을 함께 적용할 수 있는지 확인해요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N이 주어진다. 다음 N개의 줄에 이름과 세 과목 점수가 공백으로 구분되어 주어진다.",
      "통과한 학생의 이름을 사전순으로 한 줄에 한 명씩 출력한다. 통과한 학생이 없으면 NONE을 한 번 출력한다."
    ],
    "course": "beginner",
    "courseLabel": "초급",
    "courseIndex": 20,
    "caseVersion": "2026-11-08.easy20-v3"
  },
  {
    "key": "cleanwords",
    "title": "대소문자가 섞인 단어 기록",
    "subtitle": "양 끝 기호 제거와 소문자 변환을 먼저 한다.",
    "unit": "01 · 문자열 처리",
    "topics": [
      "문자열 처리"
    ],
    "concept": "영문 단어 기록의 대소문자를 구분하지 않고 등장 횟수를 세어라. 소문자로 바꾼 단어를 사전순으로 출력한다. 단어 양 끝의 마침표와 쉼표는 모두 제거하며, 제거 후 빈 문자열인 기록은 무시한다.",
    "description": [
      "영문 단어 기록의 대소문자를 구분하지 않고 등장 횟수를 세어라. 소문자로 바꾼 단어를 사전순으로 출력한다. 단어 양 끝의 마침표와 쉼표는 모두 제거하며, 제거 후 빈 문자열인 기록은 무시한다."
    ],
    "input": [
      "첫 줄 N, 다음 N줄에 기록 하나씩이 주어진다."
    ],
    "output": [
      "단어 횟수를 한 줄씩 출력한다. 유효 단어가 없으면 EMPTY를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000",
      "각 기록은 길이 1~30, 영문 대소문자 및 양 끝의 . , 만 포함한다."
    ],
    "samples": [
      {
        "input": "5\nApple,\napple\n.BANANA.\nbanana,\n...",
        "output": "apple 2\nbanana 2",
        "explanation": "기호를 제거하고 소문자로 바꾼 뒤 집계한다."
      },
      {
        "input": "2\n.,\n...",
        "output": "EMPTY",
        "explanation": "빈 단어는 세지 않는다."
      }
    ],
    "hints": [
      "양 끝 기호 제거와 소문자 변환을 먼저 한다.",
      "유효 단어만 집계하고 키를 정렬한다."
    ],
    "approach": [
      "양 끝 기호 제거와 소문자 변환을 먼저 한다.",
      "유효 단어만 집계하고 키를 정렬한다."
    ],
    "complexity": "시간 O(전체 문자 수 + U log U), 공간 O(전체 문자 수)",
    "solution": "counts={}\nfor _ in range(int(input())):\n    word=input().strip('.,').lower()\n    if word:counts[word]=counts.get(word,0)+1\nif not counts:print('EMPTY')\nfor word in sorted(counts):print(word,counts[word])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 다음 N줄에 기록 하나씩이 주어진다.",
      "단어 횟수를 한 줄씩 출력한다. 유효 단어가 없으면 EMPTY를 출력한다."
    ],
    "id": "PY-021",
    "level": 21,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 1,
    "difficulty": 1,
    "points": 5,
    "minutes": 10,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "cleanpal",
    "title": "문장을 정리하고 비교하기",
    "subtitle": "문자와 숫자인지 검사하며 새 문자열을 만든다.",
    "unit": "01 · 문자열 처리",
    "topics": [
      "문자열 처리"
    ],
    "concept": "각 문장에서 영문자와 숫자만 남기고 영문자는 소문자로 바꾼다. 정리한 문자열이 앞뒤로 같으면 YES, 다르면 NO이다. 정리 후 빈 문자열도 YES이다.",
    "description": [
      "각 문장에서 영문자와 숫자만 남기고 영문자는 소문자로 바꾼다. 정리한 문자열이 앞뒤로 같으면 YES, 다르면 NO이다. 정리 후 빈 문자열도 YES이다."
    ],
    "input": [
      "첫 줄 N, 다음 N줄에 문장이 주어진다. 빈 줄도 가능하다."
    ],
    "output": [
      "문장마다 YES 또는 NO를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100",
      "문장 길이 0~200, ASCII 영문자·숫자·공백·문장 부호"
    ],
    "samples": [
      {
        "input": "3\nA man, a plan, a canal: Panama!\nPython 3\n!!!",
        "output": "YES\nNO\nYES",
        "explanation": "공백과 부호는 제외한다."
      },
      {
        "input": "2\n0a0\nAa1",
        "output": "YES\nNO",
        "explanation": "숫자도 비교 대상이다."
      }
    ],
    "hints": [
      "문자와 숫자인지 검사하며 새 문자열을 만든다.",
      "대소문자를 통일한 후 역순과 비교한다."
    ],
    "approach": [
      "문자와 숫자인지 검사하며 새 문자열을 만든다.",
      "대소문자를 통일한 후 역순과 비교한다."
    ],
    "complexity": "시간·공간 O(전체 문자 수)",
    "solution": "for _ in range(int(input())):\n    text=''.join(c.lower() for c in input() if c.isalnum())\n    print('YES' if text==text[::-1] else 'NO')",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 다음 N줄에 문장이 주어진다. 빈 줄도 가능하다.",
      "문장마다 YES 또는 NO를 출력한다."
    ],
    "id": "PY-022",
    "level": 22,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 2,
    "difficulty": 1,
    "points": 5,
    "minutes": 10,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "rle",
    "title": "연속 글자 기록",
    "subtitle": "현재 구간의 글자와 개수를 저장한다.",
    "unit": "01 · 문자열 처리",
    "topics": [
      "문자열",
      "리스트"
    ],
    "concept": "같은 글자가 연속한 구간마다 글자와 구간 길이를 붙여 출력하라. 떨어진 같은 글자는 합치지 않는다.",
    "description": [
      "같은 글자가 연속한 구간마다 글자와 구간 길이를 붙여 출력하라. 떨어진 같은 글자는 합치지 않는다."
    ],
    "input": [
      "첫 줄에 영문 소문자 문자열이 주어진다."
    ],
    "output": [
      "예: aaabbc는 a3b2c1로 출력한다."
    ],
    "constraints": [
      "1 ≤ 길이 ≤ 1,000"
    ],
    "samples": [
      {
        "input": "aaabbc",
        "output": "a3b2c1",
        "explanation": "연속 구간 세 개를 각각 기록한다."
      },
      {
        "input": "aba",
        "output": "a1b1a1",
        "explanation": "서로 떨어진 a는 합치지 않는다."
      }
    ],
    "hints": [
      "현재 구간의 글자와 개수를 저장한다.",
      "글자가 바뀔 때 기록하고 마지막 구간도 추가한다."
    ],
    "approach": [
      "현재 구간의 글자와 개수를 저장한다.",
      "글자가 바뀔 때 기록하고 마지막 구간도 추가한다."
    ],
    "complexity": "시간·공간 O(L)",
    "solution": "s=input()\nresult=[]\ncurrent=s[0]\ncount=0\nfor ch in s:\n    if ch!=current:\n        result.append(current+str(count))\n        current,count=ch,0\n    count+=1\nresult.append(current+str(count))\nprint(\"\".join(result))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 영문 소문자 문자열이 주어진다.",
      "예: aaabbc는 a3b2c1로 출력한다."
    ],
    "id": "PY-023",
    "level": 23,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 3,
    "difficulty": 2,
    "points": 5,
    "minutes": 11,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "rotatecmd",
    "title": "회전 명령을 차례대로",
    "subtitle": "K를 목록 길이로 나눈 나머지만 회전한다.",
    "unit": "02 · 리스트·구간",
    "topics": [
      "리스트",
      "구간"
    ],
    "concept": "목록에 L K는 왼쪽 K칸 회전, R K는 오른쪽 K칸 회전, REV는 순서 뒤집기를 적용한다. 모든 명령을 순서대로 실행한 최종 목록을 구하라.",
    "description": [
      "목록에 L K는 왼쪽 K칸 회전, R K는 오른쪽 K칸 회전, REV는 순서 뒤집기를 적용한다. 모든 명령을 순서대로 실행한 최종 목록을 구하라."
    ],
    "input": [
      "첫 줄 N Q, 둘째 줄 정수 N개, 다음 Q줄 명령이 주어진다."
    ],
    "output": [
      "최종 목록을 한 줄에 출력한다."
    ],
    "constraints": [
      "1 ≤ N,Q ≤ 200",
      "0 ≤ K ≤ 10⁹",
      "-100 ≤ 원소 ≤ 100"
    ],
    "samples": [
      {
        "input": "4 3\n1 2 3 4\nR 1\nREV\nL 1",
        "output": "2 1 4 3",
        "explanation": "회전과 뒤집기는 명령 순서대로 적용한다."
      },
      {
        "input": "1 2\n7\nL 100\nREV",
        "output": "7",
        "explanation": "한 원소는 그대로다."
      }
    ],
    "hints": [
      "K를 목록 길이로 나눈 나머지만 회전한다.",
      "뒤집기 명령은 그 시점의 목록에 적용한다."
    ],
    "approach": [
      "K를 목록 길이로 나눈 나머지만 회전한다.",
      "뒤집기 명령은 그 시점의 목록에 적용한다."
    ],
    "complexity": "시간 O(NQ), 공간 O(N)",
    "solution": "n,q=map(int,input().split());a=list(map(int,input().split()))\nfor _ in range(q):\n    cmd=input().split()\n    if cmd[0]=='REV':a.reverse()\n    else:\n        k=int(cmd[1])%n\n        if cmd[0]=='R':k=(-k)%n\n        a=a[k:]+a[:k]\nprint(*a)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 정수 N개, 다음 Q줄 명령이 주어진다.",
      "최종 목록을 한 줄에 출력한다."
    ],
    "id": "PY-024",
    "level": 24,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 4,
    "difficulty": 2,
    "points": 5,
    "minutes": 11,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "riseplace",
    "title": "가장 긴 상승 구간의 위치",
    "subtitle": "현재 구간의 시작과 길이를 관리한다.",
    "unit": "02 · 리스트·구간",
    "topics": [
      "리스트",
      "구간"
    ],
    "concept": "바로 앞보다 엄격하게 큰 수가 연속하는 가장 긴 구간을 찾아라. 길이가 같으면 시작 위치가 가장 빠른 구간을 고른다. 원소를 건너뛸 수 없다.",
    "description": [
      "바로 앞보다 엄격하게 큰 수가 연속하는 가장 긴 구간을 찾아라. 길이가 같으면 시작 위치가 가장 빠른 구간을 고른다. 원소를 건너뛸 수 없다."
    ],
    "input": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다."
    ],
    "output": [
      "구간 길이와 시작 위치(1부터)를 한 줄에 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000",
      "-1000 ≤ 원소 ≤ 1000"
    ],
    "samples": [
      {
        "input": "6\n1 2 0 3 4 2",
        "output": "3 3",
        "explanation": "0,3,4 구간이 가장 길다."
      },
      {
        "input": "4\n5 5 4 3",
        "output": "1 1",
        "explanation": "같은 값은 상승이 아니며 동점은 첫 위치다."
      }
    ],
    "hints": [
      "현재 구간의 시작과 길이를 관리한다.",
      "새 길이가 최댓값보다 클 때만 정답 위치를 바꾼다."
    ],
    "approach": [
      "현재 구간의 시작과 길이를 관리한다.",
      "새 길이가 최댓값보다 클 때만 정답 위치를 바꾼다."
    ],
    "complexity": "시간 O(N), 공간 O(N)",
    "solution": "n=int(input());a=list(map(int,input().split()));start=best_start=0;best=1\nfor i in range(1,n):\n    if a[i]<=a[i-1]:start=i\n    length=i-start+1\n    if length>best:best,best_start=length,start\nprint(best,best_start+1)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "구간 길이와 시작 위치(1부터)를 한 줄에 출력한다."
    ],
    "id": "PY-025",
    "level": 25,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 5,
    "difficulty": 3,
    "points": 5,
    "minutes": 11,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "pairs",
    "title": "두 장의 합",
    "subtitle": "두 위치를 i<j로 선택한다.",
    "unit": "02 · 리스트·구간",
    "topics": [
      "문자열",
      "리스트"
    ],
    "concept": "서로 다른 위치의 두 수를 골라 합이 T인 쌍의 수를 구하라. i<j인 위치 쌍을 한 번씩 세며 값이 같아도 위치가 다르면 다른 쌍이다.",
    "description": [
      "서로 다른 위치의 두 수를 골라 합이 T인 쌍의 수를 구하라. i<j인 위치 쌍을 한 번씩 세며 값이 같아도 위치가 다르면 다른 쌍이다."
    ],
    "input": [
      "첫 줄에 N T, 둘째 줄에 정수 N개가 주어진다."
    ],
    "output": [
      "조건을 만족하는 쌍의 수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 200",
      "-100 ≤ 원소,T ≤ 100"
    ],
    "samples": [
      {
        "input": "4 4\n1 3 2 2",
        "output": "2",
        "explanation": "1+3과 서로 다른 두 2를 고른다."
      },
      {
        "input": "3 2\n1 1 1",
        "output": "3",
        "explanation": "세 위치에서 두 위치를 고르는 방법은 3개다."
      }
    ],
    "hints": [
      "두 위치를 i<j로 선택한다.",
      "값의 중복보다 위치의 중복을 구별한다."
    ],
    "approach": [
      "두 위치를 i<j로 선택한다.",
      "값의 중복보다 위치의 중복을 구별한다."
    ],
    "complexity": "시간 O(N²), 공간 O(N)",
    "solution": "n,target=map(int,input().split())\na=list(map(int,input().split()))\ncount=0\nfor i in range(n):\n    for j in range(i+1,n):\n        if a[i]+a[j]==target:\n            count+=1\nprint(count)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 N T, 둘째 줄에 정수 N개가 주어진다.",
      "조건을 만족하는 쌍의 수를 출력한다."
    ],
    "id": "PY-026",
    "level": 26,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 6,
    "difficulty": 3,
    "points": 5,
    "minutes": 12,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "transpose",
    "title": "행과 열 바꾸기",
    "subtitle": "새 행의 번호는 원래 열의 번호다.",
    "unit": "03 · 2차원 리스트",
    "topics": [
      "2차원 리스트"
    ],
    "concept": "N행 M열 행렬의 행과 열을 바꾼 전치 행렬을 출력하라.",
    "description": [
      "N행 M열 행렬의 행과 열을 바꾼 전치 행렬을 출력하라."
    ],
    "input": [
      "첫 줄에 N M, 다음 N줄에 행별 정수 M개가 주어진다."
    ],
    "output": [
      "M줄에 걸쳐 각 줄 N개 정수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N,M ≤ 30",
      "-100 ≤ 원소 ≤ 100"
    ],
    "samples": [
      {
        "input": "2 3\n1 2 3\n4 5 6",
        "output": "1 4\n2 5\n3 6",
        "explanation": "원래 첫 열이 새 첫 행이 된다."
      },
      {
        "input": "1 2\n7 8",
        "output": "7\n8",
        "explanation": "한 행이 두 행으로 바뀐다."
      }
    ],
    "hints": [
      "새 행의 번호는 원래 열의 번호다.",
      "열을 바깥 반복, 행을 안쪽 반복으로 순회한다."
    ],
    "approach": [
      "새 행의 번호는 원래 열의 번호다.",
      "열을 바깥 반복, 행을 안쪽 반복으로 순회한다."
    ],
    "complexity": "시간·공간 O(NM)",
    "solution": "n,m=map(int,input().split())\na=[list(map(int,input().split())) for _ in range(n)]\nfor c in range(m):\n    print(*(a[r][c] for r in range(n)))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 N M, 다음 N줄에 행별 정수 M개가 주어진다.",
      "M줄에 걸쳐 각 줄 N개 정수를 출력한다."
    ],
    "id": "PY-027",
    "level": 27,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 7,
    "difficulty": 4,
    "points": 5,
    "minutes": 12,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "neighbors",
    "title": "주변 지뢰 수 표시",
    "subtitle": "빈칸마다 8가지 상대 위치를 살핀다.",
    "unit": "03 · 2차원 리스트",
    "topics": [
      "2차원 리스트"
    ],
    "concept": "격자의 *는 지뢰, .은 빈칸이다. 각 빈칸을 주변 8방향에 있는 지뢰 수로 바꾸고 지뢰는 *로 유지하라. 격자 밖은 세지 않는다.",
    "description": [
      "격자의 *는 지뢰, .은 빈칸이다. 각 빈칸을 주변 8방향에 있는 지뢰 수로 바꾸고 지뢰는 *로 유지하라. 격자 밖은 세지 않는다."
    ],
    "input": [
      "첫 줄 N M, 다음 N줄에 공백 없는 격자가 주어진다."
    ],
    "output": [
      "바뀐 격자를 N줄에 출력한다. 칸 사이에는 공백을 넣지 않는다."
    ],
    "constraints": [
      "1 ≤ N,M ≤ 30",
      "격자 문자는 . 또는 *"
    ],
    "samples": [
      {
        "input": "2 3\n*..\n..*",
        "output": "*21\n12*",
        "explanation": "대각선 지뢰도 센다."
      },
      {
        "input": "1 1\n.",
        "output": "0",
        "explanation": "주변 칸이 없다."
      }
    ],
    "hints": [
      "빈칸마다 8가지 상대 위치를 살핀다.",
      "범위를 검사한 뒤 지뢰인 경우만 센다."
    ],
    "approach": [
      "빈칸마다 8가지 상대 위치를 살핀다.",
      "범위를 검사한 뒤 지뢰인 경우만 센다."
    ],
    "complexity": "시간·공간 O(NM)",
    "solution": "n,m=map(int,input().split());grid=[input() for _ in range(n)]\nfor r in range(n):\n    row=[]\n    for c in range(m):\n        if grid[r][c]=='*':row.append('*');continue\n        count=0\n        for dr in (-1,0,1):\n            for dc in (-1,0,1):\n                nr,nc=r+dr,c+dc\n                if (dr or dc) and 0<=nr<n and 0<=nc<m and grid[nr][nc]=='*':count+=1\n        row.append(str(count))\n    print(''.join(row))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄에 공백 없는 격자가 주어진다.",
      "바뀐 격자를 N줄에 출력한다. 칸 사이에는 공백을 넣지 않는다."
    ],
    "id": "PY-028",
    "level": 28,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 8,
    "difficulty": 4,
    "points": 5,
    "minutes": 12,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "ranking",
    "title": "반별 총점 순위",
    "subtitle": "먼저 이름별로 점수를 누적한다.",
    "unit": "04 · 집계·정렬",
    "topics": [
      "딕셔너리",
      "정렬"
    ],
    "concept": "반 이름과 점수 기록들을 반별로 합산하라. 총점 내림차순, 같으면 이름 오름차순으로 출력하라.",
    "description": [
      "반 이름과 점수 기록들을 반별로 합산하라. 총점 내림차순, 같으면 이름 오름차순으로 출력하라."
    ],
    "input": [
      "첫 줄에 N, 다음 N줄에 영문 소문자 이름과 점수가 주어진다."
    ],
    "output": [
      "반마다 이름 총점을 한 줄씩 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 500",
      "이름 길이 1~10",
      "0 ≤ 점수 ≤ 100"
    ],
    "samples": [
      {
        "input": "3\na 10\nb 30\na 20",
        "output": "a 30\nb 30",
        "explanation": "동점에서 a가 먼저다."
      },
      {
        "input": "2\na 1\nb 2",
        "output": "b 2\na 1",
        "explanation": "총점이 큰 b가 먼저다."
      }
    ],
    "hints": [
      "먼저 이름별로 점수를 누적한다.",
      "정렬 키를 (-총점, 이름)으로 정한다."
    ],
    "approach": [
      "먼저 이름별로 점수를 누적한다.",
      "정렬 키를 (-총점, 이름)으로 정한다."
    ],
    "complexity": "시간 O(N+U log U), 공간 O(U)",
    "solution": "n=int(input())\ntotals={}\nfor _ in range(n):\n    name,value=input().split()\n    totals[name]=totals.get(name,0)+int(value)\nfor name in sorted(totals,key=lambda x:(-totals[x],x)):\n    print(name,totals[name])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 N, 다음 N줄에 영문 소문자 이름과 점수가 주어진다.",
      "반마다 이름 총점을 한 줄씩 출력한다."
    ],
    "id": "PY-029",
    "level": 29,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 9,
    "difficulty": 5,
    "points": 5,
    "minutes": 13,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "dictionarycmd",
    "title": "수정할 수 있는 번역 사전",
    "subtitle": "딕셔너리를 명령에 따라 변경한다.",
    "unit": "04 · 집계·정렬",
    "topics": [
      "집계",
      "정렬"
    ],
    "concept": "사전은 처음에 비어 있다. SET 단어 번역은 추가 또는 덮어쓰기, DEL 단어는 삭제, GET 단어는 조회이다. 없는 단어를 삭제해도 아무 일도 일어나지 않는다.",
    "description": [
      "사전은 처음에 비어 있다. SET 단어 번역은 추가 또는 덮어쓰기, DEL 단어는 삭제, GET 단어는 조회이다. 없는 단어를 삭제해도 아무 일도 일어나지 않는다."
    ],
    "input": [
      "첫 줄 Q, 다음 Q줄에 명령이 주어진다."
    ],
    "output": [
      "GET마다 번역을 출력한다. 없으면 UNKNOWN이다."
    ],
    "constraints": [
      "1 ≤ Q ≤ 1,000",
      "단어·번역은 길이 1~10 영문 소문자",
      "GET이 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "6\nSET cat neko\nGET cat\nSET cat kitty\nGET cat\nDEL cat\nGET cat",
        "output": "neko\nkitty\nUNKNOWN",
        "explanation": "덮어쓰기와 삭제가 다음 조회에 반영된다."
      },
      {
        "input": "2\nDEL dog\nGET dog",
        "output": "UNKNOWN",
        "explanation": "없는 단어도 안전하게 삭제한다."
      }
    ],
    "hints": [
      "딕셔너리를 명령에 따라 변경한다.",
      "조회와 삭제에 없는 키 처리를 넣는다."
    ],
    "approach": [
      "딕셔너리를 명령에 따라 변경한다.",
      "조회와 삭제에 없는 키 처리를 넣는다."
    ],
    "complexity": "평균 시간 O(Q), 공간 O(Q)",
    "solution": "words={}\nfor _ in range(int(input())):\n    cmd=input().split()\n    if cmd[0]=='SET':words[cmd[1]]=cmd[2]\n    elif cmd[0]=='DEL':words.pop(cmd[1],None)\n    else:print(words.get(cmd[1],'UNKNOWN'))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 Q, 다음 Q줄에 명령이 주어진다.",
      "GET마다 번역을 출력한다. 없으면 UNKNOWN이다."
    ],
    "id": "PY-030",
    "level": 30,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 10,
    "difficulty": 5,
    "points": 5,
    "minutes": 13,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "topwords",
    "title": "자주 나온 단어 K개",
    "subtitle": "빈도 딕셔너리를 만든다.",
    "unit": "04 · 집계·정렬",
    "topics": [
      "딕셔너리",
      "정렬"
    ],
    "concept": "단어 빈도를 세어 많이 나온 순으로 K개를 출력하라. 동점은 사전순이고, 종류가 K개보다 적으면 모두 출력한다.",
    "description": [
      "단어 빈도를 세어 많이 나온 순으로 K개를 출력하라. 동점은 사전순이고, 종류가 K개보다 적으면 모두 출력한다."
    ],
    "input": [
      "첫 줄에 N K, 다음 N줄에 단어가 주어진다."
    ],
    "output": [
      "단어 횟수를 한 줄씩 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000",
      "1 ≤ K ≤ 100",
      "단어는 길이 1~10 영문 소문자"
    ],
    "samples": [
      {
        "input": "5 2\nb\na\nb\nc\na",
        "output": "a 2\nb 2",
        "explanation": "빈도 2인 a와 b를 이름순으로 출력한다."
      },
      {
        "input": "2 5\nz\nz",
        "output": "z 2",
        "explanation": "한 종류만 출력한다."
      }
    ],
    "hints": [
      "빈도 딕셔너리를 만든다.",
      "빈도 내림차순·이름 오름차순 정렬 후 앞 K개를 선택한다."
    ],
    "approach": [
      "빈도 딕셔너리를 만든다.",
      "빈도 내림차순·이름 오름차순 정렬 후 앞 K개를 선택한다."
    ],
    "complexity": "시간 O(N+U log U), 공간 O(U)",
    "solution": "n,k=map(int,input().split())\ncounts={}\nfor _ in range(n):\n    word=input()\n    counts[word]=counts.get(word,0)+1\nfor word in sorted(counts,key=lambda x:(-counts[x],x))[:k]:\n    print(word,counts[word])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 N K, 다음 N줄에 단어가 주어진다.",
      "단어 횟수를 한 줄씩 출력한다."
    ],
    "id": "PY-031",
    "level": 31,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 11,
    "difficulty": 6,
    "points": 5,
    "minutes": 13,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "coupons",
    "title": "할인권을 어디에 쓸까",
    "subtitle": "각 물건의 할인 이득은 min(가격,D)이다.",
    "unit": "05 · 조건·상태 관리",
    "topics": [
      "조건",
      "상태 관리"
    ],
    "concept": "물건 N개를 모두 산다. 할인권 한 장은 물건 하나를 D원 할인하며 가격은 0원보다 작아지지 않는다. 물건마다 최대 한 장, 전체 최대 K장을 사용해 지불 총액을 최소화하라.",
    "description": [
      "물건 N개를 모두 산다. 할인권 한 장은 물건 하나를 D원 할인하며 가격은 0원보다 작아지지 않는다. 물건마다 최대 한 장, 전체 최대 K장을 사용해 지불 총액을 최소화하라."
    ],
    "input": [
      "첫 줄 N K D, 둘째 줄 가격 N개가 주어진다."
    ],
    "output": [
      "최소 지불 총액을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000",
      "0 ≤ K ≤ N",
      "0 ≤ D,가격 ≤ 10,000"
    ],
    "samples": [
      {
        "input": "3 2 5\n2 10 7",
        "output": "9",
        "explanation": "10과 7에 쓰면 각 5원씩 절약한다."
      },
      {
        "input": "2 2 100\n3 4",
        "output": "0",
        "explanation": "가격보다 많이 할인하지 않는다."
      }
    ],
    "hints": [
      "각 물건의 할인 이득은 min(가격,D)이다.",
      "이득이 큰 K개를 선택해 합계에서 뺀다."
    ],
    "approach": [
      "각 물건의 할인 이득은 min(가격,D)이다.",
      "이득이 큰 K개를 선택해 합계에서 뺀다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "n,k,d=map(int,input().split());prices=list(map(int,input().split()))\nsavings=sorted((min(price,d) for price in prices),reverse=True)\nprint(sum(prices)-sum(savings[:k]))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N K D, 둘째 줄 가격 N개가 주어진다.",
      "최소 지불 총액을 출력한다."
    ],
    "id": "PY-032",
    "level": 32,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 12,
    "difficulty": 6,
    "points": 5,
    "minutes": 14,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "integers",
    "title": "정수 기록만 더하기",
    "subtitle": "int 변환을 try에서 시도한다.",
    "unit": "05 · 조건·상태 관리",
    "topics": [
      "함수",
      "예외",
      "상태"
    ],
    "concept": "정수로 변환 가능한 기록만 더하고, 변환할 수 없는 기록의 수를 세어라. 정수는 선택적 부호 한 개 뒤에 숫자만 있는 형태다.",
    "description": [
      "정수로 변환 가능한 기록만 더하고, 변환할 수 없는 기록의 수를 세어라. 정수는 선택적 부호 한 개 뒤에 숫자만 있는 형태다."
    ],
    "input": [
      "첫 줄에 N, 다음 N줄에 기록 문자열이 주어진다."
    ],
    "output": [
      "정수 합과 잘못된 기록 수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000",
      "기록 길이 1~12, 문자 집합은 영문 소문자·숫자·+·-·.",
      "정수의 범위는 -10⁹~10⁹"
    ],
    "samples": [
      {
        "input": "4\n3\nx\n-2\n1.5",
        "output": "1 2",
        "explanation": "3과 -2만 더한다."
      },
      {
        "input": "2\n+5\n0",
        "output": "5 0",
        "explanation": "부호가 있는 정수도 허용한다."
      }
    ],
    "hints": [
      "int 변환을 try에서 시도한다.",
      "ValueError만 잡아 잘못된 기록 수를 늘린다."
    ],
    "approach": [
      "int 변환을 try에서 시도한다.",
      "ValueError만 잡아 잘못된 기록 수를 늘린다."
    ],
    "complexity": "시간 O(전체 문자열 길이), 공간 O(최대 기록 길이)",
    "solution": "n=int(input())\ntotal=invalid=0\nfor _ in range(n):\n    try:\n        total+=int(input())\n    except ValueError:\n        invalid+=1\nprint(total,invalid)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 N, 다음 N줄에 기록 문자열이 주어진다.",
      "정수 합과 잘못된 기록 수를 출력한다."
    ],
    "id": "PY-033",
    "level": 33,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 13,
    "difficulty": 7,
    "points": 5,
    "minutes": 14,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "inventorycmd",
    "title": "상품별 재고 요청 처리",
    "subtitle": "상품별 재고를 딕셔너리에 저장한다.",
    "unit": "05 · 조건·상태 관리",
    "topics": [
      "조건",
      "상태 관리"
    ],
    "concept": "상품별 초기 재고를 저장한다. ADD 상품 수량은 재고 추가, SELL 상품 수량은 판매이다. 판매 재고가 부족하면 FAIL을 출력하고 재고는 유지한다. 성공 명령은 OK를 출력한다. 마지막에 모든 상품의 최종 재고를 이름순으로 출력한다.",
    "description": [
      "상품별 초기 재고를 저장한다. ADD 상품 수량은 재고 추가, SELL 상품 수량은 판매이다. 판매 재고가 부족하면 FAIL을 출력하고 재고는 유지한다. 성공 명령은 OK를 출력한다. 마지막에 모든 상품의 최종 재고를 이름순으로 출력한다."
    ],
    "input": [
      "첫 줄 N Q, 다음 N줄 상품 초기재고, 다음 Q줄 ADD 또는 SELL 명령이 주어진다."
    ],
    "output": [
      "먼저 명령별 OK 또는 FAIL을 Q줄, 이후 상품 재고를 N줄 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100, 1 ≤ Q ≤ 1,000",
      "상품 이름은 서로 다른 길이 1~10 영문 소문자",
      "명령의 상품은 항상 존재한다.",
      "0 ≤ 초기재고,수량 ≤ 10,000"
    ],
    "samples": [
      {
        "input": "2 3\na 2\nb 0\nSELL a 3\nADD b 4\nSELL b 1",
        "output": "FAIL\nOK\nOK\na 2\nb 3",
        "explanation": "실패한 판매는 a의 재고를 바꾸지 않는다."
      },
      {
        "input": "1 1\nx 0\nSELL x 0",
        "output": "OK\nx 0",
        "explanation": "0개 판매는 성공이다."
      }
    ],
    "hints": [
      "상품별 재고를 딕셔너리에 저장한다.",
      "실패 여부를 먼저 확인한 후에만 변경한다."
    ],
    "approach": [
      "상품별 재고를 딕셔너리에 저장한다.",
      "실패 여부를 먼저 확인한 후에만 변경한다."
    ],
    "complexity": "시간 O(N log N+Q), 공간 O(N)",
    "solution": "n,q=map(int,input().split());stock={}\nfor _ in range(n):\n    name,value=input().split();stock[name]=int(value)\nfor _ in range(q):\n    cmd,name,value=input().split();value=int(value)\n    if cmd=='SELL' and stock[name]<value:print('FAIL')\n    else:\n        stock[name]+=value if cmd=='ADD' else -value\n        print('OK')\nfor name in sorted(stock):print(name,stock[name])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 다음 N줄 상품 초기재고, 다음 Q줄 ADD 또는 SELL 명령이 주어진다.",
      "먼저 명령별 OK 또는 FAIL을 Q줄, 이후 상품 재고를 N줄 출력한다."
    ],
    "id": "PY-034",
    "level": 34,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 14,
    "difficulty": 7,
    "points": 5,
    "minutes": 14,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "stack",
    "title": "상자 스택 명령",
    "subtitle": "리스트의 끝을 스택의 위로 사용한다.",
    "unit": "06 · 스택·큐",
    "topics": [
      "스택",
      "큐"
    ],
    "concept": "PUSH x는 정수를 넣고 POP은 마지막 값을 제거해 출력한다. TOP은 제거 없이 마지막 값을 출력한다. 빈 경우 -1이다.",
    "description": [
      "PUSH x는 정수를 넣고 POP은 마지막 값을 제거해 출력한다. TOP은 제거 없이 마지막 값을 출력한다. 빈 경우 -1이다."
    ],
    "input": [
      "첫 줄에 Q, 다음 Q줄에 PUSH x, POP, TOP 명령이 주어진다."
    ],
    "output": [
      "POP과 TOP의 결과만 순서대로 한 줄씩 출력한다."
    ],
    "constraints": [
      "1 ≤ Q ≤ 1,000",
      "0 ≤ x ≤ 1,000",
      "출력 명령이 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "5\nPUSH 1\nPUSH 2\nTOP\nPOP\nPOP",
        "output": "2\n2\n1",
        "explanation": "TOP은 값을 제거하지 않는다."
      },
      {
        "input": "2\nPOP\nTOP",
        "output": "-1\n-1",
        "explanation": "비어 있으면 -1이다."
      }
    ],
    "hints": [
      "리스트의 끝을 스택의 위로 사용한다.",
      "빈 스택인지 확인한 다음 접근한다."
    ],
    "approach": [
      "리스트의 끝을 스택의 위로 사용한다.",
      "빈 스택인지 확인한 다음 접근한다."
    ],
    "complexity": "시간·공간 O(Q)",
    "solution": "stack=[]\nfor _ in range(int(input())):\n    command=input().split()\n    if command[0]==\"PUSH\":\n        stack.append(int(command[1]))\n    elif command[0]==\"POP\":\n        print(stack.pop() if stack else -1)\n    else:\n        print(stack[-1] if stack else -1)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 Q, 다음 Q줄에 PUSH x, POP, TOP 명령이 주어진다.",
      "POP과 TOP의 결과만 순서대로 한 줄씩 출력한다."
    ],
    "id": "PY-035",
    "level": 35,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 15,
    "difficulty": 8,
    "points": 5,
    "minutes": 15,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "mixedbrackets",
    "title": "두 종류 괄호 검사",
    "subtitle": "여는 괄호를 스택에 넣는다.",
    "unit": "06 · 스택·큐",
    "topics": [
      "스택",
      "큐"
    ],
    "concept": "소괄호와 대괄호가 종류와 순서를 맞춰 올바르게 중첩되어 있으면 YES, 아니면 NO이다. 빈 문자열도 YES이다.",
    "description": [
      "소괄호와 대괄호가 종류와 순서를 맞춰 올바르게 중첩되어 있으면 YES, 아니면 NO이다. 빈 문자열도 YES이다."
    ],
    "input": [
      "첫 줄에 괄호 문자열이 주어진다. 빈 줄도 가능하다."
    ],
    "output": [
      "YES 또는 NO를 출력한다."
    ],
    "constraints": [
      "0 ≤ 길이 ≤ 1,000",
      "문자 종류는 ( ) [ ]"
    ],
    "samples": [
      {
        "input": "([])[]",
        "output": "YES",
        "explanation": "안쪽 괄호부터 같은 종류로 닫는다."
      },
      {
        "input": "([)]",
        "output": "NO",
        "explanation": "개수만 맞아도 중첩 순서가 틀리면 실패한다."
      }
    ],
    "hints": [
      "여는 괄호를 스택에 넣는다.",
      "닫는 괄호가 스택 맨 위의 종류와 같은지 확인한다."
    ],
    "approach": [
      "여는 괄호를 스택에 넣는다.",
      "닫는 괄호가 스택 맨 위의 종류와 같은지 확인한다."
    ],
    "complexity": "시간·공간 O(L)",
    "solution": "stack=[];ok=True\nfor ch in input():\n    if ch in '([':stack.append(ch)\n    elif not stack or stack.pop()!=('(' if ch==')' else '['):ok=False;break\nprint('YES' if ok and not stack else 'NO')",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 괄호 문자열이 주어진다. 빈 줄도 가능하다.",
      "YES 또는 NO를 출력한다."
    ],
    "id": "PY-036",
    "level": 36,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 16,
    "difficulty": 8,
    "points": 5,
    "minutes": 15,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "josephus",
    "title": "원형 대기열",
    "subtitle": "앞에서 K-1명을 뒤로 옮긴다.",
    "unit": "06 · 스택·큐",
    "topics": [
      "스택",
      "큐"
    ],
    "concept": "1~N번이 원형으로 기다린다. 1번부터 세어 K번째를 제거하고, 다음 사람부터 다시 K명을 센다. 제거 순서를 출력하라.",
    "description": [
      "1~N번이 원형으로 기다린다. 1번부터 세어 K번째를 제거하고, 다음 사람부터 다시 K명을 센다. 제거 순서를 출력하라."
    ],
    "input": [
      "첫 줄에 N K가 주어진다."
    ],
    "output": [
      "제거한 번호를 한 줄에 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 200",
      "1 ≤ K ≤ 20"
    ],
    "samples": [
      {
        "input": "5 2",
        "output": "2 4 1 5 3",
        "explanation": "제거한 다음 사람부터 다시 센다."
      },
      {
        "input": "3 1",
        "output": "1 2 3",
        "explanation": "매번 현재 첫 사람을 제거한다."
      }
    ],
    "hints": [
      "앞에서 K-1명을 뒤로 옮긴다.",
      "그 다음 앞사람을 제거하고 반복한다."
    ],
    "approach": [
      "앞에서 K-1명을 뒤로 옮긴다.",
      "그 다음 앞사람을 제거하고 반복한다."
    ],
    "complexity": "시간 O(NK), 공간 O(N)",
    "solution": "from collections import deque\nn,k=map(int,input().split())\nqueue=deque(range(1,n+1))\norder=[]\nwhile queue:\n    queue.rotate(-(k-1))\n    order.append(queue.popleft())\nprint(*order)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 N K가 주어진다.",
      "제거한 번호를 한 줄에 출력한다."
    ],
    "id": "PY-037",
    "level": 37,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 17,
    "difficulty": 9,
    "points": 5,
    "minutes": 15,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "multisetcmd",
    "title": "중복을 보관하는 숫자 상자",
    "subtitle": "숫자별 개수를 저장한다.",
    "unit": "07 · 종합 구현",
    "topics": [
      "종합 구현"
    ],
    "concept": "숫자 상자는 처음에 비어 있다. ADD x는 하나 추가, REMOVE x는 있으면 하나만 제거, COUNT x는 개수 조회이다. 없는 숫자의 REMOVE는 무시한다.",
    "description": [
      "숫자 상자는 처음에 비어 있다. ADD x는 하나 추가, REMOVE x는 있으면 하나만 제거, COUNT x는 개수 조회이다. 없는 숫자의 REMOVE는 무시한다."
    ],
    "input": [
      "첫 줄 Q, 다음 Q줄 명령이 주어진다."
    ],
    "output": [
      "COUNT 결과를 한 줄씩 출력한다."
    ],
    "constraints": [
      "1 ≤ Q ≤ 2,000",
      "-1000 ≤ x ≤ 1000",
      "COUNT가 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "6\nADD 3\nADD 3\nREMOVE 3\nCOUNT 3\nREMOVE 3\nCOUNT 3",
        "output": "1\n0",
        "explanation": "중복 중 하나씩만 제거한다."
      },
      {
        "input": "2\nREMOVE 0\nCOUNT 0",
        "output": "0",
        "explanation": "없는 숫자 제거는 무시한다."
      }
    ],
    "hints": [
      "숫자별 개수를 저장한다.",
      "개수가 양수일 때만 제거한다."
    ],
    "approach": [
      "숫자별 개수를 저장한다.",
      "개수가 양수일 때만 제거한다."
    ],
    "complexity": "평균 시간 O(Q), 공간 O(Q)",
    "solution": "counts={}\nfor _ in range(int(input())):\n    kind,value=input().split();value=int(value)\n    if kind=='ADD':counts[value]=counts.get(value,0)+1\n    elif kind=='REMOVE':counts[value]=max(0,counts.get(value,0)-1)\n    else:print(counts.get(value,0))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 Q, 다음 Q줄 명령이 주어진다.",
      "COUNT 결과를 한 줄씩 출력한다."
    ],
    "id": "PY-038",
    "level": 38,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 18,
    "difficulty": 9,
    "points": 5,
    "minutes": 16,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "mergecounts",
    "title": "두 목록의 숫자별 개수",
    "subtitle": "두 목록을 각각 개수 딕셔너리로 만든다.",
    "unit": "07 · 종합 구현",
    "topics": [
      "종합 구현"
    ],
    "concept": "두 정수 목록에 등장한 서로 다른 숫자를 오름차순으로 나열하고, 각 숫자가 첫 목록과 둘째 목록에 각각 몇 번 나왔는지 출력하라. 입력 목록은 정렬되어 있지 않을 수 있다.",
    "description": [
      "두 정수 목록에 등장한 서로 다른 숫자를 오름차순으로 나열하고, 각 숫자가 첫 목록과 둘째 목록에 각각 몇 번 나왔는지 출력하라. 입력 목록은 정렬되어 있지 않을 수 있다."
    ],
    "input": [
      "첫 줄 N M, 둘째 줄 첫 목록, 셋째 줄 둘째 목록이 주어진다. 길이가 0이면 빈 줄이다."
    ],
    "output": [
      "숫자 첫목록개수 둘째목록개수를 한 줄씩 출력한다. 둘 다 비었으면 EMPTY이다."
    ],
    "constraints": [
      "0 ≤ N,M ≤ 1,000",
      "-1000 ≤ 원소 ≤ 1000"
    ],
    "samples": [
      {
        "input": "3 2\n3 1 3\n2 3",
        "output": "1 1 0\n2 0 1\n3 2 1",
        "explanation": "한쪽에만 있는 숫자도 포함한다."
      },
      {
        "input": "0 0\n\n",
        "output": "EMPTY",
        "explanation": "빈 줄도 입력의 일부다."
      }
    ],
    "hints": [
      "두 목록을 각각 개수 딕셔너리로 만든다.",
      "키의 합집합을 정렬해 양쪽 개수를 조회한다."
    ],
    "approach": [
      "두 목록을 각각 개수 딕셔너리로 만든다.",
      "키의 합집합을 정렬해 양쪽 개수를 조회한다."
    ],
    "complexity": "시간 O(N+M+U log U), 공간 O(U)",
    "solution": "from collections import Counter\nn,m=map(int,input().split());a=Counter(map(int,input().split()));b=Counter(map(int,input().split()))\nkeys=sorted(a.keys()|b.keys())\nif not keys:print('EMPTY')\nfor value in keys:print(value,a[value],b[value])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 둘째 줄 첫 목록, 셋째 줄 둘째 목록이 주어진다. 길이가 0이면 빈 줄이다.",
      "숫자 첫목록개수 둘째목록개수를 한 줄씩 출력한다. 둘 다 비었으면 EMPTY이다."
    ],
    "id": "PY-039",
    "level": 39,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 19,
    "difficulty": 10,
    "points": 5,
    "minutes": 16,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "scoreboardcmd",
    "title": "경기 기록과 최종 순위",
    "subtitle": "모든 선수를 먼저 0점으로 등록한다.",
    "unit": "07 · 종합 구현",
    "topics": [
      "종합 구현"
    ],
    "concept": "선수는 처음 점수가 0이고 승리 횟수도 0이다. 경기마다 승자에게 3점과 승리 1회를, 패자에게 -1점을 적용한다. 최종 점수 내림차순, 승리 횟수 내림차순, 이름 오름차순으로 순위를 정하라. 점수가 음수여도 그대로 둔다. 경기에 나오지 않은 선수도 포함한다.",
    "description": [
      "선수는 처음 점수가 0이고 승리 횟수도 0이다. 경기마다 승자에게 3점과 승리 1회를, 패자에게 -1점을 적용한다. 최종 점수 내림차순, 승리 횟수 내림차순, 이름 오름차순으로 순위를 정하라. 점수가 음수여도 그대로 둔다. 경기에 나오지 않은 선수도 포함한다."
    ],
    "input": [
      "첫 줄 N M, 다음 N줄 선수 이름, 다음 M줄 승자 패자 이름이 주어진다."
    ],
    "output": [
      "선수마다 이름 점수 승리횟수를 순위순으로 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 200, 0 ≤ M ≤ 1,000",
      "이름은 서로 다른 길이 1~10 영문 소문자",
      "두 경기 선수는 서로 다르고 등록된 이름이다."
    ],
    "samples": [
      {
        "input": "3 2\na\nb\nc\na b\nb a",
        "output": "a 2 1\nb 2 1\nc 0 0",
        "explanation": "점수와 승리가 같으면 이름순이다."
      },
      {
        "input": "2 0\nz\na",
        "output": "a 0 0\nz 0 0",
        "explanation": "경기가 없어도 모든 선수를 출력한다."
      }
    ],
    "hints": [
      "모든 선수를 먼저 0점으로 등록한다.",
      "경기 결과를 누적하고 세 가지 정렬 기준을 적용한다."
    ],
    "approach": [
      "모든 선수를 먼저 0점으로 등록한다.",
      "경기 결과를 누적하고 세 가지 정렬 기준을 적용한다."
    ],
    "complexity": "시간 O(M+N log N), 공간 O(N)",
    "solution": "n,m=map(int,input().split());scores={input():[0,0] for _ in range(n)}\nfor _ in range(m):\n    winner,loser=input().split();scores[winner][0]+=3;scores[winner][1]+=1;scores[loser][0]-=1\nfor name in sorted(scores,key=lambda x:(-scores[x][0],-scores[x][1],x)):print(name,*scores[name])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄 선수 이름, 다음 M줄 승자 패자 이름이 주어진다.",
      "선수마다 이름 점수 승리횟수를 순위순으로 출력한다."
    ],
    "id": "PY-040",
    "level": 40,
    "course": "intermediate",
    "courseLabel": "중급",
    "courseIndex": 20,
    "difficulty": 10,
    "points": 5,
    "minutes": 16,
    "caseVersion": "2026-11-11.intermediate-v2"
  },
  {
    "key": "ranges",
    "title": "코드 범위별 개수",
    "subtitle": "목록을 한 번 정렬한다.",
    "unit": "01 · 탐색·구간 처리",
    "topics": [
      "탐색",
      "구간 처리"
    ],
    "concept": "코드 목록에서 각 질의 L 이상 R 이하인 원소의 개수를 구하라. 중복도 각각 센다.",
    "description": [
      "코드 목록에서 각 질의 L 이상 R 이하인 원소의 개수를 구하라. 중복도 각각 센다."
    ],
    "input": [
      "첫 줄 N Q, 둘째 줄 정수 N개, 다음 Q줄 L R이 주어진다."
    ],
    "output": [
      "질의마다 개수를 한 줄씩 출력한다."
    ],
    "constraints": [
      "1 ≤ N,Q ≤ 20,000",
      "-10⁹ ≤ 원소,L,R ≤ 10⁹",
      "L ≤ R"
    ],
    "samples": [
      {
        "input": "5 2\n1 3 3 7 9\n3 7\n4 6",
        "output": "3\n0",
        "explanation": "첫 범위에는 3,3,7이 있다."
      },
      {
        "input": "1 1\n0\n0 0",
        "output": "1",
        "explanation": "양 끝도 포함한다."
      }
    ],
    "hints": [
      "목록을 한 번 정렬한다.",
      "R 이하의 개수에서 L 미만 개수를 뺀다."
    ],
    "approach": [
      "목록을 한 번 정렬한다.",
      "R 이하의 개수에서 L 미만 개수를 뺀다."
    ],
    "complexity": "시간 O(N log N+Q log N), 공간 O(N)",
    "solution": "from bisect import bisect_left,bisect_right\nn,q=map(int,input().split())\na=sorted(map(int,input().split()))\nfor _ in range(q):\n    left,right=map(int,input().split())\n    print(bisect_right(a,right)-bisect_left(a,left))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 정수 N개, 다음 Q줄 L R이 주어진다.",
      "질의마다 개수를 한 줄씩 출력한다."
    ],
    "id": "PY-041",
    "level": 41,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 1,
    "difficulty": 1,
    "points": 6,
    "minutes": 18,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "window",
    "title": "연속 K일 최대 기록",
    "subtitle": "첫 K개의 합을 구한다.",
    "unit": "01 · 탐색·구간 처리",
    "topics": [
      "탐색",
      "구간 처리"
    ],
    "concept": "길이가 정확히 K인 연속 구간의 합 중 최댓값을 구하라. 음수만 있는 경우도 있다.",
    "description": [
      "길이가 정확히 K인 연속 구간의 합 중 최댓값을 구하라. 음수만 있는 경우도 있다."
    ],
    "input": [
      "첫 줄 N K, 둘째 줄 정수 N개가 주어진다."
    ],
    "output": [
      "최대 합을 출력한다."
    ],
    "constraints": [
      "1 ≤ K ≤ N ≤ 100,000",
      "-1000 ≤ 원소 ≤ 1000"
    ],
    "samples": [
      {
        "input": "5 3\n1 -2 4 5 -1",
        "output": "8",
        "explanation": "4+5-1=8이다."
      },
      {
        "input": "3 2\n-5 -2 -3",
        "output": "-5",
        "explanation": "빈 구간을 고를 수 없다."
      }
    ],
    "hints": [
      "첫 K개의 합을 구한다.",
      "창을 움직일 때 나가는 값을 빼고 들어오는 값을 더한다."
    ],
    "approach": [
      "첫 K개의 합을 구한다.",
      "창을 움직일 때 나가는 값을 빼고 들어오는 값을 더한다."
    ],
    "complexity": "시간·공간 O(N)",
    "solution": "n,k=map(int,input().split())\na=list(map(int,input().split()))\ncurrent=best=sum(a[:k])\nfor i in range(k,n):\n    current+=a[i]-a[i-k]\n    best=max(best,current)\nprint(best)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N K, 둘째 줄 정수 N개가 주어진다.",
      "최대 합을 출력한다."
    ],
    "id": "PY-042",
    "level": 42,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 2,
    "difficulty": 2,
    "points": 6,
    "minutes": 19,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "fastpairs",
    "title": "많은 카드의 두 수 합",
    "subtitle": "현재 값보다 앞에서 나온 값의 빈도를 저장한다.",
    "unit": "01 · 탐색·구간 처리",
    "topics": [
      "탐색",
      "구간 처리"
    ],
    "concept": "서로 다른 두 위치의 합이 T인 쌍을 세어라. 같은 값이라도 위치가 다르면 서로 다른 쌍이다. 큰 입력을 처리해야 한다.",
    "description": [
      "서로 다른 두 위치의 합이 T인 쌍을 세어라. 같은 값이라도 위치가 다르면 서로 다른 쌍이다. 큰 입력을 처리해야 한다."
    ],
    "input": [
      "첫 줄 N T, 둘째 줄 정수 N개가 주어진다."
    ],
    "output": [
      "쌍의 수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100,000",
      "-10⁹ ≤ 원소,T ≤ 10⁹"
    ],
    "samples": [
      {
        "input": "4 4\n1 3 2 2",
        "output": "2",
        "explanation": "1+3과 두 2의 쌍이다."
      },
      {
        "input": "4 0\n0 0 0 0",
        "output": "6",
        "explanation": "서로 다른 두 위치를 고른다."
      }
    ],
    "hints": [
      "현재 값보다 앞에서 나온 값의 빈도를 저장한다.",
      "T-현재값의 이전 등장 횟수를 더한 뒤 현재 값을 등록한다."
    ],
    "approach": [
      "현재 값보다 앞에서 나온 값의 빈도를 저장한다.",
      "T-현재값의 이전 등장 횟수를 더한 뒤 현재 값을 등록한다."
    ],
    "complexity": "평균 시간 O(N), 공간 O(N)",
    "solution": "n,target=map(int,input().split())\nseen={}\ncount=0\nfor value in map(int,input().split()):\n    count+=seen.get(target-value,0)\n    seen[value]=seen.get(value,0)+1\nprint(count)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N T, 둘째 줄 정수 N개가 주어진다.",
      "쌍의 수를 출력한다."
    ],
    "id": "PY-043",
    "level": 43,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 3,
    "difficulty": 2,
    "points": 6,
    "minutes": 19,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "intervals",
    "title": "겹친 탐사 구간 합치기",
    "subtitle": "시작점으로 정렬한다.",
    "unit": "02 · 구간·힙",
    "topics": [
      "구간",
      "힙"
    ],
    "concept": "닫힌 구간들을 겹치는 부분이 없도록 합쳐라. 끝점이 같아도 겹친다. 합친 결과는 시작점 순으로 출력한다.",
    "description": [
      "닫힌 구간들을 겹치는 부분이 없도록 합쳐라. 끝점이 같아도 겹친다. 합친 결과는 시작점 순으로 출력한다."
    ],
    "input": [
      "첫 줄 N, 다음 N줄 시작점 끝점이 주어진다."
    ],
    "output": [
      "첫 줄 합친 구간 수, 다음 줄들에 시작 끝을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 10,000",
      "0 ≤ 시작 ≤ 끝 ≤ 100,000"
    ],
    "samples": [
      {
        "input": "3\n1 3\n3 5\n8 9",
        "output": "2\n1 5\n8 9",
        "explanation": "끝점 3이 같으므로 합친다."
      },
      {
        "input": "2\n1 2\n3 4",
        "output": "2\n1 2\n3 4",
        "explanation": "1 차이로 떨어진 구간은 합치지 않는다."
      }
    ],
    "hints": [
      "시작점으로 정렬한다.",
      "다음 시작점이 현재 끝 이하일 때만 합친다."
    ],
    "approach": [
      "시작점으로 정렬한다.",
      "다음 시작점이 현재 끝 이하일 때만 합친다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "n=int(input())\nintervals=sorted(tuple(map(int,input().split())) for _ in range(n))\nmerged=[]\nfor start,end in intervals:\n    if merged and start<=merged[-1][1]:\n        merged[-1][1]=max(merged[-1][1],end)\n    else:\n        merged.append([start,end])\nprint(len(merged))\nfor interval in merged:print(*interval)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 다음 N줄 시작점 끝점이 주어진다.",
      "첫 줄 합친 구간 수, 다음 줄들에 시작 끝을 출력한다."
    ],
    "id": "PY-044",
    "level": 44,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 4,
    "difficulty": 3,
    "points": 6,
    "minutes": 20,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "rooms",
    "title": "최소 실습실 수",
    "subtitle": "시작 시각 순으로 처리한다.",
    "unit": "02 · 구간·힙",
    "topics": [
      "구간",
      "힙"
    ],
    "concept": "각 수업은 시작 시각 이상 종료 시각 미만 동안 실습실을 사용한다. 종료와 동시에 다른 수업이 시작할 수 있다. 모든 수업에 필요한 최소 실습실 수를 구하라.",
    "description": [
      "각 수업은 시작 시각 이상 종료 시각 미만 동안 실습실을 사용한다. 종료와 동시에 다른 수업이 시작할 수 있다. 모든 수업에 필요한 최소 실습실 수를 구하라."
    ],
    "input": [
      "첫 줄 N, 다음 N줄 시작 종료가 주어진다."
    ],
    "output": [
      "최소 실습실 수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 10,000",
      "0 ≤ 시작 < 종료 ≤ 100,000"
    ],
    "samples": [
      {
        "input": "3\n0 3\n1 2\n2 4",
        "output": "2",
        "explanation": "2에 종료한 방을 다시 사용할 수 있다."
      },
      {
        "input": "2\n0 1\n1 2",
        "output": "1",
        "explanation": "두 수업은 겹치지 않는다."
      }
    ],
    "hints": [
      "시작 시각 순으로 처리한다.",
      "이미 끝난 종료 시각을 힙에서 제거하고 동시 사용 개수의 최댓값을 기록한다."
    ],
    "approach": [
      "시작 시각 순으로 처리한다.",
      "이미 끝난 종료 시각을 힙에서 제거하고 동시 사용 개수의 최댓값을 기록한다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "import heapq\nn=int(input())\nlessons=sorted(tuple(map(int,input().split())) for _ in range(n))\nactive=[]\nanswer=0\nfor start,end in lessons:\n    while active and active[0]<=start:heapq.heappop(active)\n    heapq.heappush(active,end)\n    answer=max(answer,len(active))\nprint(answer)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 다음 N줄 시작 종료가 주어진다.",
      "최소 실습실 수를 출력한다."
    ],
    "id": "PY-045",
    "level": 45,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 5,
    "difficulty": 4,
    "points": 6,
    "minutes": 20,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "nextgreater",
    "title": "오른쪽의 더 큰 신호",
    "subtitle": "아직 답을 못 찾은 위치를 스택에 저장한다.",
    "unit": "03 · 스택·우선순위",
    "topics": [
      "스택",
      "우선순위"
    ],
    "concept": "각 원소의 오른쪽에서 처음 만나는 엄격히 더 큰 값을 구하라. 없으면 -1이다. 같은 값은 더 큰 값이 아니다.",
    "description": [
      "각 원소의 오른쪽에서 처음 만나는 엄격히 더 큰 값을 구하라. 없으면 -1이다. 같은 값은 더 큰 값이 아니다."
    ],
    "input": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다."
    ],
    "output": [
      "각 위치의 답을 한 줄에 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100,000",
      "0 ≤ 원소 ≤ 10⁹"
    ],
    "samples": [
      {
        "input": "4\n2 1 3 2",
        "output": "3 3 -1 -1",
        "explanation": "두 번째 값은 오른쪽의 3을 만난다."
      },
      {
        "input": "3\n5 5 6",
        "output": "6 6 -1",
        "explanation": "같은 5는 건너뛴다."
      }
    ],
    "hints": [
      "아직 답을 못 찾은 위치를 스택에 저장한다.",
      "현재 값보다 작은 스택 원소들의 답을 현재 값으로 확정한다."
    ],
    "approach": [
      "아직 답을 못 찾은 위치를 스택에 저장한다.",
      "현재 값보다 작은 스택 원소들의 답을 현재 값으로 확정한다."
    ],
    "complexity": "시간·공간 O(N)",
    "solution": "n=int(input())\na=list(map(int,input().split()))\nanswer=[-1]*n\nstack=[]\nfor i,value in enumerate(a):\n    while stack and a[stack[-1]]<value:\n        answer[stack.pop()]=value\n    stack.append(i)\nprint(*answer)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "각 위치의 답을 한 줄에 출력한다."
    ],
    "id": "PY-046",
    "level": 46,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 6,
    "difficulty": 4,
    "points": 7,
    "minutes": 21,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "priority",
    "title": "우선순위 작업 대기열",
    "subtitle": "힙에 (우선순위,id)를 저장한다.",
    "unit": "03 · 스택·우선순위",
    "topics": [
      "스택",
      "우선순위"
    ],
    "concept": "ADD id p는 작업을 추가한다. TAKE는 우선순위 수 p가 가장 작은 작업을 제거해 id를 출력한다. 동점은 id가 작은 순이고 빈 대기열은 EMPTY이다.",
    "description": [
      "ADD id p는 작업을 추가한다. TAKE는 우선순위 수 p가 가장 작은 작업을 제거해 id를 출력한다. 동점은 id가 작은 순이고 빈 대기열은 EMPTY이다."
    ],
    "input": [
      "첫 줄 Q, 다음 Q줄 ADD id p 또는 TAKE가 주어진다."
    ],
    "output": [
      "TAKE 결과만 한 줄씩 출력한다."
    ],
    "constraints": [
      "1 ≤ Q ≤ 2,000",
      "id는 명령 전체에서 중복되지 않는 1~10⁶ 정수",
      "1 ≤ p ≤ 1000",
      "TAKE가 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "4\nADD 2 1\nADD 1 1\nTAKE\nTAKE",
        "output": "1\n2",
        "explanation": "우선순위가 같으면 id를 비교한다."
      },
      {
        "input": "1\nTAKE",
        "output": "EMPTY",
        "explanation": "빈 상태의 제거를 처리한다."
      }
    ],
    "hints": [
      "힙에 (우선순위,id)를 저장한다.",
      "추가와 제거 모두 heapq를 사용한다."
    ],
    "approach": [
      "힙에 (우선순위,id)를 저장한다.",
      "추가와 제거 모두 heapq를 사용한다."
    ],
    "complexity": "시간 O(Q log Q), 공간 O(Q)",
    "solution": "import heapq\nheap=[]\nfor _ in range(int(input())):\n    command=input().split()\n    if command[0]==\"ADD\":\n        heapq.heappush(heap,(int(command[2]),int(command[1])))\n    else:\n        print(heapq.heappop(heap)[1] if heap else \"EMPTY\")",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 Q, 다음 Q줄 ADD id p 또는 TAKE가 주어진다.",
      "TAKE 결과만 한 줄씩 출력한다."
    ],
    "id": "PY-047",
    "level": 47,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 7,
    "difficulty": 5,
    "points": 7,
    "minutes": 21,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "graphbfs",
    "title": "가장 적은 통로",
    "subtitle": "가중치가 같으면 BFS로 거리를 구할 수 있다.",
    "unit": "04 · 그래프·트리",
    "topics": [
      "그래프",
      "트리"
    ],
    "concept": "무방향 그래프에서 1번부터 N번까지 지나야 하는 최소 간선 수를 구하라. 갈 수 없으면 -1이다.",
    "description": [
      "무방향 그래프에서 1번부터 N번까지 지나야 하는 최소 간선 수를 구하라. 갈 수 없으면 -1이다."
    ],
    "input": [
      "첫 줄 N M, 다음 M줄 두 정점이 주어진다."
    ],
    "output": [
      "최소 간선 수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 2,000",
      "0 ≤ M ≤ 5,000",
      "중복 간선·자기 자신으로의 간선은 없다."
    ],
    "samples": [
      {
        "input": "4 4\n1 2\n2 4\n1 3\n3 4",
        "output": "2",
        "explanation": "두 간선으로 도착한다."
      },
      {
        "input": "3 1\n1 2",
        "output": "-1",
        "explanation": "3번에 갈 수 없다."
      }
    ],
    "hints": [
      "가중치가 같으면 BFS로 거리를 구할 수 있다.",
      "큐에 넣을 때 방문 처리해 중복 방문을 막는다."
    ],
    "approach": [
      "가중치가 같으면 BFS로 거리를 구할 수 있다.",
      "큐에 넣을 때 방문 처리해 중복 방문을 막는다."
    ],
    "complexity": "시간·공간 O(N+M)",
    "solution": "from collections import deque\nn,m=map(int,input().split())\ngraph=[[] for _ in range(n+1)]\nfor _ in range(m):\n    a,b=map(int,input().split());graph[a].append(b);graph[b].append(a)\ndistance=[-1]*(n+1);distance[1]=0\nqueue=deque([1])\nwhile queue:\n    node=queue.popleft()\n    for nxt in graph[node]:\n        if distance[nxt]==-1:\n            distance[nxt]=distance[node]+1;queue.append(nxt)\nprint(distance[n])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 다음 M줄 두 정점이 주어진다.",
      "최소 간선 수를 출력한다."
    ],
    "id": "PY-048",
    "level": 48,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 8,
    "difficulty": 6,
    "points": 7,
    "minutes": 22,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "gridbfs",
    "title": "격자 탈출 거리",
    "subtitle": "각 칸을 정점으로 보고 BFS를 수행한다.",
    "unit": "04 · 그래프·트리",
    "topics": [
      "그래프",
      "트리"
    ],
    "concept": "상하좌우로 이동하여 왼쪽 위에서 오른쪽 아래까지 가는 최소 이동 횟수를 구하라. .은 빈칸, #은 벽이다. 출발점이나 도착점이 벽이거나 갈 수 없으면 -1이다.",
    "description": [
      "상하좌우로 이동하여 왼쪽 위에서 오른쪽 아래까지 가는 최소 이동 횟수를 구하라. .은 빈칸, #은 벽이다. 출발점이나 도착점이 벽이거나 갈 수 없으면 -1이다."
    ],
    "input": [
      "첫 줄 N M, 다음 N줄 길이 M의 격자가 주어진다."
    ],
    "output": [
      "최소 이동 횟수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N,M ≤ 30"
    ],
    "samples": [
      {
        "input": "3 3\n...\n##.\n...",
        "output": "4",
        "explanation": "오른쪽으로 간 뒤 아래로 내려간다."
      },
      {
        "input": "1 1\n.",
        "output": "0",
        "explanation": "이미 도착점이다."
      }
    ],
    "hints": [
      "각 칸을 정점으로 보고 BFS를 수행한다.",
      "유효 좌표·벽·방문 여부를 함께 검사한다."
    ],
    "approach": [
      "각 칸을 정점으로 보고 BFS를 수행한다.",
      "유효 좌표·벽·방문 여부를 함께 검사한다."
    ],
    "complexity": "시간·공간 O(NM)",
    "solution": "from collections import deque\nn,m=map(int,input().split())\ngrid=[input() for _ in range(n)]\ndist=[[-1]*m for _ in range(n)]\nqueue=deque()\nif grid[0][0]==\".\":dist[0][0]=0;queue.append((0,0))\nwhile queue:\n    r,c=queue.popleft()\n    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n        nr,nc=r+dr,c+dc\n        if 0<=nr<n and 0<=nc<m and grid[nr][nc]==\".\" and dist[nr][nc]==-1:\n            dist[nr][nc]=dist[r][c]+1;queue.append((nr,nc))\nprint(dist[-1][-1])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄 길이 M의 격자가 주어진다.",
      "최소 이동 횟수를 출력한다."
    ],
    "id": "PY-049",
    "level": 49,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 9,
    "difficulty": 6,
    "points": 7,
    "minutes": 22,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "subtrees",
    "title": "하위 기지 물자 합",
    "subtitle": "부모와 방문 순서를 먼저 구한다.",
    "unit": "04 · 그래프·트리",
    "topics": [
      "그래프",
      "트리"
    ],
    "concept": "1번을 루트로 하는 트리에서 각 질의 정점 자신과 모든 자손의 물자 합을 구하라. 값은 변경되지 않으며 음수도 가능하다.",
    "description": [
      "1번을 루트로 하는 트리에서 각 질의 정점 자신과 모든 자손의 물자 합을 구하라. 값은 변경되지 않으며 음수도 가능하다."
    ],
    "input": [
      "첫 줄 N Q, 둘째 줄 정점별 값 N개, 다음 N-1줄 무방향 간선, 다음 Q줄 질의 정점이 주어진다."
    ],
    "output": [
      "질의마다 합을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 10,000",
      "1 ≤ Q ≤ 1,000",
      "-1000 ≤ 값 ≤ 1000",
      "입력은 연결된 트리다."
    ],
    "samples": [
      {
        "input": "3 2\n1 2 3\n1 2\n1 3\n1\n2",
        "output": "6\n2",
        "explanation": "루트는 전체를 포함한다."
      },
      {
        "input": "1 1\n-2\n1",
        "output": "-2",
        "explanation": "자신도 합에 포함한다."
      }
    ],
    "hints": [
      "부모와 방문 순서를 먼저 구한다.",
      "역순으로 자식의 합을 부모에게 더한다."
    ],
    "approach": [
      "부모와 방문 순서를 먼저 구한다.",
      "역순으로 자식의 합을 부모에게 더한다."
    ],
    "complexity": "시간·공간 O(N+Q)",
    "solution": "n,q=map(int,input().split())\ntotal=[0]+list(map(int,input().split()))\ngraph=[[] for _ in range(n+1)]\nfor _ in range(n-1):\n    a,b=map(int,input().split());graph[a].append(b);graph[b].append(a)\nparent=[0]*(n+1);order=[1]\nfor node in order:\n    for nxt in graph[node]:\n        if nxt!=parent[node]:parent[nxt]=node;order.append(nxt)\nfor node in reversed(order[1:]):total[parent[node]]+=total[node]\nfor _ in range(q):print(total[int(input())])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 정점별 값 N개, 다음 N-1줄 무방향 간선, 다음 Q줄 질의 정점이 주어진다.",
      "질의마다 합을 출력한다."
    ],
    "id": "PY-050",
    "level": 50,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 10,
    "difficulty": 7,
    "points": 7,
    "minutes": 23,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "postfix",
    "title": "후위 계산기",
    "subtitle": "정수는 스택에 넣는다.",
    "unit": "05 · 함수·객체·상태",
    "topics": [
      "함수",
      "객체",
      "상태"
    ],
    "concept": "정수와 +,-,*로 된 올바른 후위 표기식을 계산하라. 연산자는 앞의 두 피연산자에 적용한다. 뺄셈의 순서를 지켜라.",
    "description": [
      "정수와 +,-,*로 된 올바른 후위 표기식을 계산하라. 연산자는 앞의 두 피연산자에 적용한다. 뺄셈의 순서를 지켜라."
    ],
    "input": [
      "첫 줄에 토큰 수 N, 둘째 줄에 공백으로 구분된 토큰 N개가 주어진다."
    ],
    "output": [
      "계산 결과를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000",
      "정수 토큰은 0~100",
      "모든 중간 결과의 절댓값은 10¹² 이하",
      "입력 식은 항상 유효하다."
    ],
    "samples": [
      {
        "input": "5\n2 3 + 4 *",
        "output": "20",
        "explanation": "(2+3)×4이다."
      },
      {
        "input": "3\n2 5 -",
        "output": "-3",
        "explanation": "왼쪽 2에서 오른쪽 5를 뺀다."
      }
    ],
    "hints": [
      "정수는 스택에 넣는다.",
      "연산자를 만나면 오른쪽부터 두 값을 꺼내 계산한다."
    ],
    "approach": [
      "정수는 스택에 넣는다.",
      "연산자를 만나면 오른쪽부터 두 값을 꺼내 계산한다."
    ],
    "complexity": "시간·공간 O(N)",
    "solution": "n=int(input())\nstack=[]\nfor token in input().split():\n    if token in (\"+\",\"-\",\"*\"):\n        b,a=stack.pop(),stack.pop()\n        stack.append(a+b if token==\"+\" else a-b if token==\"-\" else a*b)\n    else:stack.append(int(token))\nprint(stack[0])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄에 토큰 수 N, 둘째 줄에 공백으로 구분된 토큰 N개가 주어진다.",
      "계산 결과를 출력한다."
    ],
    "id": "PY-051",
    "level": 51,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 11,
    "difficulty": 8,
    "points": 7,
    "minutes": 23,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "bank",
    "title": "계좌 사이의 원자적 이체",
    "subtitle": "계좌 상태와 출금 가능 검사를 분리한다.",
    "unit": "05 · 함수·객체·상태",
    "topics": [
      "함수",
      "객체",
      "상태"
    ],
    "concept": "계좌에 DEPOSIT 이름 금액, WITHDRAW 이름 금액, TRANSFER 출금이름 입금이름 금액, BALANCE 이름 명령을 적용하라. 출금·이체 잔액이 부족하면 FAIL이고 아무 잔액도 바뀌지 않는다. 성공 변경은 OK이다.",
    "description": [
      "계좌에 DEPOSIT 이름 금액, WITHDRAW 이름 금액, TRANSFER 출금이름 입금이름 금액, BALANCE 이름 명령을 적용하라. 출금·이체 잔액이 부족하면 FAIL이고 아무 잔액도 바뀌지 않는다. 성공 변경은 OK이다."
    ],
    "input": [
      "첫 줄 N Q, 다음 N줄 이름 초기잔액, 다음 Q줄 명령이 주어진다."
    ],
    "output": [
      "명령마다 OK, FAIL 또는 조회 잔액을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100, 1 ≤ Q ≤ 1,000",
      "이름은 서로 다른 영문 소문자이며 모든 명령의 계좌가 존재한다.",
      "0 ≤ 초기잔액,금액 ≤ 10,000",
      "이체의 두 계좌는 서로 다르다.",
      "클래스 사용은 권장하며 출력으로 특정 구현을 강제하지 않는다."
    ],
    "samples": [
      {
        "input": "2 3\na 10\nb 0\nTRANSFER a b 7\nBALANCE a\nBALANCE b",
        "output": "OK\n3\n7",
        "explanation": "이체 양쪽이 함께 갱신된다."
      },
      {
        "input": "1 2\na 2\nWITHDRAW a 3\nBALANCE a",
        "output": "FAIL\n2",
        "explanation": "실패하면 잔액을 유지한다."
      }
    ],
    "hints": [
      "계좌 상태와 출금 가능 검사를 분리한다.",
      "이체는 출금이 성공했을 때만 입금한다."
    ],
    "approach": [
      "계좌 상태와 출금 가능 검사를 분리한다.",
      "이체는 출금이 성공했을 때만 입금한다."
    ],
    "complexity": "평균 시간 O(N+Q), 공간 O(N)",
    "solution": "class Account:\n    def __init__(self,balance):self.balance=balance\n    def withdraw(self,amount):\n        if self.balance<amount:return False\n        self.balance-=amount\n        return True\nn,q=map(int,input().split());accounts={}\nfor _ in range(n):\n    name,value=input().split();accounts[name]=Account(int(value))\nfor _ in range(q):\n    cmd=input().split();kind=cmd[0];a=accounts[cmd[1]]\n    if kind==\"BALANCE\":print(a.balance)\n    elif kind==\"DEPOSIT\":a.balance+=int(cmd[2]);print(\"OK\")\n    elif kind==\"WITHDRAW\":print(\"OK\" if a.withdraw(int(cmd[2])) else \"FAIL\")\n    else:\n        amount=int(cmd[3])\n        if a.withdraw(amount):accounts[cmd[2]].balance+=amount;print(\"OK\")\n        else:print(\"FAIL\")",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 다음 N줄 이름 초기잔액, 다음 Q줄 명령이 주어진다.",
      "명령마다 OK, FAIL 또는 조회 잔액을 출력한다."
    ],
    "id": "PY-052",
    "level": 52,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 12,
    "difficulty": 8,
    "points": 7,
    "minutes": 24,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "coinsany",
    "title": "동전 종류가 바뀌었을 때",
    "subtitle": "dp[x]를 x원을 만드는 최소 개수로 정의한다.",
    "unit": "06 · 동적 계획·탐색",
    "topics": [
      "동적 계획",
      "탐색"
    ],
    "concept": "주어진 동전 종류를 무제한 사용해 정확히 T원을 만드는 최소 동전 수를 구하라. 불가능하면 -1이다. 동전 종류가 임의이므로 큰 동전부터 고르는 방법이 항상 맞지는 않는다.",
    "description": [
      "주어진 동전 종류를 무제한 사용해 정확히 T원을 만드는 최소 동전 수를 구하라. 불가능하면 -1이다. 동전 종류가 임의이므로 큰 동전부터 고르는 방법이 항상 맞지는 않는다."
    ],
    "input": [
      "첫 줄 M T, 둘째 줄 서로 다른 동전 값 M개가 주어진다."
    ],
    "output": [
      "최소 개수 또는 -1을 출력한다."
    ],
    "constraints": [
      "1 ≤ M ≤ 20, 0 ≤ T ≤ 5,000",
      "1 ≤ 동전 값 ≤ 1,000"
    ],
    "samples": [
      {
        "input": "3 6\n1 3 4",
        "output": "2",
        "explanation": "3+3이 최적이다."
      },
      {
        "input": "2 3\n2 4",
        "output": "-1",
        "explanation": "3을 만들 수 없다."
      }
    ],
    "hints": [
      "dp[x]를 x원을 만드는 최소 개수로 정의한다.",
      "가능한 이전 금액 dp[x-coin]에서 한 개를 더한다."
    ],
    "approach": [
      "dp[x]를 x원을 만드는 최소 개수로 정의한다.",
      "가능한 이전 금액 dp[x-coin]에서 한 개를 더한다."
    ],
    "complexity": "시간 O(MT), 공간 O(T)",
    "solution": "m,target=map(int,input().split())\ncoins=list(map(int,input().split()))\ndp=[target+1]*(target+1);dp[0]=0\nfor value in range(1,target+1):\n    for coin in coins:\n        if coin<=value:dp[value]=min(dp[value],dp[value-coin]+1)\nprint(dp[target] if dp[target]<=target else -1)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 M T, 둘째 줄 서로 다른 동전 값 M개가 주어진다.",
      "최소 개수 또는 -1을 출력한다."
    ],
    "id": "PY-053",
    "level": 53,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 13,
    "difficulty": 9,
    "points": 7,
    "minutes": 24,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "stairs",
    "title": "계단 경로 수",
    "subtitle": "마지막 이동이 1칸인 경우와 2칸인 경우를 나눈다.",
    "unit": "06 · 동적 계획·탐색",
    "topics": [
      "동적 계획",
      "탐색"
    ],
    "concept": "한 번에 1칸 또는 2칸 올라 N칸에 정확히 도착하는 방법 수를 구하라. 순서가 다르면 다른 방법이다. 답을 1,000,000,007로 나눈 나머지를 출력한다.",
    "description": [
      "한 번에 1칸 또는 2칸 올라 N칸에 정확히 도착하는 방법 수를 구하라. 순서가 다르면 다른 방법이다. 답을 1,000,000,007로 나눈 나머지를 출력한다."
    ],
    "input": [
      "첫 줄 N이 주어진다."
    ],
    "output": [
      "방법 수의 나머지를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100,000"
    ],
    "samples": [
      {
        "input": "3",
        "output": "3",
        "explanation": "1+1+1, 1+2, 2+1이다."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "1칸 이동 한 가지다."
      }
    ],
    "hints": [
      "마지막 이동이 1칸인 경우와 2칸인 경우를 나눈다.",
      "직전 두 답만 보관해 반복 계산한다."
    ],
    "approach": [
      "마지막 이동이 1칸인 경우와 2칸인 경우를 나눈다.",
      "직전 두 답만 보관해 반복 계산한다."
    ],
    "complexity": "시간 O(N), 공간 O(1)",
    "solution": "n=int(input());a,b=1,1\nfor _ in range(n):a,b=b,(a+b)%1000000007\nprint(a)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N이 주어진다.",
      "방법 수의 나머지를 출력한다."
    ],
    "id": "PY-054",
    "level": 54,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 14,
    "difficulty": 10,
    "points": 7,
    "minutes": 25,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "lis",
    "title": "건너뛸 수 있는 상승 기록",
    "subtitle": "길이별 부분 수열의 마지막 값 중 최소를 저장한다.",
    "unit": "06 · 동적 계획·탐색",
    "topics": [
      "동적 계획",
      "탐색"
    ],
    "concept": "원소 일부를 순서를 유지하며 골라 엄격히 증가하는 가장 긴 부분 수열의 길이를 구하라. 연속할 필요는 없다.",
    "description": [
      "원소 일부를 순서를 유지하며 골라 엄격히 증가하는 가장 긴 부분 수열의 길이를 구하라. 연속할 필요는 없다."
    ],
    "input": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다."
    ],
    "output": [
      "최대 길이를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100,000",
      "-10⁹ ≤ 원소 ≤ 10⁹"
    ],
    "samples": [
      {
        "input": "5\n1 4 2 3 5",
        "output": "4",
        "explanation": "1,2,3,5를 고를 수 있다."
      },
      {
        "input": "3\n2 2 2",
        "output": "1",
        "explanation": "같은 값은 증가가 아니다."
      }
    ],
    "hints": [
      "길이별 부분 수열의 마지막 값 중 최소를 저장한다.",
      "bisect_left로 교체 위치를 찾으면 같은 값이 길이를 늘리지 않는다."
    ],
    "approach": [
      "길이별 부분 수열의 마지막 값 중 최소를 저장한다.",
      "bisect_left로 교체 위치를 찾으면 같은 값이 길이를 늘리지 않는다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "from bisect import bisect_left\nn=int(input());tails=[]\nfor value in map(int,input().split()):\n    i=bisect_left(tails,value)\n    if i==len(tails):tails.append(value)\n    else:tails[i]=value\nprint(len(tails))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "최대 길이를 출력한다."
    ],
    "id": "PY-055",
    "level": 55,
    "course": "advanced",
    "courseLabel": "고급",
    "courseIndex": 15,
    "difficulty": 10,
    "points": 7,
    "minutes": 25,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "dijkstra",
    "title": "가중치가 있는 통로",
    "subtitle": "최소 거리 후보를 힙으로 꺼낸다.",
    "unit": "01 · 그래프·의존성",
    "topics": [
      "그래프",
      "의존성"
    ],
    "concept": "음이 아닌 가중치의 무방향 그래프에서 1번부터 모든 정점까지 최단 거리를 구하라. 도달할 수 없는 정점은 -1이다.",
    "description": [
      "음이 아닌 가중치의 무방향 그래프에서 1번부터 모든 정점까지 최단 거리를 구하라. 도달할 수 없는 정점은 -1이다."
    ],
    "input": [
      "첫 줄 N M, 다음 M줄 a b w가 주어진다."
    ],
    "output": [
      "1번부터 N번까지 거리를 한 줄에 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000, 0 ≤ M ≤ 5,000",
      "0 ≤ w ≤ 10,000",
      "중복·자기 간선 없음"
    ],
    "samples": [
      {
        "input": "3 3\n1 2 5\n1 3 1\n3 2 1",
        "output": "0 2 1",
        "explanation": "3을 거쳐 2까지 가면 2이다."
      },
      {
        "input": "3 1\n1 2 0",
        "output": "0 0 -1",
        "explanation": "0 가중치도 허용하며 3은 고립되어 있다."
      }
    ],
    "hints": [
      "최소 거리 후보를 힙으로 꺼낸다.",
      "현재 최단 거리보다 오래된 후보는 버린다."
    ],
    "approach": [
      "최소 거리 후보를 힙으로 꺼낸다.",
      "현재 최단 거리보다 오래된 후보는 버린다."
    ],
    "complexity": "시간 O((N+M) log N), 공간 O(N+M)",
    "solution": "import heapq\nn,m=map(int,input().split());graph=[[] for _ in range(n+1)]\nfor _ in range(m):\n    a,b,w=map(int,input().split());graph[a].append((b,w));graph[b].append((a,w))\ndistance=[float(\"inf\")]*(n+1);distance[1]=0;heap=[(0,1)]\nwhile heap:\n    cost,node=heapq.heappop(heap)\n    if cost!=distance[node]:continue\n    for nxt,weight in graph[node]:\n        candidate=cost+weight\n        if candidate<distance[nxt]:distance[nxt]=candidate;heapq.heappush(heap,(candidate,nxt))\nprint(*(value if value!=float(\"inf\") else -1 for value in distance[1:]))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 다음 M줄 a b w가 주어진다.",
      "1번부터 N번까지 거리를 한 줄에 출력한다."
    ],
    "id": "PY-056",
    "level": 56,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 1,
    "difficulty": 1,
    "points": 10,
    "minutes": 27,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "topology",
    "title": "가장 작은 실행 가능 번호",
    "subtitle": "진입 차수가 0인 정점만 실행할 수 있다.",
    "unit": "01 · 그래프·의존성",
    "topics": [
      "그래프",
      "의존성"
    ],
    "concept": "방향 간선 a→b는 a가 먼저 끝나야 b를 실행할 수 있다는 뜻이다. 실행 가능한 작업 중 번호가 가장 작은 것을 매번 고르라. 모두 실행할 수 없으면 CYCLE만 출력하라.",
    "description": [
      "방향 간선 a→b는 a가 먼저 끝나야 b를 실행할 수 있다는 뜻이다. 실행 가능한 작업 중 번호가 가장 작은 것을 매번 고르라. 모두 실행할 수 없으면 CYCLE만 출력하라."
    ],
    "input": [
      "첫 줄 N M, 다음 M줄 a b가 주어진다."
    ],
    "output": [
      "실행 순서 한 줄 또는 CYCLE을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000, 0 ≤ M ≤ 5,000",
      "중복·자기 간선 없음, 사이클은 가능"
    ],
    "samples": [
      {
        "input": "3 1\n1 3",
        "output": "1 2 3",
        "explanation": "1 완료 후에도 2가 3보다 먼저다."
      },
      {
        "input": "2 2\n1 2\n2 1",
        "output": "CYCLE",
        "explanation": "의존 관계가 순환한다."
      }
    ],
    "hints": [
      "진입 차수가 0인 정점만 실행할 수 있다.",
      "최소 힙을 사용하고 처리 개수로 사이클을 판별한다."
    ],
    "approach": [
      "진입 차수가 0인 정점만 실행할 수 있다.",
      "최소 힙을 사용하고 처리 개수로 사이클을 판별한다."
    ],
    "complexity": "시간 O((N+M) log N), 공간 O(N+M)",
    "solution": "import heapq\nn,m=map(int,input().split());graph=[[] for _ in range(n+1)];degree=[0]*(n+1)\nfor _ in range(m):\n    a,b=map(int,input().split());graph[a].append(b);degree[b]+=1\nheap=[i for i in range(1,n+1) if degree[i]==0];heapq.heapify(heap);order=[]\nwhile heap:\n    node=heapq.heappop(heap);order.append(node)\n    for nxt in graph[node]:\n        degree[nxt]-=1\n        if degree[nxt]==0:heapq.heappush(heap,nxt)\nprint(*order) if len(order)==n else print(\"CYCLE\")",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 다음 M줄 a b가 주어진다.",
      "실행 순서 한 줄 또는 CYCLE을 출력한다."
    ],
    "id": "PY-057",
    "level": 57,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 2,
    "difficulty": 2,
    "points": 10,
    "minutes": 29,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "schedule",
    "title": "선행 임무와 우선순위",
    "subtitle": "실행 가능한 작업만 힙에 넣는다.",
    "unit": "01 · 그래프·의존성",
    "topics": [
      "그래프",
      "의존성"
    ],
    "concept": "작업은 1번을 루트로 하는 트리다. 부모 완료 후 직접 자식만 대기열에 들어간다. 한 번에 하나씩, 현재 대기 작업 중 우선순위 수가 작은 작업을 실행하라. 동점은 번호순이다. 작업 도중 중단은 없다.",
    "description": [
      "작업은 1번을 루트로 하는 트리다. 부모 완료 후 직접 자식만 대기열에 들어간다. 한 번에 하나씩, 현재 대기 작업 중 우선순위 수가 작은 작업을 실행하라. 동점은 번호순이다. 작업 도중 중단은 없다."
    ],
    "input": [
      "첫 줄 N, 다음 N줄에 해당 번호의 부모 소요시간 우선순위가 주어진다. 루트 부모는 0이다."
    ],
    "output": [
      "첫 줄 실행 번호 순서, 둘째 줄 번호별 완료 시각을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 1,000",
      "1 ≤ 시간 ≤ 10⁹, 1 ≤ 우선순위 ≤ 1000",
      "전체는 트리이며 부모 번호가 더 작다는 보장은 없다."
    ],
    "samples": [
      {
        "input": "3\n0 2 5\n1 3 1\n1 1 1",
        "output": "1 2 3\n2 5 6",
        "explanation": "동점에서는 번호를 비교한다."
      },
      {
        "input": "3\n0 1 9\n3 2 1\n1 3 5",
        "output": "1 3 2\n1 6 4",
        "explanation": "2번은 부모 3번이 끝나야 실행된다."
      }
    ],
    "hints": [
      "실행 가능한 작업만 힙에 넣는다.",
      "완료 후 시간을 누적하고 직접 자식을 추가한다."
    ],
    "approach": [
      "실행 가능한 작업만 힙에 넣는다.",
      "완료 후 시간을 누적하고 직접 자식을 추가한다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "import heapq\nn=int(input());children=[[] for _ in range(n+1)];duration=[0]*(n+1);priority=[0]*(n+1)\nfor node in range(1,n+1):\n    parent,duration[node],priority[node]=map(int,input().split())\n    if parent:children[parent].append(node)\nheap=[(priority[1],1)];order=[];finish=[0]*(n+1);now=0\nwhile heap:\n    _,node=heapq.heappop(heap);now+=duration[node];finish[node]=now;order.append(node)\n    for child in children[node]:heapq.heappush(heap,(priority[child],child))\nprint(*order)\nprint(*finish[1:])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 다음 N줄에 해당 번호의 부모 소요시간 우선순위가 주어진다. 루트 부모는 0이다.",
      "첫 줄 실행 번호 순서, 둘째 줄 번호별 완료 시각을 출력한다."
    ],
    "id": "PY-058",
    "level": 58,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 3,
    "difficulty": 3,
    "points": 10,
    "minutes": 31,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "dsu",
    "title": "서로 연결된 팀",
    "subtitle": "대표 원소를 찾는 find를 만든다.",
    "unit": "02 · 자료구조 질의",
    "topics": [
      "자료구조 질의"
    ],
    "concept": "처음에는 각 번호가 별도 집합이다. UNION a b로 두 집합을 합치고 SAME a b로 같은 집합이면 YES, 아니면 NO를 출력하라.",
    "description": [
      "처음에는 각 번호가 별도 집합이다. UNION a b로 두 집합을 합치고 SAME a b로 같은 집합이면 YES, 아니면 NO를 출력하라."
    ],
    "input": [
      "첫 줄 N Q, 다음 Q줄 명령이 주어진다."
    ],
    "output": [
      "SAME 결과만 출력한다."
    ],
    "constraints": [
      "1 ≤ N,Q ≤ 10,000",
      "1 ≤ 번호 ≤ N",
      "SAME이 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "3 4\nSAME 1 2\nUNION 1 2\nUNION 2 3\nSAME 1 3",
        "output": "NO\nYES",
        "explanation": "간접 연결도 같은 집합이다."
      },
      {
        "input": "1 1\nSAME 1 1",
        "output": "YES",
        "explanation": "자신과는 항상 같은 집합이다."
      }
    ],
    "hints": [
      "대표 원소를 찾는 find를 만든다.",
      "경로 압축과 크기 기준 합치기를 사용한다."
    ],
    "approach": [
      "대표 원소를 찾는 find를 만든다.",
      "경로 압축과 크기 기준 합치기를 사용한다."
    ],
    "complexity": "시간 O((N+Q)·α(N)) 상각, 공간 O(N)",
    "solution": "n,q=map(int,input().split());parent=list(range(n+1));size=[1]*(n+1)\ndef find(x):\n    while parent[x]!=x:\n        parent[x]=parent[parent[x]];x=parent[x]\n    return x\nfor _ in range(q):\n    kind,a,b=input().split();a,b=find(int(a)),find(int(b))\n    if kind==\"SAME\":print(\"YES\" if a==b else \"NO\")\n    elif a!=b:\n        if size[a]<size[b]:a,b=b,a\n        parent[b]=a;size[a]+=size[b]",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 다음 Q줄 명령이 주어진다.",
      "SAME 결과만 출력한다."
    ],
    "id": "PY-059",
    "level": 59,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 4,
    "difficulty": 4,
    "points": 10,
    "minutes": 33,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "fenwick",
    "title": "바뀌는 점수와 구간 합",
    "subtitle": "Fenwick 트리로 누적합과 점 갱신을 처리한다.",
    "unit": "02 · 자료구조 질의",
    "topics": [
      "자료구조 질의"
    ],
    "concept": "ADD i d는 i번째 값에 d를 더한다. SUM l r은 l부터 r까지 양 끝을 포함한 합을 출력한다. 번호는 1부터다.",
    "description": [
      "ADD i d는 i번째 값에 d를 더한다. SUM l r은 l부터 r까지 양 끝을 포함한 합을 출력한다. 번호는 1부터다."
    ],
    "input": [
      "첫 줄 N Q, 둘째 줄 초기값 N개, 다음 Q줄 명령이 주어진다."
    ],
    "output": [
      "SUM 결과만 한 줄씩 출력한다."
    ],
    "constraints": [
      "1 ≤ N,Q ≤ 10,000",
      "-1000 ≤ 초기값,d ≤ 1000",
      "1 ≤ l ≤ r ≤ N",
      "SUM이 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "3 3\n1 2 3\nSUM 1 3\nADD 2 -5\nSUM 2 3",
        "output": "6\n0",
        "explanation": "두 번째 값이 -3으로 바뀐다."
      },
      {
        "input": "1 2\n0\nADD 1 7\nSUM 1 1",
        "output": "7",
        "explanation": "첫 원소도 갱신한다."
      }
    ],
    "hints": [
      "Fenwick 트리로 누적합과 점 갱신을 처리한다.",
      "구간 합은 prefix(r)-prefix(l-1)이다."
    ],
    "approach": [
      "Fenwick 트리로 누적합과 점 갱신을 처리한다.",
      "구간 합은 prefix(r)-prefix(l-1)이다."
    ],
    "complexity": "시간 O((N+Q) log N), 공간 O(N)",
    "solution": "n,q=map(int,input().split());a=list(map(int,input().split()));tree=[0]*(n+1)\ndef add(i,delta):\n    while i<=n:tree[i]+=delta;i+=i&-i\ndef prefix(i):\n    total=0\n    while i>0:total+=tree[i];i-=i&-i\n    return total\nfor i,value in enumerate(a,1):add(i,value)\nfor _ in range(q):\n    kind,x,y=input().split();x,y=int(x),int(y)\n    if kind==\"ADD\":add(x,y)\n    else:print(prefix(y)-prefix(x-1))",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 초기값 N개, 다음 Q줄 명령이 주어진다.",
      "SUM 결과만 한 줄씩 출력한다."
    ],
    "id": "PY-060",
    "level": 60,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 5,
    "difficulty": 5,
    "points": 10,
    "minutes": 35,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "segment",
    "title": "바뀌는 신호와 최솟값",
    "subtitle": "세그먼트 트리에 구간별 최솟값을 저장한다.",
    "unit": "02 · 자료구조 질의",
    "topics": [
      "자료구조 질의"
    ],
    "concept": "SET i v는 i번째 값을 v로 바꾼다. MIN l r은 양 끝을 포함하는 구간의 최솟값을 출력한다. 번호는 1부터다.",
    "description": [
      "SET i v는 i번째 값을 v로 바꾼다. MIN l r은 양 끝을 포함하는 구간의 최솟값을 출력한다. 번호는 1부터다."
    ],
    "input": [
      "첫 줄 N Q, 둘째 줄 초기값 N개, 다음 Q줄 명령이 주어진다."
    ],
    "output": [
      "MIN 결과만 출력한다."
    ],
    "constraints": [
      "1 ≤ N,Q ≤ 10,000",
      "-1000 ≤ 초기값,v ≤ 1000",
      "1 ≤ l ≤ r ≤ N",
      "MIN이 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "3 3\n3 1 2\nMIN 1 3\nSET 2 5\nMIN 1 3",
        "output": "1\n2",
        "explanation": "기존 최소값이 바뀐다."
      },
      {
        "input": "1 1\n-2\nMIN 1 1",
        "output": "-2",
        "explanation": "음수도 처리한다."
      }
    ],
    "hints": [
      "세그먼트 트리에 구간별 최솟값을 저장한다.",
      "점 갱신은 조상만, 질의는 필요한 구간만 방문한다."
    ],
    "approach": [
      "세그먼트 트리에 구간별 최솟값을 저장한다.",
      "점 갱신은 조상만, 질의는 필요한 구간만 방문한다."
    ],
    "complexity": "시간 O(N+Q log N), 공간 O(N)",
    "solution": "n,q=map(int,input().split());a=list(map(int,input().split()));size=1\nwhile size<n:size*=2\ntree=[float(\"inf\")]*(2*size)\ntree[size:size+n]=a\nfor i in range(size-1,0,-1):tree[i]=min(tree[2*i],tree[2*i+1])\nfor _ in range(q):\n    kind,x,y=input().split();x,y=int(x),int(y)\n    if kind==\"SET\":\n        i=size+x-1;tree[i]=y;i//=2\n        while i:tree[i]=min(tree[2*i],tree[2*i+1]);i//=2\n    else:\n        left,right=size+x-1,size+y;answer=float(\"inf\")\n        while left<right:\n            if left%2:answer=min(answer,tree[left]);left+=1\n            if right%2:right-=1;answer=min(answer,tree[right])\n            left//=2;right//=2\n        print(answer)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 초기값 N개, 다음 Q줄 명령이 주어진다.",
      "MIN 결과만 출력한다."
    ],
    "id": "PY-061",
    "level": 61,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 6,
    "difficulty": 6,
    "points": 10,
    "minutes": 37,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "lru",
    "title": "최근 사용 캐시",
    "subtitle": "OrderedDict의 순서로 최근 사용을 표현한다.",
    "unit": "03 · 상태·최적화",
    "topics": [
      "상태",
      "최적화"
    ],
    "concept": "용량 K의 캐시를 관리하라. GET key는 있으면 값을 출력하고 최근 사용으로 옮기며, 없으면 -1이다. PUT key value는 삽입·갱신 후 최근 사용으로 옮긴다. 초과 시 가장 오래 사용하지 않은 항목을 제거한다. 용량 0은 아무것도 저장하지 않는다.",
    "description": [
      "용량 K의 캐시를 관리하라. GET key는 있으면 값을 출력하고 최근 사용으로 옮기며, 없으면 -1이다. PUT key value는 삽입·갱신 후 최근 사용으로 옮긴다. 초과 시 가장 오래 사용하지 않은 항목을 제거한다. 용량 0은 아무것도 저장하지 않는다."
    ],
    "input": [
      "첫 줄 K Q, 다음 Q줄 GET key 또는 PUT key value가 주어진다."
    ],
    "output": [
      "GET 결과만 출력한다."
    ],
    "constraints": [
      "0 ≤ K ≤ 100",
      "1 ≤ Q ≤ 1,000",
      "key는 1~1000 정수, 0 ≤ value ≤ 10⁹",
      "GET이 한 번 이상 있다."
    ],
    "samples": [
      {
        "input": "2 6\nPUT 1 10\nPUT 2 20\nGET 1\nPUT 3 30\nGET 2\nGET 3",
        "output": "10\n-1\n30",
        "explanation": "1을 사용했으므로 2가 제거된다."
      },
      {
        "input": "0 2\nPUT 1 9\nGET 1",
        "output": "-1",
        "explanation": "용량 0은 저장하지 않는다."
      }
    ],
    "hints": [
      "OrderedDict의 순서로 최근 사용을 표현한다.",
      "조회·갱신 모두 순서를 바꾸고 초과 시 맨 앞을 제거한다."
    ],
    "approach": [
      "OrderedDict의 순서로 최근 사용을 표현한다.",
      "조회·갱신 모두 순서를 바꾸고 초과 시 맨 앞을 제거한다."
    ],
    "complexity": "평균 시간 O(Q), 공간 O(K)",
    "solution": "from collections import OrderedDict\nk,q=map(int,input().split());cache=OrderedDict()\nfor _ in range(q):\n    command=input().split()\n    key=int(command[1])\n    if command[0]==\"GET\":\n        if key not in cache:print(-1)\n        else:print(cache[key]);cache.move_to_end(key)\n    else:\n        cache[key]=int(command[2]);cache.move_to_end(key)\n        if len(cache)>k:cache.popitem(last=False)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 K Q, 다음 Q줄 GET key 또는 PUT key value가 주어진다.",
      "GET 결과만 출력한다."
    ],
    "id": "PY-062",
    "level": 62,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 7,
    "difficulty": 7,
    "points": 10,
    "minutes": 39,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "inversions",
    "title": "뒤집힌 위치 쌍",
    "subtitle": "합병 정렬 중 오른쪽 값이 먼저 나올 때를 센다.",
    "unit": "03 · 상태·최적화",
    "topics": [
      "상태",
      "최적화"
    ],
    "concept": "i<j이고 A[i]>A[j]인 위치 쌍의 수를 구하라. 같은 값은 세지 않는다.",
    "description": [
      "i<j이고 A[i]>A[j]인 위치 쌍의 수를 구하라. 같은 값은 세지 않는다."
    ],
    "input": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다."
    ],
    "output": [
      "위치 쌍의 수를 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 100,000",
      "-10⁹ ≤ 원소 ≤ 10⁹"
    ],
    "samples": [
      {
        "input": "3\n3 1 2",
        "output": "2",
        "explanation": "3과 1, 3과 2가 뒤집혀 있다."
      },
      {
        "input": "3\n2 2 2",
        "output": "0",
        "explanation": "같은 값은 뒤집힘이 아니다."
      }
    ],
    "hints": [
      "합병 정렬 중 오른쪽 값이 먼저 나올 때를 센다.",
      "왼쪽에 남아 있는 원소 수가 새로 생기는 쌍의 수다."
    ],
    "approach": [
      "합병 정렬 중 오른쪽 값이 먼저 나올 때를 센다.",
      "왼쪽에 남아 있는 원소 수가 새로 생기는 쌍의 수다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "n=int(input());a=list(map(int,input().split()))\ndef sort_count(values):\n    if len(values)<=1:return values,0\n    mid=len(values)//2\n    left,x=sort_count(values[:mid]);right,y=sort_count(values[mid:])\n    result=[];i=j=0;count=x+y\n    while i<len(left) and j<len(right):\n        if left[i]<=right[j]:result.append(left[i]);i+=1\n        else:result.append(right[j]);count+=len(left)-i;j+=1\n    result.extend(left[i:]);result.extend(right[j:])\n    return result,count\nprint(sort_count(a)[1])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "위치 쌍의 수를 출력한다."
    ],
    "id": "PY-063",
    "level": 63,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 8,
    "difficulty": 8,
    "points": 10,
    "minutes": 41,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "weighted",
    "title": "보상이 있는 예약",
    "subtitle": "종료 시각 순으로 정렬한다.",
    "unit": "03 · 상태·최적화",
    "topics": [
      "상태",
      "최적화"
    ],
    "concept": "예약마다 시작·종료·보상이 있다. 겹치지 않는 예약들을 골라 보상 합을 최대화하라. 종료와 다음 시작이 같으면 함께 선택할 수 있다.",
    "description": [
      "예약마다 시작·종료·보상이 있다. 겹치지 않는 예약들을 골라 보상 합을 최대화하라. 종료와 다음 시작이 같으면 함께 선택할 수 있다."
    ],
    "input": [
      "첫 줄 N, 다음 N줄 시작 종료 보상이 주어진다."
    ],
    "output": [
      "가능한 최대 보상 합을 출력한다."
    ],
    "constraints": [
      "1 ≤ N ≤ 10,000",
      "0 ≤ 시작 < 종료 ≤ 100,000",
      "0 ≤ 보상 ≤ 10⁶"
    ],
    "samples": [
      {
        "input": "3\n0 3 5\n1 2 10\n2 4 10",
        "output": "20",
        "explanation": "짧은 두 예약을 선택하는 편이 낫다."
      },
      {
        "input": "2\n0 1 0\n1 2 3",
        "output": "3",
        "explanation": "보상 0도 허용한다."
      }
    ],
    "hints": [
      "종료 시각 순으로 정렬한다.",
      "현재 예약과 양립 가능한 마지막 종료 위치를 이진 탐색하고 선택·미선택의 최댓값을 저장한다."
    ],
    "approach": [
      "종료 시각 순으로 정렬한다.",
      "현재 예약과 양립 가능한 마지막 종료 위치를 이진 탐색하고 선택·미선택의 최댓값을 저장한다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "from bisect import bisect_right\nn=int(input())\njobs=sorted((tuple(map(int,input().split())) for _ in range(n)),key=lambda x:x[1])\nends=[job[1] for job in jobs];dp=[0]*(n+1)\nfor i,(start,end,reward) in enumerate(jobs,1):\n    previous=bisect_right(ends,start,0,i-1)\n    dp[i]=max(dp[i-1],dp[previous]+reward)\nprint(dp[n])",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N, 다음 N줄 시작 종료 보상이 주어진다.",
      "가능한 최대 보상 합을 출력한다."
    ],
    "id": "PY-064",
    "level": 64,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 9,
    "difficulty": 9,
    "points": 10,
    "minutes": 43,
    "caseVersion": "2026-11-10.courses-v1"
  },
  {
    "key": "keymaze",
    "title": "열쇠를 가진 탐사자",
    "subtitle": "방문 상태를 (행,열,열쇠 비트마스크)로 둔다.",
    "unit": "04 · 상태 공간 탐색",
    "topics": [
      "상태 공간 탐색"
    ],
    "concept": "격자에서 S부터 E까지 최단 이동 횟수를 구하라. 상하좌우 한 칸씩 이동한다. #은 벽, .은 빈칸이다. a,b,c는 열쇠이며 획득하면 계속 보유한다. A,B,C 문은 대응 열쇠가 있어야 통과한다. 같은 칸도 가진 열쇠가 다르면 다른 상태다. 갈 수 없으면 -1이다.",
    "description": [
      "격자에서 S부터 E까지 최단 이동 횟수를 구하라. 상하좌우 한 칸씩 이동한다. #은 벽, .은 빈칸이다. a,b,c는 열쇠이며 획득하면 계속 보유한다. A,B,C 문은 대응 열쇠가 있어야 통과한다. 같은 칸도 가진 열쇠가 다르면 다른 상태다. 갈 수 없으면 -1이다."
    ],
    "input": [
      "첫 줄 N M, 다음 N줄 격자가 주어진다."
    ],
    "output": [
      "최소 이동 횟수 또는 -1을 출력한다."
    ],
    "constraints": [
      "1 ≤ N,M ≤ 10, N×M ≥ 2",
      "S와 E는 각각 하나이며 서로 다르다.",
      "각 소문자 열쇠와 각 대문자 문은 최대 하나",
      "열쇠가 없는 문도 있을 수 있다."
    ],
    "samples": [
      {
        "input": "1 4\nSaAE",
        "output": "3",
        "explanation": "a를 얻은 뒤 A를 통과한다."
      },
      {
        "input": "1 3\nSAE",
        "output": "-1",
        "explanation": "a 열쇠가 없다."
      }
    ],
    "hints": [
      "방문 상태를 (행,열,열쇠 비트마스크)로 둔다.",
      "열쇠 획득 시 마스크를 갱신하고 문은 해당 비트를 검사한다."
    ],
    "approach": [
      "방문 상태를 (행,열,열쇠 비트마스크)로 둔다.",
      "열쇠 획득 시 마스크를 갱신하고 문은 해당 비트를 검사한다."
    ],
    "complexity": "시간·공간 O(NM·2³)",
    "solution": "from collections import deque\nn,m=map(int,input().split());grid=[input() for _ in range(n)]\nfor r in range(n):\n    for c in range(m):\n        if grid[r][c]==\"S\":start=(r,c,0)\nqueue=deque([(*start,0)]);seen={start};answer=-1\nwhile queue:\n    r,c,keys,distance=queue.popleft()\n    if grid[r][c]==\"E\":answer=distance;break\n    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n        nr,nc=r+dr,c+dc\n        if not(0<=nr<n and 0<=nc<m):continue\n        ch=grid[nr][nc]\n        if ch==\"#\":continue\n        if ch in \"ABC\" and not(keys & (1<<(ord(ch)-ord(\"A\")))):continue\n        nxt=keys | (1<<(ord(ch)-ord(\"a\"))) if ch in \"abc\" else keys\n        state=(nr,nc,nxt)\n        if state not in seen:seen.add(state);queue.append((*state,distance+1))\nprint(answer)",
    "outputMode": "lines",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄 격자가 주어진다.",
      "최소 이동 횟수 또는 -1을 출력한다."
    ],
    "id": "PY-065",
    "level": 65,
    "course": "expert",
    "courseLabel": "심화",
    "courseIndex": 10,
    "difficulty": 10,
    "points": 10,
    "minutes": 45,
    "caseVersion": "2026-11-10.courses-v1"
  }
];
