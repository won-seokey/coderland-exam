window.CPP_COURSES=[{"id": "cpp-beginner", "label": "초급", "count": 20, "language": "cpp"}, {"id": "cpp-intermediate", "label": "중급", "count": 20, "language": "cpp"}, {"id": "cpp-advanced", "label": "고급", "count": 15, "language": "cpp"}, {"id": "cpp-expert", "label": "심화", "count": 10, "language": "cpp"}];
window.CPP_PROBLEMS=[
  {
    "title": "입력한 이름 그대로",
    "subtitle": "입력과 출력을 한 번씩 사용하기",
    "topics": [
      "cin · cout"
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
      "string 변수와 cin으로 이름을 읽고 cout으로 출력해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "string 변수와 cin으로 이름을 읽고 cout으로 출력해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간·공간 O(L), L은 이름 길이",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string name;\n    cin >> name;\n    cout << name;\n    return 0;\n}",
    "id": "CPP-001",
    "level": 66,
    "difficulty": 1,
    "points": 3,
    "outputMode": "tokens",
    "unit": "01 · 입출력",
    "concept": "string 변수와 cin으로 이름을 읽고 cout으로 출력해요.",
    "ioCheck": [
      "첫째 줄에 이름이 주어진다.",
      "입력받은 이름을 그대로 한 줄에 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 1,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "두 단어를 한 줄로",
    "subtitle": "여러 줄 입력과 공백 출력 확인하기",
    "topics": [
      "cin · cout"
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
      "두 string 변수를 읽고 공백을 넣어 한 줄로 출력해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "두 string 변수를 읽고 공백을 넣어 한 줄로 출력해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간·공간 O(L), L은 두 단어의 전체 길이",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string first, second;\n    cin >> first >> second;\n    cout << first << \" \" << second;\n    return 0;\n}",
    "id": "CPP-002",
    "level": 67,
    "difficulty": 1,
    "points": 3,
    "outputMode": "tokens",
    "unit": "01 · 입출력",
    "concept": "두 string 변수를 읽고 공백을 넣어 한 줄로 출력해요.",
    "ioCheck": [
      "첫째 줄에 첫 단어가 주어진다. 둘째 줄에 둘째 단어가 주어진다.",
      "두 단어를 공백으로 구분하여 한 줄에 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 2,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-003",
    "level": 68,
    "title": "사과는 모두 몇 개?",
    "subtitle": "숫자 두 개를 입력받아 더해 보기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "정수 변수에 값을 저장하고 덧셈 결과를 출력해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "정수 변수에 값을 저장하고 덧셈 결과를 출력해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    long long a, b;\n    cin >> a >> b;\n    cout << a + b;\n    return 0;\n}",
    "difficulty": 2,
    "outputMode": "tokens",
    "unit": "02 · 기본 연산",
    "concept": "정수 변수에 값을 저장하고 덧셈 결과를 출력해요.",
    "ioCheck": [
      "첫째 줄에 A가 주어진다. 둘째 줄에 B가 주어진다.",
      "A와 B를 더한 값을 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 3,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-004",
    "level": 69,
    "title": "연필값 계산하기",
    "subtitle": "곱셈으로 전체 가격 구하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "가격과 수량을 곱해요. 큰 정수에는 long long을 사용할 수 있어요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "가격과 수량을 곱해요. 큰 정수에는 long long을 사용할 수 있어요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    long long price, count;\n    cin >> price >> count;\n    cout << price * count;\n    return 0;\n}",
    "difficulty": 2,
    "outputMode": "tokens",
    "unit": "02 · 기본 연산",
    "concept": "가격과 수량을 곱해요. 큰 정수에는 long long을 사용할 수 있어요.",
    "ioCheck": [
      "첫째 줄에 연필 한 자루의 가격 P가 주어진다. 둘째 줄에 살 연필의 개수 N이 주어진다.",
      "전체 금액을 숫자로만 출력한다. 원이라는 글자는 붙이지 않는다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 4,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "사탕을 똑같이 나누기",
    "subtitle": "몫과 나머지를 각각 출력하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "정수 나눗셈 /와 나머지 %를 구별해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "정수 나눗셈 /와 나머지 %를 구별해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, k;\n    cin >> n >> k;\n    cout << n / k << \" \" << n % k;\n    return 0;\n}",
    "id": "CPP-005",
    "level": 70,
    "difficulty": 3,
    "points": 4,
    "outputMode": "tokens",
    "unit": "02 · 기본 연산",
    "concept": "정수 나눗셈 /와 나머지 %를 구별해요.",
    "ioCheck": [
      "첫째 줄에 사탕 수 N이 주어진다. 둘째 줄에 학생 수 K가 주어진다.",
      "한 사람이 받는 사탕 수와 남은 사탕 수를 공백으로 구분해 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 5,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "짝수일까요?",
    "subtitle": "나머지와 조건문을 연결하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "%와 조건문으로 짝수와 홀수를 판별해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "%와 조건문으로 짝수와 홀수를 판별해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cout << (n % 2 == 0 ? \"EVEN\" : \"ODD\");\n    return 0;\n}",
    "id": "CPP-006",
    "level": 71,
    "difficulty": 3,
    "points": 4,
    "outputMode": "tokens",
    "unit": "03 · 조건문",
    "concept": "%와 조건문으로 짝수와 홀수를 판별해요.",
    "ioCheck": [
      "첫째 줄에 N이 주어진다.",
      "짝수이면 EVEN, 홀수이면 ODD를 대문자로 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 6,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-007",
    "level": 72,
    "title": "통과했을까요?",
    "subtitle": "조건에 따라 다른 글자 출력하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "if 또는 조건 연산자로 기준 점수를 비교해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "if 또는 조건 연산자로 기준 점수를 비교해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int score;\n    cin >> score;\n    cout << (score >= 60 ? \"PASS\" : \"RETRY\");\n    return 0;\n}",
    "difficulty": 4,
    "outputMode": "tokens",
    "unit": "03 · 조건문",
    "concept": "if 또는 조건 연산자로 기준 점수를 비교해요.",
    "ioCheck": [
      "첫째 줄에 점수 S가 주어진다.",
      "60점 이상이면 PASS, 아니면 RETRY를 출력한다. 대문자로 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 7,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "더 큰 수 고르기",
    "subtitle": "두 값을 비교해 하나를 출력하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "두 정수의 대소를 비교해 큰 값을 선택해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "두 정수의 대소를 비교해 큰 값을 선택해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(1) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << max(a, b);\n    return 0;\n}",
    "id": "CPP-008",
    "level": 73,
    "difficulty": 4,
    "points": 4,
    "outputMode": "tokens",
    "unit": "03 · 조건문",
    "concept": "두 정수의 대소를 비교해 큰 값을 선택해요.",
    "ioCheck": [
      "첫째 줄에 A가 주어진다. 둘째 줄에 B가 주어진다.",
      "두 정수 중 큰 값을 한 번 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 8,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-009",
    "level": 74,
    "title": "차례대로 번호 붙이기",
    "subtitle": "반복문으로 1부터 N까지 출력하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "for 반복문의 시작·끝 조건과 줄바꿈을 확인해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "for 반복문의 시작·끝 조건과 줄바꿈을 확인해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++)\n        cout << i << \"\\n\";\n    return 0;\n}",
    "difficulty": 5,
    "outputMode": "tokens",
    "unit": "04 · 반복문",
    "concept": "for 반복문의 시작·끝 조건과 줄바꿈을 확인해요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N이 주어진다.",
      "1부터 N까지 한 줄에 하나씩 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 9,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "1부터 더해 보기",
    "subtitle": "반복문으로 합계를 쌓기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "합계를 초기화하고 반복문에서 누적해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "합계를 초기화하고 반복문에서 누적해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N) · 추가 공간 O(1)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long total = 0;\n    for (int i = 1; i <= n; i++)\n        total += i;\n    cout << total;\n    return 0;\n}",
    "id": "CPP-010",
    "level": 75,
    "difficulty": 5,
    "points": 5,
    "outputMode": "tokens",
    "unit": "04 · 반복문",
    "concept": "합계를 초기화하고 반복문에서 누적해요.",
    "ioCheck": [
      "첫째 줄에 N이 주어진다.",
      "1부터 N까지 더한 값을 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 10,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "구구단의 결과",
    "subtitle": "반복과 곱셈을 함께 사용하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "반복 변수와 입력값을 곱해 결과를 차례로 출력해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "반복 변수와 입력값을 곱해 결과를 차례로 출력해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간·추가 공간 O(1), 출력은 항상 9개",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= 9; i++)\n        cout << n * i << \"\\n\";\n    return 0;\n}",
    "id": "CPP-011",
    "level": 76,
    "difficulty": 6,
    "points": 5,
    "outputMode": "tokens",
    "unit": "04 · 반복문",
    "concept": "반복 변수와 입력값을 곱해 결과를 차례로 출력해요.",
    "ioCheck": [
      "첫째 줄에 D가 주어진다.",
      "D×1부터 D×9까지의 결과를 한 줄에 하나씩, 총 아홉 줄 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 11,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-012",
    "level": 77,
    "title": "모은 점수의 합",
    "subtitle": "리스트의 숫자를 차례로 더하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "여러 정수를 차례로 읽고 합계를 구해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "여러 정수를 차례로 읽고 합계를 구해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long total = 0;\n    for (int i = 0; i < n; i++) {\n        int score;\n        cin >> score;\n        total += score;\n    }\n    cout << total;\n    return 0;\n}",
    "difficulty": 6,
    "outputMode": "tokens",
    "unit": "05 · 배열·vector",
    "concept": "여러 정수를 차례로 읽고 합계를 구해요.",
    "ioCheck": [
      "첫째 줄에 게임 횟수 N이 주어진다. 둘째 줄에 점수 N개가 공백으로 구분되어 주어진다.",
      "모든 점수의 합을 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 12,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-013",
    "level": 78,
    "title": "키가 충분한 학생 수",
    "subtitle": "반복문 안에서 조건 확인하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "입력된 값마다 조건을 확인하고 개수를 늘려요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "입력된 값마다 조건을 확인하고 개수를 늘려요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, h, count = 0;\n    cin >> n >> h;\n    for (int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        if (x >= h)\n            count++;\n    }\n    cout << count;\n    return 0;\n}",
    "difficulty": 7,
    "outputMode": "tokens",
    "unit": "05 · 배열·vector",
    "concept": "입력된 값마다 조건을 확인하고 개수를 늘려요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N과 기준 키 H가 공백으로 구분되어 주어진다. 둘째 줄에 학생들의 키 N개가 주어진다.",
      "키가 H 이상인 학생 수를 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 13,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "기준 이상 점수 모으기",
    "subtitle": "조건에 맞는 값을 순서대로 출력하기",
    "topics": [
      "정수형 · 조건 · 반복"
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
      "조건에 맞는 값을 출력하고 결과가 없는 경우를 처리해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "조건에 맞는 값을 출력하고 결과가 없는 경우를 처리해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, k;\n    cin >> n >> k;\n    bool found = false;\n    for (int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        if (x >= k) {\n            cout << x << \"\\n\";\n            found = true;\n        }\n    }\n    if (!found)\n        cout << \"NONE\";\n    return 0;\n}",
    "id": "CPP-014",
    "level": 79,
    "difficulty": 7,
    "points": 6,
    "outputMode": "tokens",
    "unit": "05 · 배열·vector",
    "concept": "조건에 맞는 값을 출력하고 결과가 없는 경우를 처리해요.",
    "ioCheck": [
      "첫째 줄에 N과 K가 주어진다. 둘째 줄에 점수 N개가 공백으로 구분되어 주어진다.",
      "기준 이상인 점수를 입력 순서대로 한 줄에 하나씩 출력한다. 없으면 NONE을 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 14,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-015",
    "level": 80,
    "title": "단어 속 모음 찾기",
    "subtitle": "문자열을 한 글자씩 살펴보기",
    "topics": [
      "string"
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
      "string의 문자를 순회하고 모음인지 확인해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "string의 문자를 순회하고 모음인지 확인해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(L) · 공간 O(L), L은 단어 길이",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string text;\n    cin >> text;\n    int count = 0;\n    for (char c : text)\n        if (string(\"aeiou\").find(c) != string::npos)\n            count++;\n    cout << count;\n    return 0;\n}",
    "difficulty": 8,
    "outputMode": "tokens",
    "unit": "06 · 문자열",
    "concept": "string의 문자를 순회하고 모음인지 확인해요.",
    "ioCheck": [
      "첫째 줄에 영문 소문자로 이루어진 단어가 주어진다.",
      "단어에 포함된 모음의 총개수를 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 15,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "글자가 처음 나온 위치",
    "subtitle": "문자열의 위치와 탐색 종료 확인하기",
    "topics": [
      "string"
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
      "0부터 시작하는 인덱스와 1부터 시작하는 위치를 구별해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "0부터 시작하는 인덱스와 1부터 시작하는 위치를 구별해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(L) · 공간 O(L), L은 단어 길이",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string text;\n    char target;\n    cin >> text >> target;\n    int answer = -1;\n    for (int i = 0; i < (int)text.size(); i++)\n        if (text[i] == target) {\n            answer = i + 1;\n            break;\n        }\n    cout << answer;\n    return 0;\n}",
    "id": "CPP-016",
    "level": 81,
    "difficulty": 8,
    "points": 6,
    "outputMode": "tokens",
    "unit": "06 · 문자열",
    "concept": "0부터 시작하는 인덱스와 1부터 시작하는 위치를 구별해요.",
    "ioCheck": [
      "첫째 줄에 단어가 주어진다. 둘째 줄에 찾을 글자 한 개가 주어진다.",
      "찾을 글자의 첫 번째 위치를 출력한다. 없으면 -1을 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 16,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-017",
    "level": 82,
    "title": "최고 점수는 몇 번째?",
    "subtitle": "가장 큰 값과 처음 나온 위치 찾기",
    "topics": [
      "vector · sort"
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
      "vector에 점수를 저장하고 최댓값의 첫 인덱스를 찾아요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "vector에 점수를 저장하고 최댓값의 첫 인덱스를 찾아요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N) · 공간 O(N)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> scores(n);\n    for (int &x : scores)\n        cin >> x;\n    int best = 0;\n    for (int i = 1; i < n; i++)\n        if (scores[i] > scores[best])\n            best = i;\n    cout << scores[best] << \" \" << best + 1;\n    return 0;\n}",
    "difficulty": 9,
    "outputMode": "tokens",
    "unit": "07 · 위치와 최댓값",
    "concept": "vector에 점수를 저장하고 최댓값의 첫 인덱스를 찾아요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N이 주어진다. 둘째 줄에 점수 N개가 주어진다.",
      "최고 점수와 학생 번호를 공백으로 구분하여 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 17,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-018",
    "level": 83,
    "title": "가장 인기 있는 간식",
    "subtitle": "딕셔너리로 투표 수 세기",
    "topics": [
      "map"
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
      "map으로 등장 횟수를 세고 동점일 때 사전순을 지켜요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "map으로 등장 횟수를 세고 동점일 때 사전순을 지켜요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N log U), 공간 O(U) · U는 서로 다른 이름 수",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    map<string, int> counts;\n    while (n--) {\n        string word;\n        cin >> word;\n        counts[word]++;\n    }\n    string best;\n    int amount = -1;\n    for (auto entry : counts)\n        if (entry.second > amount) {\n            best = entry.first;\n            amount = entry.second;\n        }\n    cout << best << \" \" << amount;\n    return 0;\n}",
    "difficulty": 9,
    "outputMode": "tokens",
    "unit": "08 · map",
    "concept": "map으로 등장 횟수를 세고 동점일 때 사전순을 지켜요.",
    "ioCheck": [
      "첫째 줄에 투표 수 N이 주어진다. 다음 N개의 줄에 간식 이름이 한 개씩 주어진다.",
      "선택한 간식의 이름과 득표 수를 공백으로 구분하여 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 18,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "title": "학생별 점수 합치기",
    "subtitle": "같은 이름의 점수를 모아 정렬하기",
    "topics": [
      "map"
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
      "map으로 이름별 합계를 구하고 키 순서대로 출력해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "map으로 이름별 합계를 구하고 키 순서대로 출력해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N log U), 공간 O(U) · U는 서로 다른 이름 수",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    map<string, int> totals;\n    while (n--) {\n        string name;\n        int value;\n        cin >> name >> value;\n        totals[name] += value;\n    }\n    for (auto entry : totals)\n        cout << entry.first << \" \" << entry.second << \"\\n\";\n    return 0;\n}",
    "id": "CPP-019",
    "level": 84,
    "difficulty": 10,
    "points": 7,
    "outputMode": "tokens",
    "unit": "08 · map",
    "concept": "map으로 이름별 합계를 구하고 키 순서대로 출력해요.",
    "ioCheck": [
      "첫째 줄에 결과 수 N이 주어진다. 다음 N개의 줄에 이름과 점수가 공백으로 구분되어 주어진다.",
      "이름의 사전순으로 이름과 총점을 공백으로 구분해 한 줄씩 출력한다. 사전순은 anna, ben, chris, dina 순서이다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 19,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "id": "CPP-020",
    "level": 85,
    "title": "통과한 학생 명단",
    "subtitle": "입력·합계·조건·정렬을 함께 사용하기",
    "topics": [
      "vector · sort"
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
      "구조가 있는 입력·합계·조건·vector·sort를 함께 사용해요.",
      "입출력 예제를 손으로 따라가며 변수의 값이 어떻게 바뀌는지 확인하세요."
    ],
    "approach": [
      "필요한 자료형과 변수를 선언하고 cin으로 입력받습니다.",
      "구조가 있는 입력·합계·조건·vector·sort를 함께 사용해요.",
      "cout으로 결과만 출력합니다. 안내 문구는 출력하지 않습니다."
    ],
    "complexity": "시간 O(N log N) · 공간 O(N) (이름 길이 최대 10)",
    "solution": "#include <algorithm>\n#include <iostream>\n#include <map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<string> passed;\n    while (n--) {\n        string name;\n        int a, b, c;\n        cin >> name >> a >> b >> c;\n        if (a + b + c >= 180)\n            passed.push_back(name);\n    }\n    sort(passed.begin(), passed.end());\n    if (passed.empty())\n        cout << \"NONE\";\n    else\n        for (string name : passed)\n            cout << name << \"\\n\";\n    return 0;\n}",
    "difficulty": 10,
    "outputMode": "tokens",
    "unit": "09 · 종합 복습",
    "concept": "구조가 있는 입력·합계·조건·vector·sort를 함께 사용해요.",
    "ioCheck": [
      "첫째 줄에 학생 수 N이 주어진다. 다음 N개의 줄에 이름과 세 과목 점수가 공백으로 구분되어 주어진다.",
      "통과한 학생의 이름을 사전순으로 한 줄에 한 명씩 출력한다. 통과한 학생이 없으면 NONE을 한 번 출력한다."
    ],
    "course": "cpp-beginner",
    "courseLabel": "초급",
    "courseIndex": 20,
    "caseVersion": "2026-11-13.cpp20-v1",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    map<string, int> count;\n    while (n--) {\n        string s;\n        cin >> s;\n        size_t a = s.find_first_not_of(\".,\"), b = s.find_last_not_of(\".,\");\n        if (a == string::npos)\n            continue;\n        s = s.substr(a, b - a + 1);\n        for (char &c : s)\n            c = tolower((unsigned char)c);\n        count[s]++;\n    }\n    if (count.empty())\n        cout << \"EMPTY\";\n    for (auto [s, c] : count)\n        cout << s << \" \" << c << \"\\n\";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 다음 N줄에 기록 하나씩이 주어진다.",
      "단어 횟수를 한 줄씩 출력한다. 유효 단어가 없으면 EMPTY를 출력한다."
    ],
    "id": "CPP-021",
    "level": 86,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 1,
    "difficulty": 1,
    "points": 5,
    "minutes": 10,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    string s;\n    getline(cin, s);\n    while (n--) {\n        getline(cin, s);\n        string t;\n        for (unsigned char c : s)\n            if (isalnum(c))\n                t += tolower(c);\n        string rev = t;\n        reverse(rev.begin(), rev.end());\n        cout << (t == rev ? \"YES\" : \"NO\") << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 다음 N줄에 문장이 주어진다. 빈 줄도 가능하다.",
      "문장마다 YES 또는 NO를 출력한다."
    ],
    "id": "CPP-022",
    "level": 87,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 2,
    "difficulty": 1,
    "points": 5,
    "minutes": 10,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "rle",
    "title": "연속 글자 기록",
    "subtitle": "현재 구간의 글자와 개수를 저장한다.",
    "unit": "01 · 문자열 처리",
    "topics": [
      "문자열",
      "vector"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    string s;\n    cin >> s;\n    for (int i = 0; i < (int)s.size();) {\n        int j = i + 1;\n        while (j < (int)s.size() && s[j] == s[i])\n            j++;\n        cout << s[i] << j - i;\n        i = j;\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 영문 소문자 문자열이 주어진다.",
      "예: aaabbc는 a3b2c1로 출력한다."
    ],
    "id": "CPP-023",
    "level": 88,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 3,
    "difficulty": 2,
    "points": 5,
    "minutes": 11,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "rotatecmd",
    "title": "회전 명령을 차례대로",
    "subtitle": "K를 목록 길이로 나눈 나머지만 회전한다.",
    "unit": "02 · vector·구간",
    "topics": [
      "vector",
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    vector<int> a(n);\n    for (int &x : a)\n        cin >> x;\n    while (q--) {\n        string op;\n        cin >> op;\n        if (op == \"REV\")\n            reverse(a.begin(), a.end());\n        else {\n            long long k;\n            cin >> k;\n            k %= n;\n            if (op == \"R\")\n                k = (n - k) % n;\n            rotate(a.begin(), a.begin() + k, a.end());\n        }\n    }\n    for (int x : a)\n        cout << x << \" \";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 정수 N개, 다음 Q줄 명령이 주어진다.",
      "최종 목록을 한 줄에 출력한다."
    ],
    "id": "CPP-024",
    "level": 89,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 4,
    "difficulty": 2,
    "points": 5,
    "minutes": 11,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "riseplace",
    "title": "가장 긴 상승 구간의 위치",
    "subtitle": "현재 구간의 시작과 길이를 관리한다.",
    "unit": "02 · vector·구간",
    "topics": [
      "vector",
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<int> a(n);\n    for (int &x : a)\n        cin >> x;\n    int start = 0, best = 1, pos = 0;\n    for (int i = 1; i < n; i++) {\n        if (a[i] <= a[i - 1])\n            start = i;\n        if (i - start + 1 > best) {\n            best = i - start + 1;\n            pos = start;\n        }\n    }\n    cout << best << \" \" << pos + 1;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "구간 길이와 시작 위치(1부터)를 한 줄에 출력한다."
    ],
    "id": "CPP-025",
    "level": 90,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 5,
    "difficulty": 3,
    "points": 5,
    "minutes": 11,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "pairs",
    "title": "두 장의 합",
    "subtitle": "두 위치를 i<j로 선택한다.",
    "unit": "02 · vector·구간",
    "topics": [
      "문자열",
      "vector"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, t;\n    cin >> n >> t;\n    vector<int> a(n);\n    for (int &x : a)\n        cin >> x;\n    int count = 0;\n    for (int i = 0; i < n; i++)\n        for (int j = i + 1; j < n; j++)\n            if (a[i] + a[j] == t)\n                count++;\n    cout << count;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 N T, 둘째 줄에 정수 N개가 주어진다.",
      "조건을 만족하는 쌍의 수를 출력한다."
    ],
    "id": "CPP-026",
    "level": 91,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 6,
    "difficulty": 3,
    "points": 5,
    "minutes": 12,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "transpose",
    "title": "행과 열 바꾸기",
    "subtitle": "새 행의 번호는 원래 열의 번호다.",
    "unit": "03 · 2차원 vector",
    "topics": [
      "2차원 vector"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<vector<int>> a(n, vector<int>(m));\n    for (auto &r : a)\n        for (int &x : r)\n            cin >> x;\n    for (int c = 0; c < m; c++) {\n        for (int r = 0; r < n; r++)\n            cout << a[r][c] << \" \";\n        cout << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 N M, 다음 N줄에 행별 정수 M개가 주어진다.",
      "M줄에 걸쳐 각 줄 N개 정수를 출력한다."
    ],
    "id": "CPP-027",
    "level": 92,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 7,
    "difficulty": 4,
    "points": 5,
    "minutes": 12,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "neighbors",
    "title": "주변 지뢰 수 표시",
    "subtitle": "빈칸마다 8가지 상대 위치를 살핀다.",
    "unit": "03 · 2차원 vector",
    "topics": [
      "2차원 vector"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<string> g(n);\n    for (string &s : g)\n        cin >> s;\n    for (int r = 0; r < n; r++) {\n        for (int c = 0; c < m; c++) {\n            if (g[r][c] == '*') {\n                cout << '*';\n                continue;\n            }\n            int count = 0;\n            for (int dr = -1; dr <= 1; dr++)\n                for (int dc = -1; dc <= 1; dc++) {\n                    int x = r + dr, y = c + dc;\n                    if ((dr || dc) && x >= 0 && x < n && y >= 0 && y < m &&\n                        g[x][y] == '*')\n                        count++;\n                }\n            cout << count;\n        }\n        cout << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄에 공백 없는 격자가 주어진다.",
      "바뀐 격자를 N줄에 출력한다. 칸 사이에는 공백을 넣지 않는다."
    ],
    "id": "CPP-028",
    "level": 93,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 8,
    "difficulty": 4,
    "points": 5,
    "minutes": 12,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "ranking",
    "title": "반별 총점 순위",
    "subtitle": "먼저 이름별로 점수를 누적한다.",
    "unit": "04 · 집계·정렬",
    "topics": [
      "map",
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
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    map<string, long long> totals;\n    while (n--) {\n        string name;\n        int score;\n        cin >> name >> score;\n        totals[name] += score;\n    }\n    vector<pair<string, long long>> a(totals.begin(), totals.end());\n    sort(a.begin(), a.end(), [](auto x, auto y) {\n        return x.second != y.second ? x.second > y.second\n                                    : x.first < y.first;\n    });\n    for (auto [name, total] : a)\n        cout << name << \" \" << total << \"\\n\";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 N, 다음 N줄에 영문 소문자 이름과 점수가 주어진다.",
      "반마다 이름 총점을 한 줄씩 출력한다."
    ],
    "id": "CPP-029",
    "level": 94,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 9,
    "difficulty": 5,
    "points": 5,
    "minutes": 13,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "map를 명령에 따라 변경한다.",
      "조회와 삭제에 없는 키 처리를 넣는다."
    ],
    "approach": [
      "map를 명령에 따라 변경한다.",
      "조회와 삭제에 없는 키 처리를 넣는다."
    ],
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int q;\n    cin >> q;\n    map<string, string> d;\n    while (q--) {\n        string op, k, v;\n        cin >> op >> k;\n        if (op == \"SET\") {\n            cin >> v;\n            d[k] = v;\n        } else if (op == \"DEL\")\n            d.erase(k);\n        else\n            cout << (d.count(k) ? d[k] : \"UNKNOWN\") << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 Q, 다음 Q줄에 명령이 주어진다.",
      "GET마다 번역을 출력한다. 없으면 UNKNOWN이다."
    ],
    "id": "CPP-030",
    "level": 95,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 10,
    "difficulty": 5,
    "points": 5,
    "minutes": 13,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  },
  {
    "key": "topwords",
    "title": "자주 나온 단어 K개",
    "subtitle": "빈도 딕셔너리를 만든다.",
    "unit": "04 · 집계·정렬",
    "topics": [
      "map",
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
      "빈도 map를 만든다.",
      "빈도 내림차순·이름 오름차순 정렬 후 앞 K개를 선택한다."
    ],
    "approach": [
      "빈도 map를 만든다.",
      "빈도 내림차순·이름 오름차순 정렬 후 앞 K개를 선택한다."
    ],
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k;\n    cin >> n >> k;\n    map<string, int> count;\n    while (n--) {\n        string s;\n        cin >> s;\n        count[s]++;\n    }\n    vector<pair<string, int>> a(count.begin(), count.end());\n    sort(a.begin(), a.end(), [](auto x, auto y) {\n        return x.second != y.second ? x.second > y.second\n                                    : x.first < y.first;\n    });\n    for (int i = 0; i < min(k, (int)a.size()); i++)\n        cout << a[i].first << \" \" << a[i].second << \"\\n\";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 N K, 다음 N줄에 단어가 주어진다.",
      "단어 횟수를 한 줄씩 출력한다."
    ],
    "id": "CPP-031",
    "level": 96,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 11,
    "difficulty": 6,
    "points": 5,
    "minutes": 13,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k, d;\n    cin >> n >> k >> d;\n    long long total = 0;\n    vector<int> s;\n    while (n--) {\n        int p;\n        cin >> p;\n        total += p;\n        s.push_back(min(p, d));\n    }\n    sort(s.rbegin(), s.rend());\n    for (int i = 0; i < k; i++)\n        total -= s[i];\n    cout << total;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N K D, 둘째 줄 가격 N개가 주어진다.",
      "최소 지불 총액을 출력한다."
    ],
    "id": "CPP-032",
    "level": 97,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 12,
    "difficulty": 6,
    "points": 5,
    "minutes": 14,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "선택적 부호 뒤에 숫자가 한 개 이상 있는지 먼저 검사합니다.",
      "유효한 문자열만 stoll로 변환하고 나머지는 오류 개수에 포함합니다."
    ],
    "approach": [
      "선택적 부호 뒤에 숫자가 한 개 이상 있는지 먼저 검사합니다.",
      "유효한 문자열만 stoll로 변환하고 나머지는 오류 개수에 포함합니다."
    ],
    "complexity": "시간 O(전체 문자열 길이), 공간 O(최대 기록 길이)",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    long long sum = 0;\n    int invalid = 0;\n    while (n--) {\n        string s;\n        cin >> s;\n        int i = (s[0] == '+' || s[0] == '-');\n        bool ok = i < (int)s.size();\n        for (int j = i; j < (int)s.size(); j++)\n            if (s[j] < '0' || s[j] > '9')\n                ok = false;\n        if (ok)\n            sum += stoll(s);\n        else\n            invalid++;\n    }\n    cout << sum << \" \" << invalid;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 N, 다음 N줄에 기록 문자열이 주어진다.",
      "정수 합과 잘못된 기록 수를 출력한다."
    ],
    "id": "CPP-033",
    "level": 98,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 13,
    "difficulty": 7,
    "points": 5,
    "minutes": 14,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "상품별 재고를 map에 저장한다.",
      "실패 여부를 먼저 확인한 후에만 변경한다."
    ],
    "approach": [
      "상품별 재고를 map에 저장한다.",
      "실패 여부를 먼저 확인한 후에만 변경한다."
    ],
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    map<string, long long> s;\n    while (n--) {\n        string name;\n        long long v;\n        cin >> name >> v;\n        s[name] = v;\n    }\n    while (q--) {\n        string op, name;\n        long long v;\n        cin >> op >> name >> v;\n        if (op == \"SELL\" && s[name] < v)\n            cout << \"FAIL\\n\";\n        else {\n            s[name] += (op == \"ADD\" ? v : -v);\n            cout << \"OK\\n\";\n        }\n    }\n    for (auto [name, v] : s)\n        cout << name << \" \" << v << \"\\n\";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 다음 N줄 상품 초기재고, 다음 Q줄 ADD 또는 SELL 명령이 주어진다.",
      "먼저 명령별 OK 또는 FAIL을 Q줄, 이후 상품 재고를 N줄 출력한다."
    ],
    "id": "CPP-034",
    "level": 99,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 14,
    "difficulty": 7,
    "points": 5,
    "minutes": 14,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "vector의 끝을 스택의 위로 사용한다.",
      "빈 스택인지 확인한 다음 접근한다."
    ],
    "approach": [
      "vector의 끝을 스택의 위로 사용한다.",
      "빈 스택인지 확인한 다음 접근한다."
    ],
    "complexity": "시간·공간 O(Q)",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int q;\n    cin >> q;\n    vector<int> s;\n    while (q--) {\n        string op;\n        cin >> op;\n        if (op == \"PUSH\") {\n            int x;\n            cin >> x;\n            s.push_back(x);\n        } else {\n            cout << (s.empty() ? -1 : s.back()) << \"\\n\";\n            if (op == \"POP\" && !s.empty())\n                s.pop_back();\n        }\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 Q, 다음 Q줄에 PUSH x, POP, TOP 명령이 주어진다.",
      "POP과 TOP의 결과만 순서대로 한 줄씩 출력한다."
    ],
    "id": "CPP-035",
    "level": 100,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 15,
    "difficulty": 8,
    "points": 5,
    "minutes": 15,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    string s;\n    getline(cin, s);\n    vector<char> stack;\n    bool ok = true;\n    for (char c : s) {\n        if (c == '(' || c == '[')\n            stack.push_back(c);\n        else {\n            char want = c == ')' ? '(' : '[';\n            if (stack.empty() || stack.back() != want) {\n                ok = false;\n                break;\n            }\n            stack.pop_back();\n        }\n    }\n    cout << (ok && stack.empty() ? \"YES\" : \"NO\");\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 괄호 문자열이 주어진다. 빈 줄도 가능하다.",
      "YES 또는 NO를 출력한다."
    ],
    "id": "CPP-036",
    "level": 101,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 16,
    "difficulty": 8,
    "points": 5,
    "minutes": 15,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k;\n    cin >> n >> k;\n    deque<int> q;\n    for (int i = 1; i <= n; i++)\n        q.push_back(i);\n    while (!q.empty()) {\n        for (int i = 1; i < k; i++) {\n            q.push_back(q.front());\n            q.pop_front();\n        }\n        cout << q.front() << \" \";\n        q.pop_front();\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 N K가 주어진다.",
      "제거한 번호를 한 줄에 출력한다."
    ],
    "id": "CPP-037",
    "level": 102,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 17,
    "difficulty": 9,
    "points": 5,
    "minutes": 15,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int q;\n    cin >> q;\n    map<int, int> count;\n    while (q--) {\n        string op;\n        int x;\n        cin >> op >> x;\n        if (op == \"ADD\")\n            count[x]++;\n        else if (op == \"REMOVE\") {\n            if (count[x])\n                count[x]--;\n        } else\n            cout << count[x] << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 Q, 다음 Q줄 명령이 주어진다.",
      "COUNT 결과를 한 줄씩 출력한다."
    ],
    "id": "CPP-038",
    "level": 103,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 18,
    "difficulty": 9,
    "points": 5,
    "minutes": 16,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "두 목록을 각각 개수 map로 만든다.",
      "키의 합집합을 정렬해 양쪽 개수를 조회한다."
    ],
    "approach": [
      "두 목록을 각각 개수 map로 만든다.",
      "키의 합집합을 정렬해 양쪽 개수를 조회한다."
    ],
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    map<int, pair<int, int>> count;\n    while (n--) {\n        int x;\n        cin >> x;\n        count[x].first++;\n    }\n    while (m--) {\n        int x;\n        cin >> x;\n        count[x].second++;\n    }\n    if (count.empty())\n        cout << \"EMPTY\";\n    for (auto [x, p] : count)\n        cout << x << \" \" << p.first << \" \" << p.second << \"\\n\";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 둘째 줄 첫 목록, 셋째 줄 둘째 목록이 주어진다. 길이가 0이면 빈 줄이다.",
      "숫자 첫목록개수 둘째목록개수를 한 줄씩 출력한다. 둘 다 비었으면 EMPTY이다."
    ],
    "id": "CPP-039",
    "level": 104,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 19,
    "difficulty": 10,
    "points": 5,
    "minutes": 16,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    map<string, pair<int, int>> s;\n    while (n--) {\n        string name;\n        cin >> name;\n        s[name] = {0, 0};\n    }\n    while (m--) {\n        string w, l;\n        cin >> w >> l;\n        s[w].first += 3;\n        s[w].second++;\n        s[l].first--;\n    }\n    vector<string> a;\n    for (auto p : s)\n        a.push_back(p.first);\n    sort(a.begin(), a.end(), [&](string x, string y) {\n        if (s[x] != s[y])\n            return s[x] > s[y];\n        return x < y;\n    });\n    for (string name : a)\n        cout << name << \" \" << s[name].first << \" \" << s[name].second\n             << \"\\n\";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄 선수 이름, 다음 M줄 승자 패자 이름이 주어진다.",
      "선수마다 이름 점수 승리횟수를 순위순으로 출력한다."
    ],
    "id": "CPP-040",
    "level": 105,
    "course": "cpp-intermediate",
    "courseLabel": "중급",
    "courseIndex": 20,
    "difficulty": 10,
    "points": 5,
    "minutes": 16,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    vector<int> a(n);\n    for (int &x : a)\n        cin >> x;\n    sort(a.begin(), a.end());\n    while (q--) {\n        int l, r;\n        cin >> l >> r;\n        cout << upper_bound(a.begin(), a.end(), r) -\n                    lower_bound(a.begin(), a.end(), l)\n             << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 정수 N개, 다음 Q줄 L R이 주어진다.",
      "질의마다 개수를 한 줄씩 출력한다."
    ],
    "id": "CPP-041",
    "level": 106,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 1,
    "difficulty": 1,
    "points": 6,
    "minutes": 18,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k;\n    cin >> n >> k;\n    vector<long long> a(n);\n    for (auto &x : a)\n        cin >> x;\n    long long sum = accumulate(a.begin(), a.begin() + k, 0LL), best = sum;\n    for (int i = k; i < n; i++) {\n        sum += a[i] - a[i - k];\n        best = max(best, sum);\n    }\n    cout << best;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N K, 둘째 줄 정수 N개가 주어진다.",
      "최대 합을 출력한다."
    ],
    "id": "CPP-042",
    "level": 107,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 2,
    "difficulty": 2,
    "points": 6,
    "minutes": 19,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    long long t;\n    cin >> n >> t;\n    unordered_map<long long, long long> count;\n    long long answer = 0;\n    while (n--) {\n        long long x;\n        cin >> x;\n        answer += count[t - x];\n        count[x]++;\n    }\n    cout << answer;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N T, 둘째 줄 정수 N개가 주어진다.",
      "쌍의 수를 출력한다."
    ],
    "id": "CPP-043",
    "level": 108,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 3,
    "difficulty": 2,
    "points": 6,
    "minutes": 19,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<pair<int, int>> a(n), out;\n    for (auto &p : a)\n        cin >> p.first >> p.second;\n    sort(a.begin(), a.end());\n    for (auto p : a) {\n        if (out.empty() || p.first > out.back().second)\n            out.push_back(p);\n        else\n            out.back().second = max(out.back().second, p.second);\n    }\n    cout << out.size() << \"\\n\";\n    for (auto p : out)\n        cout << p.first << \" \" << p.second << \"\\n\";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 다음 N줄 시작점 끝점이 주어진다.",
      "첫 줄 합친 구간 수, 다음 줄들에 시작 끝을 출력한다."
    ],
    "id": "CPP-044",
    "level": 109,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 4,
    "difficulty": 3,
    "points": 6,
    "minutes": 20,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<pair<int, int>> a(n);\n    for (auto &p : a)\n        cin >> p.first >> p.second;\n    sort(a.begin(), a.end());\n    priority_queue<int, vector<int>, greater<int>> ends;\n    int best = 0;\n    for (auto p : a) {\n        while (!ends.empty() && ends.top() <= p.first)\n            ends.pop();\n        ends.push(p.second);\n        best = max(best, (int)ends.size());\n    }\n    cout << best;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 다음 N줄 시작 종료가 주어진다.",
      "최소 실습실 수를 출력한다."
    ],
    "id": "CPP-045",
    "level": 110,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 5,
    "difficulty": 4,
    "points": 6,
    "minutes": 20,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<int> a(n), ans(n, -1), s;\n    for (int &x : a)\n        cin >> x;\n    for (int i = 0; i < n; i++) {\n        while (!s.empty() && a[s.back()] < a[i]) {\n            ans[s.back()] = a[i];\n            s.pop_back();\n        }\n        s.push_back(i);\n    }\n    for (int x : ans)\n        cout << x << \" \";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "각 위치의 답을 한 줄에 출력한다."
    ],
    "id": "CPP-046",
    "level": 111,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 6,
    "difficulty": 4,
    "points": 7,
    "minutes": 21,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "추가와 제거 모두 priority_queue를 사용한다."
    ],
    "approach": [
      "힙에 (우선순위,id)를 저장한다.",
      "추가와 제거 모두 priority_queue를 사용한다."
    ],
    "complexity": "시간 O(Q log Q), 공간 O(Q)",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int q;\n    cin >> q;\n    priority_queue<pair<int, int>, vector<pair<int, int>>,\n                   greater<pair<int, int>>>\n        heap;\n    while (q--) {\n        string op;\n        cin >> op;\n        if (op == \"ADD\") {\n            int id, p;\n            cin >> id >> p;\n            heap.push({p, id});\n        } else if (heap.empty())\n            cout << \"EMPTY\\n\";\n        else {\n            cout << heap.top().second << \"\\n\";\n            heap.pop();\n        }\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 Q, 다음 Q줄 ADD id p 또는 TAKE가 주어진다.",
      "TAKE 결과만 한 줄씩 출력한다."
    ],
    "id": "CPP-047",
    "level": 112,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 7,
    "difficulty": 5,
    "points": 7,
    "minutes": 21,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<vector<int>> g(n + 1);\n    while (m--) {\n        int a, b;\n        cin >> a >> b;\n        g[a].push_back(b);\n        g[b].push_back(a);\n    }\n    vector<int> d(n + 1, -1);\n    queue<int> q;\n    d[1] = 0;\n    q.push(1);\n    while (!q.empty()) {\n        int v = q.front();\n        q.pop();\n        for (int x : g[v])\n            if (d[x] < 0) {\n                d[x] = d[v] + 1;\n                q.push(x);\n            }\n    }\n    cout << d[n];\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 다음 M줄 두 정점이 주어진다.",
      "최소 간선 수를 출력한다."
    ],
    "id": "CPP-048",
    "level": 113,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 8,
    "difficulty": 6,
    "points": 7,
    "minutes": 22,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<string> g(n);\n    for (auto &s : g)\n        cin >> s;\n    vector<vector<int>> d(n, vector<int>(m, -1));\n    queue<pair<int, int>> q;\n    if (g[0][0] != '#') {\n        d[0][0] = 0;\n        q.push({0, 0});\n    }\n    int dr[] = {-1, 1, 0, 0}, dc[] = {0, 0, -1, 1};\n    while (!q.empty()) {\n        auto [r, c] = q.front();\n        q.pop();\n        for (int i = 0; i < 4; i++) {\n            int x = r + dr[i], y = c + dc[i];\n            if (x >= 0 && x < n && y >= 0 && y < m && g[x][y] != '#' &&\n                d[x][y] < 0) {\n                d[x][y] = d[r][c] + 1;\n                q.push({x, y});\n            }\n        }\n    }\n    cout << d[n - 1][m - 1];\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄 길이 M의 격자가 주어진다.",
      "최소 이동 횟수를 출력한다."
    ],
    "id": "CPP-049",
    "level": 114,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 9,
    "difficulty": 6,
    "points": 7,
    "minutes": 22,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    vector<long long> total(n + 1);\n    for (int i = 1; i <= n; i++)\n        cin >> total[i];\n    vector<vector<int>> g(n + 1);\n    for (int i = 1; i < n; i++) {\n        int a, b;\n        cin >> a >> b;\n        g[a].push_back(b);\n        g[b].push_back(a);\n    }\n    vector<int> parent(n + 1), order{1};\n    for (int i = 0; i < n; i++) {\n        int v = order[i];\n        for (int x : g[v])\n            if (x != parent[v]) {\n                parent[x] = v;\n                order.push_back(x);\n            }\n    }\n    for (int i = n - 1; i > 0; i--)\n        total[parent[order[i]]] += total[order[i]];\n    while (q--) {\n        int v;\n        cin >> v;\n        cout << total[v] << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 정점별 값 N개, 다음 N-1줄 무방향 간선, 다음 Q줄 질의 정점이 주어진다.",
      "질의마다 합을 출력한다."
    ],
    "id": "CPP-050",
    "level": 115,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 10,
    "difficulty": 7,
    "points": 7,
    "minutes": 23,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<long long> s;\n    while (n--) {\n        string t;\n        cin >> t;\n        if (t == \"+\" || t == \"-\" || t == \"*\") {\n            long long b = s.back();\n            s.pop_back();\n            long long a = s.back();\n            s.pop_back();\n            s.push_back(t == \"+\" ? a + b : t == \"-\" ? a - b : a * b);\n        } else\n            s.push_back(stoll(t));\n    }\n    cout << s.back();\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄에 토큰 수 N, 둘째 줄에 공백으로 구분된 토큰 N개가 주어진다.",
      "계산 결과를 출력한다."
    ],
    "id": "CPP-051",
    "level": 116,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 11,
    "difficulty": 8,
    "points": 7,
    "minutes": 23,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "complexity": "시간 O(T log T), 공간 O(T) · T는 입력 기록·명령의 총수",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    map<string, long long> a;\n    while (n--) {\n        string name;\n        long long v;\n        cin >> name >> v;\n        a[name] = v;\n    }\n    while (q--) {\n        string op, x, y;\n        long long v;\n        cin >> op >> x;\n        if (op == \"BALANCE\") {\n            cout << a[x] << \"\\n\";\n            continue;\n        }\n        if (op == \"TRANSFER\")\n            cin >> y;\n        cin >> v;\n        if (op == \"DEPOSIT\") {\n            a[x] += v;\n            cout << \"OK\\n\";\n        } else if (a[x] < v)\n            cout << \"FAIL\\n\";\n        else {\n            a[x] -= v;\n            if (op == \"TRANSFER\")\n                a[y] += v;\n            cout << \"OK\\n\";\n        }\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 다음 N줄 이름 초기잔액, 다음 Q줄 명령이 주어진다.",
      "명령마다 OK, FAIL 또는 조회 잔액을 출력한다."
    ],
    "id": "CPP-052",
    "level": 117,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 12,
    "difficulty": 8,
    "points": 7,
    "minutes": 24,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int m, t;\n    cin >> m >> t;\n    vector<int> coins(m);\n    for (int &x : coins)\n        cin >> x;\n    vector<int> dp(t + 1, t + 1);\n    dp[0] = 0;\n    for (int v = 1; v <= t; v++)\n        for (int c : coins)\n            if (c <= v)\n                dp[v] = min(dp[v], dp[v - c] + 1);\n    cout << (dp[t] > t ? -1 : dp[t]);\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 M T, 둘째 줄 서로 다른 동전 값 M개가 주어진다.",
      "최소 개수 또는 -1을 출력한다."
    ],
    "id": "CPP-053",
    "level": 118,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 13,
    "difficulty": 9,
    "points": 7,
    "minutes": 24,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    long long a = 1, b = 1;\n    for (int i = 2; i <= n; i++) {\n        long long c = (a + b) % 1000000007;\n        a = b;\n        b = c;\n    }\n    cout << b;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N이 주어진다.",
      "방법 수의 나머지를 출력한다."
    ],
    "id": "CPP-054",
    "level": 119,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 14,
    "difficulty": 10,
    "points": 7,
    "minutes": 25,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "lower_bound로 교체 위치를 찾으면 같은 값이 길이를 늘리지 않는다."
    ],
    "approach": [
      "길이별 부분 수열의 마지막 값 중 최소를 저장한다.",
      "lower_bound로 교체 위치를 찾으면 같은 값이 길이를 늘리지 않는다."
    ],
    "complexity": "시간 O(N log N), 공간 O(N)",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<int> tails;\n    while (n--) {\n        int x;\n        cin >> x;\n        auto it = lower_bound(tails.begin(), tails.end(), x);\n        if (it == tails.end())\n            tails.push_back(x);\n        else\n            *it = x;\n    }\n    cout << tails.size();\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "최대 길이를 출력한다."
    ],
    "id": "CPP-055",
    "level": 120,
    "course": "cpp-advanced",
    "courseLabel": "고급",
    "courseIndex": 15,
    "difficulty": 10,
    "points": 7,
    "minutes": 25,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<vector<pair<int, int>>> g(n + 1);\n    while (m--) {\n        int a, b, w;\n        cin >> a >> b >> w;\n        g[a].push_back({b, w});\n        g[b].push_back({a, w});\n    }\n    const long long INF = 1LL << 60;\n    vector<long long> d(n + 1, INF);\n    priority_queue<pair<long long, int>, vector<pair<long long, int>>,\n                   greater<pair<long long, int>>>\n        heap;\n    d[1] = 0;\n    heap.push({0, 1});\n    while (!heap.empty()) {\n        auto [cost, v] = heap.top();\n        heap.pop();\n        if (cost != d[v])\n            continue;\n        for (auto [x, w] : g[v])\n            if (cost + w < d[x]) {\n                d[x] = cost + w;\n                heap.push({d[x], x});\n            }\n    }\n    for (int i = 1; i <= n; i++)\n        cout << (d[i] == INF ? -1 : d[i]) << \" \";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 다음 M줄 a b w가 주어진다.",
      "1번부터 N번까지 거리를 한 줄에 출력한다."
    ],
    "id": "CPP-056",
    "level": 121,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 1,
    "difficulty": 1,
    "points": 10,
    "minutes": 27,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<vector<int>> g(n + 1);\n    vector<int> degree(n + 1), out;\n    while (m--) {\n        int a, b;\n        cin >> a >> b;\n        g[a].push_back(b);\n        degree[b]++;\n    }\n    priority_queue<int, vector<int>, greater<int>> q;\n    for (int i = 1; i <= n; i++)\n        if (!degree[i])\n            q.push(i);\n    while (!q.empty()) {\n        int v = q.top();\n        q.pop();\n        out.push_back(v);\n        for (int x : g[v])\n            if (--degree[x] == 0)\n                q.push(x);\n    }\n    if ((int)out.size() != n)\n        cout << \"CYCLE\";\n    else\n        for (int x : out)\n            cout << x << \" \";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 다음 M줄 a b가 주어진다.",
      "실행 순서 한 줄 또는 CYCLE을 출력한다."
    ],
    "id": "CPP-057",
    "level": 122,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 2,
    "difficulty": 2,
    "points": 10,
    "minutes": 29,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<vector<int>> children(n + 1);\n    vector<long long> duration(n + 1), finish(n + 1);\n    vector<int> priority(n + 1);\n    for (int i = 1; i <= n; i++) {\n        int p;\n        cin >> p >> duration[i] >> priority[i];\n        if (p)\n            children[p].push_back(i);\n    }\n    priority_queue<pair<int, int>, vector<pair<int, int>>,\n                   greater<pair<int, int>>>\n        q;\n    q.push({priority[1], 1});\n    long long now = 0;\n    while (!q.empty()) {\n        auto [p, v] = q.top();\n        q.pop();\n        cout << v << \" \";\n        now += duration[v];\n        finish[v] = now;\n        for (int x : children[v])\n            q.push({priority[x], x});\n    }\n    cout << \"\\n\";\n    for (int i = 1; i <= n; i++)\n        cout << finish[i] << \" \";\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 다음 N줄에 해당 번호의 부모 소요시간 우선순위가 주어진다. 루트 부모는 0이다.",
      "첫 줄 실행 번호 순서, 둘째 줄 번호별 완료 시각을 출력한다."
    ],
    "id": "CPP-058",
    "level": 123,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 3,
    "difficulty": 3,
    "points": 10,
    "minutes": 31,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    vector<int> p(n + 1), size(n + 1, 1);\n    iota(p.begin(), p.end(), 0);\n    auto find = [&](int x) {\n        while (p[x] != x) {\n            p[x] = p[p[x]];\n            x = p[x];\n        }\n        return x;\n    };\n    while (q--) {\n        string op;\n        int a, b;\n        cin >> op >> a >> b;\n        a = find(a);\n        b = find(b);\n        if (op == \"SAME\")\n            cout << (a == b ? \"YES\" : \"NO\") << \"\\n\";\n        else if (a != b) {\n            if (size[a] < size[b])\n                swap(a, b);\n            p[b] = a;\n            size[a] += size[b];\n        }\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 다음 Q줄 명령이 주어진다.",
      "SAME 결과만 출력한다."
    ],
    "id": "CPP-059",
    "level": 124,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 4,
    "difficulty": 4,
    "points": 10,
    "minutes": 33,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    vector<long long> tree(n + 1);\n    auto add = [&](int i, long long v) {\n        for (; i <= n; i += i & -i)\n            tree[i] += v;\n    };\n    auto sum = [&](int i) {\n        long long s = 0;\n        for (; i > 0; i -= i & -i)\n            s += tree[i];\n        return s;\n    };\n    for (int i = 1; i <= n; i++) {\n        long long x;\n        cin >> x;\n        add(i, x);\n    }\n    while (q--) {\n        string op;\n        int a, b;\n        cin >> op >> a >> b;\n        if (op == \"ADD\")\n            add(a, b);\n        else\n            cout << sum(b) - sum(a - 1) << \"\\n\";\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 초기값 N개, 다음 Q줄 명령이 주어진다.",
      "SUM 결과만 한 줄씩 출력한다."
    ],
    "id": "CPP-060",
    "level": 125,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 5,
    "difficulty": 5,
    "points": 10,
    "minutes": 35,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    cin >> n >> q;\n    int base = 1;\n    while (base < n)\n        base *= 2;\n    vector<int> tree(2 * base, INT_MAX);\n    for (int i = 0; i < n; i++)\n        cin >> tree[base + i];\n    for (int i = base - 1; i > 0; i--)\n        tree[i] = min(tree[2 * i], tree[2 * i + 1]);\n    while (q--) {\n        string op;\n        int a, b;\n        cin >> op >> a >> b;\n        if (op == \"SET\") {\n            int i = base + a - 1;\n            tree[i] = b;\n            while ((i /= 2) > 0)\n                tree[i] = min(tree[i * 2], tree[i * 2 + 1]);\n        } else {\n            int l = base + a - 1, r = base + b - 1, answer = INT_MAX;\n            while (l <= r) {\n                if (l % 2)\n                    answer = min(answer, tree[l++]);\n                if (!(r % 2))\n                    answer = min(answer, tree[r--]);\n                l /= 2;\n                r /= 2;\n            }\n            cout << answer << \"\\n\";\n        }\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N Q, 둘째 줄 초기값 N개, 다음 Q줄 명령이 주어진다.",
      "MIN 결과만 출력한다."
    ],
    "id": "CPP-061",
    "level": 126,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 6,
    "difficulty": 6,
    "points": 10,
    "minutes": 37,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
      "list의 순서와 map의 반복자로 최근 사용을 표현한다.",
      "조회·갱신 모두 순서를 바꾸고 초과 시 맨 앞을 제거한다."
    ],
    "approach": [
      "list의 순서와 map의 반복자로 최근 사용을 표현한다.",
      "조회·갱신 모두 순서를 바꾸고 초과 시 맨 앞을 제거한다."
    ],
    "complexity": "시간 O(Q log (K+1)), 공간 O(K) · list와 map 구현",
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k, q;\n    cin >> k >> q;\n    list<int> order;\n    map<int, pair<int, list<int>::iterator>> cache;\n    while (q--) {\n        string op;\n        int key, value;\n        cin >> op >> key;\n        if (op == \"GET\") {\n            auto it = cache.find(key);\n            if (it == cache.end())\n                cout << \"-1\\n\";\n            else {\n                cout << it->second.first << \"\\n\";\n                order.erase(it->second.second);\n                order.push_back(key);\n                it->second.second = prev(order.end());\n            }\n        } else {\n            cin >> value;\n            if (k == 0)\n                continue;\n            if (cache.count(key)) {\n                order.erase(cache[key].second);\n                cache.erase(key);\n            }\n            if ((int)cache.size() == k) {\n                cache.erase(order.front());\n                order.pop_front();\n            }\n            order.push_back(key);\n            cache[key] = {value, prev(order.end())};\n        }\n    }\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 K Q, 다음 Q줄 GET key 또는 PUT key value가 주어진다.",
      "GET 결과만 출력한다."
    ],
    "id": "CPP-062",
    "level": 127,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 7,
    "difficulty": 7,
    "points": 10,
    "minutes": 39,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<int> a(n), temp(n);\n    for (int &x : a)\n        cin >> x;\n    function<long long(int, int)> count = [&](int l, int r) -> long long {\n        if (r - l < 2)\n            return 0;\n        int m = (l + r) / 2;\n        long long ans = count(l, m) + count(m, r);\n        int i = l, j = m, k = l;\n        while (i < m || j < r) {\n            if (j == r || (i < m && a[i] <= a[j]))\n                temp[k++] = a[i++];\n            else {\n                ans += m - i;\n                temp[k++] = a[j++];\n            }\n        }\n        copy(temp.begin() + l, temp.begin() + r, a.begin() + l);\n        return ans;\n    };\n    cout << count(0, n);\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 둘째 줄 정수 N개가 주어진다.",
      "위치 쌍의 수를 출력한다."
    ],
    "id": "CPP-063",
    "level": 128,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 8,
    "difficulty": 8,
    "points": 10,
    "minutes": 41,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<tuple<int, int, long long>> jobs;\n    while (n--) {\n        int s, e;\n        long long w;\n        cin >> s >> e >> w;\n        jobs.push_back({e, s, w});\n    }\n    sort(jobs.begin(), jobs.end());\n    n = jobs.size();\n    vector<int> ends;\n    vector<long long> dp(n + 1);\n    for (auto [e, s, w] : jobs)\n        ends.push_back(e);\n    for (int i = 0; i < n; i++) {\n        auto [e, s, w] = jobs[i];\n        int p =\n            upper_bound(ends.begin(), ends.begin() + i, s) - ends.begin();\n        dp[i + 1] = max(dp[i], dp[p] + w);\n    }\n    cout << dp[n];\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N, 다음 N줄 시작 종료 보상이 주어진다.",
      "가능한 최대 보상 합을 출력한다."
    ],
    "id": "CPP-064",
    "level": 129,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 9,
    "difficulty": 9,
    "points": 10,
    "minutes": 43,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
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
    "solution": "#include <bits/stdc++.h>\n#include <cctype>\n#include <list>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<string> g(n);\n    for (auto &s : g)\n        cin >> s;\n    int sr = 0, sc = 0;\n    for (int r = 0; r < n; r++)\n        for (int c = 0; c < m; c++)\n            if (g[r][c] == 'S') {\n                sr = r;\n                sc = c;\n            }\n    vector<vector<vector<int>>> d(\n        n, vector<vector<int>>(m, vector<int>(8, -1)));\n    queue<tuple<int, int, int>> q;\n    q.push({sr, sc, 0});\n    d[sr][sc][0] = 0;\n    int dr[] = {-1, 1, 0, 0}, dc[] = {0, 0, -1, 1};\n    while (!q.empty()) {\n        auto [r, c, mask] = q.front();\n        q.pop();\n        if (g[r][c] == 'E') {\n            cout << d[r][c][mask];\n            return 0;\n        }\n        for (int i = 0; i < 4; i++) {\n            int x = r + dr[i], y = c + dc[i], next = mask;\n            if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] == '#')\n                continue;\n            char ch = g[x][y];\n            if (ch >= 'A' && ch <= 'C' && !(mask & (1 << (ch - 'A'))))\n                continue;\n            if (ch >= 'a' && ch <= 'c')\n                next |= 1 << (ch - 'a');\n            if (d[x][y][next] < 0) {\n                d[x][y][next] = d[r][c][mask] + 1;\n                q.push({x, y, next});\n            }\n        }\n    }\n    cout << -1;\n    return 0;\n}\n",
    "outputMode": "tokens",
    "ioCheck": [
      "첫 줄 N M, 다음 N줄 격자가 주어진다.",
      "최소 이동 횟수 또는 -1을 출력한다."
    ],
    "id": "CPP-065",
    "level": 130,
    "course": "cpp-expert",
    "courseLabel": "심화",
    "courseIndex": 10,
    "difficulty": 10,
    "points": 10,
    "minutes": 45,
    "caseVersion": "2026-11-13.cpp65-v2",
    "language": "cpp",
    "languageLabel": "C++17"
  }
];
