// Advanced Topic-Based Coding Quiz Data Bank
import type { Language, Topic, Question } from '../types.ts';

export type QuizQuestion = Question;
export type QuizTopic = Topic;
export type QuizLanguage = Language;

export const quizData: Record<string, Language> = {
  "c": {
    "id": "c",
    "name": "C Language",
    "icon": "🅲",
    "category": "systems",
    "description": "Low-level procedural language and foundational computer science fundamentals.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Basics",
        "icon": "🔰",
        "desc": "Syntax, main function, headers, and C compilation stages.",
        "questions": [
          {
            "q": "Who is known as the father of the C programming language?",
            "o": [
              "Bjarne Stroustrup",
              "Dennis Ritchie",
              "James Gosling",
              "Guido van Rossum"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Dennis Ritchie developed the C programming language at Bell Labs between 1969 and 1973."
          },
          {
            "q": "Which file extension is used for standard C header files?",
            "o": [
              ".c",
              ".h",
              ".cpp",
              ".ch"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "C header files use the `.h` extension and contain function declarations and macro definitions."
          },
          {
            "q": "What is the return type of the main() function in ISO standard C?",
            "o": [
              "void",
              "int",
              "float",
              "char"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Standard C requires `main()` to return an integer (`int`) representing exit status to the operating system."
          },
          {
            "q": "Which compilation stage converts C source code into assembly code?",
            "o": [
              "Preprocessor",
              "Compiler",
              "Assembler",
              "Linker"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The compiler translates preprocessed C code into platform-specific assembly code."
          },
          {
            "q": "What does the preprocessor directive `#include <stdio.h>` do?",
            "o": [
              "Compiles standard I/O library",
              "Inserts contents of stdio.h before compilation",
              "Allocates input/output buffers",
              "Links runtime C binaries"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The C preprocessor replaces `#include` with the actual header file contents before the compiler analyzes the code."
          },
          {
            "q": "What is the result of token pasting operator `##` in C preprocessor?",
            "o": [
              "Concatenates two tokens into one",
              "Compares two string literals",
              "Converts argument to string",
              "Expands macro recursively"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "The `##` token-pasting operator merges two tokens into a single token during macro preprocessing."
          },
          {
            "q": "What is the primary purpose of the Linker in C compilation?",
            "o": [
              "Expands macros and headers",
              "Translates assembly to machine code",
              "Combines object files and libraries into an executable",
              "Checks syntax errors"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "The Linker combines compiled object files with static or shared libraries into a final executable."
          },
          {
            "q": "Which standard header defines fixed-width integer types like int32_t?",
            "o": [
              "<stdint.h>",
              "<stdlib.h>",
              "<limits.h>",
              "<inttypes.h>"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`<stdint.h>` introduced in C99 defines exact-width integer types like int8_t, int16_t, and int32_t."
          },
          {
            "q": "What is the return value of printf() function on success in C?",
            "o": [
              "Number of characters printed",
              "0",
              "1",
              "Pointer to output buffer"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "printf() returns the total number of characters successfully written to standard output."
          },
          {
            "q": "Which keyword is used to prevent macro redefinition warnings?",
            "o": [
              "#pragma once",
              "#ifndef",
              "#undef",
              "#ifdefined"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`#ifndef` (header guards) prevents multiple inclusions and redefinitions of macros."
          },
          {
            "q": "In C, which comment style was officially introduced into the standard in C99?",
            "o": [
              "/* ... */",
              "// ...",
              "# ...",
              "-- ..."
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Double slash `//` single-line comments were officially adopted into the ISO C standard in C99."
          },
          {
            "q": "What does the `extern` storage class indicate to the C compiler?",
            "o": [
              "Allocates memory on heap",
              "Declares a variable or function defined in another translation unit",
              "Makes variable constant",
              "Stores variable in CPU register"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`extern` tells the compiler that the symbol is defined elsewhere and linked later."
          },
          {
            "q": "What is the result of `#error` directive in C?",
            "o": [
              "Generates a runtime warning",
              "Halts compilation and emits an error message",
              "Logs error to stderr",
              "Ignores syntax check"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`#error` stops compilation immediately and displays the specified diagnostic message."
          },
          {
            "q": "What is the maximum value of an 8-bit unsigned char in standard C?",
            "o": [
              "127",
              "128",
              "255",
              "256"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "An unsigned 8-bit integer ranges from 0 to 255 (2^8 - 1)."
          },
          {
            "q": "Which C standard introduced variable-length arrays (VLAs)?",
            "o": [
              "C89",
              "C99",
              "C11",
              "C23"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "C99 introduced VLAs, which were later made optional in C11."
          },
          {
            "q": "What does the stringification operator `#` do in a C macro?",
            "o": [
              "Converts macro parameter into a string literal",
              "Concatenates tokens",
              "Calculates string length",
              "Allocates char array"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "The `#` preprocessor operator converts a macro argument into a quoted string literal."
          },
          {
            "q": "Which function in standard C reads formatted input from standard input?",
            "o": [
              "cin",
              "scanf()",
              "read()",
              "input()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`scanf()` reads input matching specified conversion specifiers from stdin."
          }
        ]
      },
      "variables": {
        "id": "variables",
        "name": "Variables & Data Types",
        "icon": "📦",
        "desc": "Primitive types, modifiers, memory sizes, and variable scopes.",
        "questions": [
          {
            "q": "What is the standard format specifier used to print an integer in C?",
            "o": [
              "%f",
              "%d",
              "%s",
              "%c"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`%d` (or `%i`) is used in `printf` and `scanf` for signed decimal integers."
          },
          {
            "q": "What is the size of a `char` data type in standard C?",
            "o": [
              "1 byte",
              "2 bytes",
              "4 bytes",
              "8 bytes"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "By definition in the C standard, `sizeof(char)` is always exactly 1 byte."
          },
          {
            "q": "What will `sizeof('a')` evaluate to in standard C?",
            "o": [
              "1",
              "sizeof(int)",
              "0",
              "Compiler error"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In C, character literals like `'a'` are integer character constants of type `int`, so `sizeof('a') == sizeof(int)`."
          },
          {
            "q": "Which keyword prevents modification of a variable's value?",
            "o": [
              "static",
              "const",
              "volatile",
              "register"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `const` type qualifier makes a variable read-only."
          },
          {
            "q": "What is the default initial value of a static local variable in C?",
            "o": [
              "Garbage value",
              "0",
              "-1",
              "Null pointer"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Static variables are stored in the BSS segment and initialized to zero by default."
          },
          {
            "q": "What is the purpose of the `volatile` qualifier in C?",
            "o": [
              "Optimizes memory reads",
              "Prevents compiler from caching the variable in registers",
              "Stores variable in CPU cache",
              "Protects variable from threading races"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`volatile` tells the compiler that the variable may change unexpectedly (e.g., hardware register) and prevents aggressive optimization."
          },
          {
            "q": "Which storage class has block scope and automatic lifetime?",
            "o": [
              "static",
              "auto",
              "extern",
              "register"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`auto` is the default storage class for local variables, existing only during block execution."
          },
          {
            "q": "What is the range of a signed 16-bit integer (short)?",
            "o": [
              "0 to 65535",
              "-32768 to 32767",
              "-2147483648 to 2147483647",
              "-128 to 127"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A signed 16-bit number uses two's complement, giving a range of -32768 to 32767."
          },
          {
            "q": "What does the `register` keyword suggest to the C compiler?",
            "o": [
              "Store in non-volatile memory",
              "Store variable in a CPU register for faster access",
              "Make variable global",
              "Prevent pointer access"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`register` hints to the compiler that the variable will be heavily used and should reside in a CPU register."
          },
          {
            "q": "Can you take the address of a variable declared with `register` in C?",
            "o": [
              "Yes, always",
              "No, address-of operator & is illegal on register variables",
              "Only with void*",
              "Only on 64-bit systems"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "In C, you cannot apply the address operator `&` to a `register` variable because it may not reside in RAM."
          },
          {
            "q": "Which header file defines platform-specific integer limits like INT_MAX and CHAR_BIT?",
            "o": [
              "<limits.h>",
              "<float.h>",
              "<stdlib.h>",
              "<stdint.h>"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<limits.h>` contains constants for integer type ranges on the current architecture."
          },
          {
            "q": "What is the size of `long double` guaranteed by standard C?",
            "o": [
              "At least as large as double",
              "Exactly 16 bytes",
              "Exactly 8 bytes",
              "Twice the size of float"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "The C standard specifies `sizeof(float) <= sizeof(double) <= sizeof(long double)`."
          },
          {
            "q": "What happens when an integer overflow occurs on a signed integer in standard C?",
            "o": [
              "Wraps around to negative",
              "Throws OverflowException",
              "Undefined behavior",
              "Clamps to INT_MAX"
            ],
            "a": 2,
            "difficulty": "hard",
            "explanation": "Signed integer overflow is undefined behavior in C (unlike unsigned overflow, which wraps)."
          },
          {
            "q": "Which modifier specifies that a variable cannot be modified by the program but may be changed by hardware?",
            "o": [
              "const",
              "volatile",
              "const volatile",
              "static const"
            ],
            "a": 2,
            "difficulty": "hard",
            "explanation": "`const volatile` represents a read-only hardware register that changes asynchronously."
          },
          {
            "q": "In C, what is an enum's underlying data type typically represented as?",
            "o": [
              "char",
              "int",
              "float",
              "void*"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Enumeration constants in C evaluate to signed integer values (`int`)."
          },
          {
            "q": "What is true about global variables initialized without an explicit value in C?",
            "o": [
              "They contain garbage values",
              "They are initialized to zero",
              "Compilation fails",
              "They cause linker errors"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Global variables are stored in the BSS segment and initialized to zero at program start."
          },
          {
            "q": "Which type qualifier in C specifies that a pointer is aligned to a boundary?",
            "o": [
              "_Alignas",
              "volatile",
              "register",
              "alignof"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`_Alignas` (introduced in C11) sets minimum byte alignment for variables."
          }
        ]
      },
      "operators": {
        "id": "operators",
        "name": "Operators",
        "icon": "➕",
        "desc": "Arithmetic, bitwise, relational, logical, and precedence rules.",
        "questions": [
          {
            "q": "Which operator is used to calculate the remainder of division in C?",
            "o": [
              "/",
              "%",
              "//",
              "mod"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The modulus operator `%` produces the remainder of integer division."
          },
          {
            "q": "What is the result of the expression `5 + 2 * 3` in C?",
            "o": [
              "21",
              "11",
              "17",
              "16"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Multiplication (`*`) has higher precedence than addition (`+`), so `2 * 3 = 6`, then `5 + 6 = 11`."
          },
          {
            "q": "What is the value of `x` after: `int a = 5; int x = a++;`?",
            "o": [
              "5",
              "6",
              "4",
              "Undefined"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Postfix `a++` returns the original value (5) before incrementing `a` to 6."
          },
          {
            "q": "Which bitwise operator is used for Bitwise XOR in C?",
            "o": [
              "&",
              "|",
              "^",
              "~"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "The caret `^` represents bitwise exclusive OR in C."
          },
          {
            "q": "What is the output of `!0` in C?",
            "o": [
              "0",
              "1",
              "-1",
              "false"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In C, logical NOT on 0 (false) yields 1 (true)."
          },
          {
            "q": "What is the associativity of the assignment operator (`=`) in C?",
            "o": [
              "Left to Right",
              "Right to Left",
              "Non-associative",
              "Depends on compiler"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Assignment operators evaluate from right to left (e.g. `a = b = c`)."
          },
          {
            "q": "What is the output of the bitwise expression `5 & 3`?",
            "o": [
              "1",
              "7",
              "2",
              "0"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "5 (0101) & 3 (0011) = 0001 (1 in decimal)."
          },
          {
            "q": "What is the output of `5 | 3` in C?",
            "o": [
              "7",
              "1",
              "8",
              "15"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "5 (0101) | 3 (0011) = 0111 (7 in decimal)."
          },
          {
            "q": "What does the expression `1 << 3` evaluate to in C?",
            "o": [
              "3",
              "4",
              "8",
              "16"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Left shifting 1 by 3 bits multiplies 1 by 2^3 = 8."
          },
          {
            "q": "Which operator has the highest precedence in C?",
            "o": [
              "*",
              "+",
              "() (Parentheses)",
              "=="
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Parentheses `()` have the highest precedence among all operators in C."
          },
          {
            "q": "What is the comma operator's evaluation behavior in C?",
            "o": [
              "Evaluates left-to-right and returns left operand",
              "Evaluates left-to-right and returns right operand",
              "Evaluates right-to-left and returns right operand",
              "Executes in parallel"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "The comma operator evaluates each expression from left to right and yields the value of the rightmost expression."
          },
          {
            "q": "What is the result of `sizeof(int)` on a standard modern 64-bit architecture?",
            "o": [
              "2 bytes",
              "4 bytes",
              "8 bytes",
              "16 bytes"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "On most standard modern systems (LP64 / LLP64), `sizeof(int)` is 4 bytes."
          },
          {
            "q": "What does short-circuit evaluation mean for logical AND (`&&`)?",
            "o": [
              "Right operand is evaluated first",
              "Right operand is skipped if left operand is false",
              "Both operands are always evaluated",
              "Operator throws on error"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "If the first operand of `&&` is 0 (false), the remaining operand is not evaluated."
          },
          {
            "q": "What is the result of `~0` on a two's complement machine?",
            "o": [
              "0",
              "-1",
              "1",
              "INT_MAX"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Bitwise NOT on 0 inverts all 0 bits to 1, which represents -1 in two's complement."
          },
          {
            "q": "Which operator cannot be used on floating-point numbers in C?",
            "o": [
              "+",
              "/",
              "%",
              "*"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "The modulus operator `%` requires integer operands in C; `fmod()` from `<math.h>` is used for floats."
          },
          {
            "q": "What is the value of `x` after: `int a = 10; int x = ++a;`?",
            "o": [
              "10",
              "11",
              "9",
              "Undefined"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Prefix `++a` increments `a` to 11 first and returns the new value (11)."
          },
          {
            "q": "What is the result of `10 >> 2` in C?",
            "o": [
              "5",
              "2",
              "20",
              "40"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Right shifting by 2 divides by 2^2 = 4; `10 / 4 = 2`."
          }
        ]
      },
      "conditionals": {
        "id": "conditionals",
        "name": "Conditional Statements",
        "icon": "🔀",
        "desc": "if-else branching, switch-case, and ternary operator.",
        "questions": [
          {
            "q": "Which keyword is used for multi-way branching against integer constants?",
            "o": [
              "select",
              "switch",
              "branch",
              "choice"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`switch` statements allow branching based on integer or character expressions."
          },
          {
            "q": "What happens if a `break` statement is omitted in a C switch case?",
            "o": [
              "Syntax error occurs",
              "Execution falls through to the next case",
              "Program terminates immediately",
              "The switch restarts"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Without `break`, execution continues sequentially into subsequent cases (fall-through)."
          },
          {
            "q": "Can a floating point variable (like `float x`) be used in a `switch(x)` expression in C?",
            "o": [
              "Yes, always",
              "No, switch requires an integral or enum type",
              "Yes, with warning",
              "Only in C99 and newer"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "C switch expressions must evaluate to an integral or enumeration type."
          },
          {
            "q": "What does the ternary operator `(cond ? a : b)` return if `cond` is false?",
            "o": [
              "a",
              "b",
              "0",
              "null"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "If `cond` evaluates to false (0), the expression after the colon (`b`) is evaluated and returned."
          },
          {
            "q": "What will `if (x = 0)` evaluate to in C?",
            "o": [
              "True branch",
              "False branch",
              "Compilation error",
              "Runtime exception"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`x = 0` assigns 0 to `x` and yields 0, which evaluates to false."
          },
          {
            "q": "What is the maximum number of `default` labels permitted in a single C switch statement?",
            "o": [
              "0",
              "1",
              "2",
              "Unlimited"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A switch statement in C can contain at most one `default` label."
          },
          {
            "q": "Which expression is considered truthy in standard C?",
            "o": [
              "0",
              "0.0",
              "NULL",
              "Any non-zero value"
            ],
            "a": 3,
            "difficulty": "easy",
            "explanation": "In C, any non-zero numeric value or non-null address evaluates to true."
          },
          {
            "q": "Can two case statements have identical constant values in the same switch block?",
            "o": [
              "Yes",
              "No, duplicate case values cause a compilation error",
              "Only if separated by break",
              "Only in nested blocks"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Duplicate case values inside the same switch block are strictly forbidden and cause a compile error."
          },
          {
            "q": "Can a variable declaration with initialization appear directly inside a switch case without enclosing braces?",
            "o": [
              "Yes, always",
              "No, initializations can be skipped by jumping over them causing compile errors",
              "Only static variables",
              "Only const variables"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Declaring and initializing a variable in a case without a `{}` block can be bypassed by case jumps, which C compilers reject."
          },
          {
            "q": "What does the statement `if (!ptr)` test?",
            "o": [
              "If ptr is valid",
              "If ptr is NULL (or points to 0)",
              "If memory allocated is empty",
              "If ptr points to negative number"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`!ptr` evaluates to true if `ptr` is a null pointer (0)."
          },
          {
            "q": "What is a 'dangling else' problem in C?",
            "o": [
              "An else without an if",
              "Ambiguity in nested ifs about which if an else associates with",
              "A memory leak in conditionals",
              "An unclosed brace in if statement"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The dangling else problem is resolved in C by associating `else` with the closest preceding unmatched `if`."
          },
          {
            "q": "Which of the following is equivalent to `x = (a > b) ? a : b;`?",
            "o": [
              "if (a > b) x = a; else x = b;",
              "x = max(a, b); only",
              "while (a > b) x = a;",
              "switch(a) { case b: x = a; }"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The ternary operator behaves identically to the standard if-else assignment."
          },
          {
            "q": "What type of constant is required after a `case` keyword in C?",
            "o": [
              "String literal",
              "Constant integral or character expression",
              "Variable name",
              "Float constant"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Case values must be constant expressions evaluating to an integral type at compile time."
          },
          {
            "q": "Can `continue` statement be used directly inside a `switch` statement that is not inside a loop?",
            "o": [
              "Yes, skips current case",
              "No, continue is only valid inside loops",
              "Yes, jumps to default",
              "Only with goto"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`continue` only applies to iteration statements (for, while, do-while), not switch statements."
          },
          {
            "q": "What is the return type of a relational comparison like `(5 > 3)` in C?",
            "o": [
              "bool",
              "int",
              "char",
              "unsigned int"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In C, relational and equality operators return an `int` with value 1 (true) or 0 (false)."
          },
          {
            "q": "What happens if no case matches in a switch and there is no default label?",
            "o": [
              "Program crashes",
              "Execution proceeds to the statement following the switch block",
              "First case is executed",
              "Infinite loop"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "If no case matches and no default exists, execution cleanly continues past the switch block."
          }
        ]
      },
      "loops": {
        "id": "loops",
        "name": "Loops",
        "icon": "🔁",
        "desc": "for, while, do-while loops, break and continue statements.",
        "questions": [
          {
            "q": "Which loop guarantees that its body will execute at least once?",
            "o": [
              "for loop",
              "while loop",
              "do-while loop",
              "nested loop"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`do-while` evaluates its condition at the bottom, guaranteeing at least one execution."
          },
          {
            "q": "What statement terminates the current loop immediately?",
            "o": [
              "continue",
              "break",
              "return",
              "exit"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`break` halts loop execution and transfers control to the statement following the loop."
          },
          {
            "q": "What statement skips the rest of the current iteration and starts the next?",
            "o": [
              "skip",
              "continue",
              "pass",
              "next"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`continue` skips subsequent statements in the current iteration and tests the loop condition."
          },
          {
            "q": "What is an infinite loop in C using `for`?",
            "o": [
              "for (; ;)",
              "for (0; 0; 0)",
              "for (null)",
              "for (stop)"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`for (; ;)` with an empty condition test is standard C syntax for an infinite loop."
          },
          {
            "q": "In a `for (init; cond; step)` loop, when is `step` executed?",
            "o": [
              "Before each iteration",
              "At the end of each iteration body",
              "Only once at the start",
              "When condition is false"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The increment/step expression runs after the loop body finishes, right before re-checking the condition."
          },
          {
            "q": "What does the expression `for(int i = 0; i < 10; ++i)` do in C99?",
            "o": [
              "Declares loop-scoped variable i",
              "Causes compilation error",
              "Declares global variable i",
              "Executes 11 times"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "C99 introduced the ability to declare loop index variables directly in the for loop init clause."
          },
          {
            "q": "Can a `while (0)` loop body ever execute in C?",
            "o": [
              "Yes, once",
              "No, condition is false before entering",
              "Only if break is called",
              "Depends on compiler"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A while loop tests its condition before entering; 0 evaluates to false so the body never executes."
          },
          {
            "q": "What is the effect of `continue` in a `do-while` loop?",
            "o": [
              "Terminates the loop",
              "Jumps to testing the while condition at the bottom",
              "Restarts from the do statement",
              "Exits the current function"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`continue` in a do-while loop skips remaining statements and jumps directly to evaluating the condition."
          },
          {
            "q": "What is the order of execution in a standard `for (expr1; expr2; expr3)` loop?",
            "o": [
              "expr1, body, expr2, expr3",
              "expr1, expr2, body, expr3",
              "expr1, expr3, expr2, body",
              "expr2, expr1, body, expr3"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Initialization (expr1) runs once, condition (expr2) is tested before each iteration, body runs, then step (expr3) runs."
          },
          {
            "q": "How many times will `for (int i = 0; i < 5; i += 2)` execute?",
            "o": [
              "5 times",
              "2 times",
              "3 times",
              "4 times"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Loop runs for i = 0, 2, and 4 (total 3 times)."
          },
          {
            "q": "What does `goto` do in C programming?",
            "o": [
              "Calls an external function",
              "Unconditionally transfers control to a labeled statement within the function",
              "Terminates program",
              "Throws exception"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`goto label;` transfers control unconditionally to the specified label within the same function."
          },
          {
            "q": "Can a loop condition in C contain multiple expressions separated by commas?",
            "o": [
              "No, syntax error",
              "Yes, evaluates left-to-right and uses the value of the last expression",
              "Yes, treats comma as logical AND",
              "Only in C11"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Comma operators evaluate sequentially and the last expression determines the truth value of the condition."
          },
          {
            "q": "Which statement is best suited to iterate when the number of iterations is known in advance?",
            "o": [
              "while loop",
              "for loop",
              "do-while loop",
              "goto label"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A `for` loop is typically preferred when loop count or range boundaries are known beforehand."
          },
          {
            "q": "What is nested loop time complexity when two loops each iterate N times?",
            "o": [
              "O(N)",
              "O(N log N)",
              "O(N^2)",
              "O(2N)"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "An outer loop running N times containing an inner loop running N times executes N * N = N^2 operations."
          },
          {
            "q": "What happens if loop counter variable overflows in a `for (unsigned char i = 0; i < 256; i++)` loop?",
            "o": [
              "Loop finishes at 255",
              "Infinite loop because unsigned char wraps from 255 to 0",
              "Compiler error",
              "Throws runtime error"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "An 8-bit unsigned char cannot hold 256; after 255 it wraps to 0, which is always < 256, creating an infinite loop."
          },
          {
            "q": "Which of the following can replace any `while` loop?",
            "o": [
              "Only recursive functions",
              "A `for` loop `for(; cond;)`",
              "Only switch statement",
              "Only goto"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A `for(; cond;)` loop has identical semantics and evaluation order to `while (cond)`."
          }
        ]
      },
      "functions": {
        "id": "functions",
        "name": "Functions",
        "icon": "⚙️",
        "desc": "Prototypes, parameters, recursion, and pass-by-value.",
        "questions": [
          {
            "q": "How are arguments passed to functions by default in C?",
            "o": [
              "Pass by reference",
              "Pass by value",
              "Pass by pointer",
              "Pass by name"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "C is strictly pass-by-value. Pointers are passed by value to simulate pass-by-reference."
          },
          {
            "q": "What is a function prototype in C?",
            "o": [
              "The compiled binary of a function",
              "A declaration that tells the compiler the function signature before definition",
              "A macro template",
              "The entry point of the executable"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A prototype informs the compiler about function name, return type, and parameter types before its implementation."
          },
          {
            "q": "What is it called when a function calls itself?",
            "o": [
              "Iteration",
              "Recursion",
              "Inlining",
              "Polymorphism"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Recursion is the programming technique where a function calls itself to solve smaller subproblems."
          },
          {
            "q": "What header is required to use variable-length argument lists (`va_list`)?",
            "o": [
              "<stdlib.h>",
              "<stdarg.h>",
              "<string.h>",
              "<varargs.h>"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`<stdarg.h>` provides macros like `va_start`, `va_arg`, and `va_end` for variadic functions."
          },
          {
            "q": "What keyword suggests that the compiler replace function calls with function code inline?",
            "o": [
              "macro",
              "inline",
              "fastcall",
              "register"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The `inline` keyword suggests expanding the function body directly at call sites to reduce overhead."
          },
          {
            "q": "What happens if a non-void C function reaches its closing brace without an explicit return statement?",
            "o": [
              "Returns 0",
              "Undefined behavior if caller uses the returned value",
              "Compilation fails always",
              "Throws runtime exception"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Except for main() in C99+, falling off the end of a non-void function results in undefined behavior if the caller uses the return value."
          },
          {
            "q": "What is an activation record (stack frame) in C?",
            "o": [
              "A compiler config file",
              "Memory block on stack storing return address, parameters, and local variables",
              "Heap allocation block",
              "Global symbol table"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A stack frame stores local variables, parameter values, and return addresses during function execution."
          },
          {
            "q": "What causes a Stack Overflow during function recursion in C?",
            "o": [
              "Exhausting CPU cache",
              "Exhausting allocated call stack memory through excessive recursion depth",
              "Pointer arithmetic error",
              "Division by zero"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Each recursive call allocates a stack frame; infinite or deep recursion exhausts stack space, causing a stack overflow."
          },
          {
            "q": "Can a function in standard C return an array directly by value?",
            "o": [
              "Yes, always",
              "No, C functions cannot return arrays directly",
              "Only 1D arrays",
              "Only char arrays"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "C functions cannot return arrays by value; they must return a pointer or wrap the array in a struct."
          },
          {
            "q": "What is a function pointer in C?",
            "o": [
              "A pointer that holds the address of executable code for a function",
              "A pointer passed to a function",
              "A pointer that returns void",
              "A macro identifier"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "A function pointer stores the starting memory address of a function and allows dynamic invocation or callbacks."
          },
          {
            "q": "How is a pointer to a function returning int and taking two ints declared in C?",
            "o": [
              "int (*fp)(int, int);",
              "int *fp(int, int);",
              "int fp*(int, int);",
              "function<int(int, int)> fp;"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`int (*fp)(int, int);` declares a function pointer `fp`; without parentheses `int *fp(int, int);` declares a function returning `int*`."
          },
          {
            "q": "What is the scope of variables declared inside a C function body?",
            "o": [
              "File scope",
              "Block (local) scope",
              "Global scope",
              "Program scope"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Variables declared inside a function have block scope and are accessible only within that function."
          },
          {
            "q": "What does the `static` specifier on a C function do?",
            "o": [
              "Makes function run faster",
              "Restricts function visibility to the translation unit (file) in which it is defined",
              "Prevents recursion",
              "Allows multiple return types"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A `static` function has internal linkage and cannot be called from other files."
          },
          {
            "q": "What is the standard calling convention in x86/x64 C?",
            "o": [
              "cdecl / System V AMD64 ABI",
              "pascal",
              "fastcall only",
              "stdcall only"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "C uses caller-cleanup calling conventions (cdecl on x86, System V / Microsoft ABI on x64)."
          },
          {
            "q": "Which function in `<stdlib.h>` terminates a program immediately without cleanup?",
            "o": [
              "exit()",
              "abort()",
              "kill()",
              "terminate()"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`abort()` terminates abnormal program execution immediately by raising SIGABRT."
          },
          {
            "q": "What is the default return type of functions in old K&R C if not specified?",
            "o": [
              "void",
              "int",
              "char",
              "float"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Historically in K&R and C89, functions without explicit return type defaulted to `int` (removed in C99)."
          }
        ]
      },
      "arrays": {
        "id": "arrays",
        "name": "Arrays",
        "icon": "📊",
        "desc": "1D & multidimensional arrays, indexing, and memory layout.",
        "questions": [
          {
            "q": "What is the index of the first element in a C array?",
            "o": [
              "1",
              "0",
              "-1",
              "Depends on declaration"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "C arrays are zero-indexed, meaning the first element is at index 0."
          },
          {
            "q": "Given `int arr[5];`, what is the index of the last valid element?",
            "o": [
              "5",
              "4",
              "6",
              "0"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "An array of size 5 has valid indices from 0 to 4 (`size - 1`)."
          },
          {
            "q": "How are elements of a C array arranged in memory?",
            "o": [
              "Scattered across heap",
              "Contiguous memory locations",
              "Linked list nodes",
              "Random memory addresses"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Array elements are stored contiguously in sequential memory addresses."
          },
          {
            "q": "What is the result of accessing `arr[10]` if `arr` has only 5 elements?",
            "o": [
              "Compiler error",
              "ArrayIndexOutOfBoundsException",
              "Undefined behavior",
              "Program returns 0"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "C does not perform bounds checking; accessing out-of-bounds indices leads to undefined behavior."
          },
          {
            "q": "If `arr` is an integer array, which expression is equivalent to `arr[i]`?",
            "o": [
              "*(arr + i)",
              "&arr[i]",
              "*arr + i",
              "arr + *i"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Array indexing `arr[i]` is syntactic sugar for pointer arithmetic `*(arr + i)`."
          },
          {
            "q": "In a 2D array `int a[3][4]`, how many total elements are allocated?",
            "o": [
              "7",
              "12",
              "14",
              "34"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`3 * 4 = 12` integer elements are allocated in row-major order."
          },
          {
            "q": "What is the name of the phenomenon where an array name converts to a pointer to its first element?",
            "o": [
              "Array decay",
              "Array promotion",
              "Pointer casting",
              "Array slicing"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "In most expressions, an array name decays into a pointer to its first element (`&arr[0]`)."
          },
          {
            "q": "When does an array name NOT decay to a pointer in C?",
            "o": [
              "When passed to a function",
              "When operand of sizeof or unary & operator",
              "In arithmetic expressions",
              "In assignment"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Array decay does not happen when the array is an operand of `sizeof`, `_Alignof`, or the address-of operator `&`."
          },
          {
            "q": "How do you calculate the number of elements in array `int arr[20];` using sizeof?",
            "o": [
              "sizeof(arr)",
              "sizeof(arr) / sizeof(arr[0])",
              "sizeof(arr) * sizeof(int)",
              "length(arr)"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`sizeof(arr) / sizeof(arr[0])` calculates total array bytes divided by element bytes."
          },
          {
            "q": "How are 2D arrays organized in C memory?",
            "o": [
              "Column-major order",
              "Row-major order",
              "Morton order",
              "Diagonal order"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "C stores multidimensional arrays in row-major order, where elements of the same row are adjacent in memory."
          },
          {
            "q": "Can an array in C be initialized using designated initializers like `int a[5] = {[2] = 10};`?",
            "o": [
              "No, syntax error",
              "Yes, supported since C99",
              "Only in C++",
              "Only for character arrays"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "C99 introduced designated initializers to initialize specific array indices."
          },
          {
            "q": "What is the initial value of elements not specified in `int a[5] = {1, 2};`?",
            "o": [
              "Garbage values",
              "0",
              "-1",
              "Null"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "When an initializer list has fewer elements than the array size, remaining elements are initialized to zero."
          },
          {
            "q": "What is the difference between `int *arr[5]` and `int (*arr)[5]`?",
            "o": [
              "No difference",
              "`int *arr[5]` is an array of 5 pointers; `int (*arr)[5]` is a pointer to an array of 5 ints",
              "Both are pointers to pointers",
              "First is illegal in C"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`int *arr[5]` declares an array of 5 integer pointers; `int (*arr)[5]` declares a pointer to an array of 5 integers."
          },
          {
            "q": "What happens when you pass an array to a C function?",
            "o": [
              "The entire array is copied by value",
              "A pointer to the first element is passed by value",
              "An array slice is created",
              "Compilation error"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Arrays decay into pointers when passed as function arguments; only the pointer address is copied."
          },
          {
            "q": "Can the size of a standard fixed-size array in C be changed at runtime?",
            "o": [
              "Yes, with realloc",
              "No, fixed-size arrays have immutable size determined at allocation",
              "Yes, with expand()",
              "Only stack arrays"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Fixed-size stack/static arrays have fixed sizes; dynamic resizing requires heap memory (`malloc`/`realloc`)."
          },
          {
            "q": "What is the value of `arr[-1]` in C?",
            "o": [
              "The last element",
              "Undefined behavior (accesses memory before arr)",
              "Returns NULL",
              "Throws IndexOutOfBounds"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "C does not support Python-like negative indexing; `arr[-1]` accesses the memory address preceding the array, which is undefined behavior."
          }
        ]
      },
      "strings": {
        "id": "strings",
        "name": "Strings",
        "icon": "🔤",
        "desc": "Null-terminated char arrays and standard string.h functions.",
        "questions": [
          {
            "q": "How are strings represented in C?",
            "o": [
              "Built-in String object",
              "Null-terminated (`\\0`) character arrays",
              "Byte arrays with length prefix",
              "Dynamic vector of characters"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In C, strings are sequences of characters terminated by a null byte `\\0`."
          },
          {
            "q": "Which function calculates the length of a string excluding the null terminator?",
            "o": [
              "size()",
              "strlen()",
              "length()",
              "strsize()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`strlen()` from `<string.h>` counts characters up to (but not including) the `\\0` character."
          },
          {
            "q": "Which function copies one string into another in C?",
            "o": [
              "strcopy()",
              "strcpy()",
              "memcpy_str()",
              "clone()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`strcpy(dest, src)` copies the characters from `src` to `dest`."
          },
          {
            "q": "What does `strcmp(\"apple\", \"apple\")` return?",
            "o": [
              "1",
              "-1",
              "0",
              "true"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "`strcmp()` returns 0 when both strings are identical in content."
          },
          {
            "q": "Why is `gets()` dangerous and deprecated in modern C standards?",
            "o": [
              "It causes memory leaks",
              "It cannot check buffer bounds leading to buffer overflows",
              "It requires root permissions",
              "It only accepts numbers"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`gets()` has no bounds checking and can overflow target buffers; `fgets()` should be used instead."
          },
          {
            "q": "What is the ASCII value of the null terminator character `\\0`?",
            "o": [
              "48",
              "32",
              "0",
              "-1"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "The null terminator `\\0` has numerical value 0 in ASCII."
          },
          {
            "q": "What happens if you attempt to modify a string literal like `char *s = \"hello\"; s[0] = 'H';`?",
            "o": [
              "Successfully modifies string",
              "Undefined behavior / segmentation fault",
              "String converts to uppercase",
              "Throws StringException"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "String literals are stored in read-only memory; modifying them invokes undefined behavior (often segfault)."
          },
          {
            "q": "Which function safely concatenates strings with buffer limit in C?",
            "o": [
              "strcat()",
              "strncat()",
              "strappend()",
              "strjoin()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`strncat()` appends at most `n` characters from src, preventing buffer overflows."
          },
          {
            "q": "What does the function `strstr(haystack, needle)` return?",
            "o": [
              "Index of match",
              "Pointer to first occurrence of needle in haystack, or NULL",
              "Boolean true/false",
              "Length of matched substring"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`strstr()` locates the first occurrence of substring `needle` in string `haystack`."
          },
          {
            "q": "Which function compares two strings ignoring case sensitivity in POSIX C?",
            "o": [
              "strcmp()",
              "strcasecmp()",
              "stricmp_safe()",
              "case_compare()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`strcasecmp()` compares strings case-insensitively in POSIX C."
          },
          {
            "q": "What does `strtok()` use between successive calls to tokenize the same string?",
            "o": [
              "Pass the original string again",
              "Pass NULL as the first argument",
              "Pass an empty string \"\"",
              "Reset token buffer"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "After the initial call, subsequent calls pass `NULL` so `strtok` continues scanning the previously saved string buffer."
          },
          {
            "q": "Is `strtok()` thread-safe in standard C?",
            "o": [
              "Yes, fully thread-safe",
              "No, it maintains internal static state (use strtok_r for thread safety)",
              "Only on POSIX",
              "Only in C11"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`strtok()` uses internal static storage and is not thread-safe; `strtok_r()` or `strtok_s()` should be used in concurrent code."
          },
          {
            "q": "What function duplicates a string by allocating heap memory in POSIX / C23?",
            "o": [
              "strdup()",
              "strclone()",
              "stralloc()",
              "strcpy_heap()"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`strdup()` allocates sufficient heap memory via malloc, copies the string, and returns the pointer."
          },
          {
            "q": "How many bytes does the string literal `\"code\"` occupy in memory?",
            "o": [
              "4 bytes",
              "5 bytes (4 chars + \\0)",
              "8 bytes",
              "Depends on alignment"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`\"code\"` has 4 characters plus the terminating null byte `\\0`, totaling 5 bytes."
          },
          {
            "q": "What does `snprintf()` do when output is truncated?",
            "o": [
              "Returns negative error code",
              "Returns number of characters that would have been written without truncation",
              "Throws buffer overflow exception",
              "Returns zero"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`snprintf()` returns the total length that would have been printed if buffer size was unlimited, allowing detection of truncation."
          },
          {
            "q": "Which header is required for character testing functions like `isalpha()` and `isdigit()`?",
            "o": [
              "<string.h>",
              "<ctype.h>",
              "<stdlib.h>",
              "<char.h>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<ctype.h>` provides classification functions like `isalpha`, `isdigit`, `toupper`, and `tolower`."
          }
        ]
      },
      "pointers": {
        "id": "pointers",
        "name": "Pointers",
        "icon": "🎯",
        "desc": "Memory addresses, dereferencing, pointer arithmetic, and void pointers.",
        "questions": [
          {
            "q": "Which operator is used to obtain the address of a variable in C?",
            "o": [
              "*",
              "&",
              "->",
              "%"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The address-of operator `&` retrieves the memory address where a variable is stored."
          },
          {
            "q": "Which operator is used to dereference a pointer in C?",
            "o": [
              "&",
              "*",
              "->",
              "@"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The dereference operator `*` accesses the value stored at the address pointed to."
          },
          {
            "q": "What is a pointer that points to nothing valid called?",
            "o": [
              "Dangling pointer",
              "Null pointer",
              "Void pointer",
              "Wild pointer"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A NULL pointer has value 0 and indicates that the pointer does not reference any valid object."
          },
          {
            "q": "What happens when you increment a pointer `int *p` by 1 (`p++`)?",
            "o": [
              "It increments address by 1 byte",
              "It increments address by `sizeof(int)` bytes",
              "It increments the value pointed to",
              "Undefined behavior"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Pointer arithmetic scales by the size of the underlying type (`sizeof(int)`)."
          },
          {
            "q": "What is a 'dangling pointer' in C?",
            "o": [
              "A pointer initialized to NULL",
              "A pointer that points to deallocated or freed memory",
              "A pointer without a type",
              "A circular pointer"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A dangling pointer still holds the address of memory that has already been freed."
          },
          {
            "q": "Can pointer arithmetic be performed on a `void *` pointer in standard ANSI C?",
            "o": [
              "Yes, treats it as 1 byte",
              "No, void has an incomplete type with no size",
              "Yes, treats it as 4 bytes",
              "Only with compiler flag"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Standard C forbids arithmetic on `void*` because `void` has an incomplete type with no defined size (though GCC has an extension treating it as 1 byte)."
          },
          {
            "q": "What is a 'wild pointer' in C?",
            "o": [
              "A pointer pointing to kernel memory",
              "An uninitialized pointer pointing to an arbitrary memory location",
              "A void pointer",
              "A pointer with circular reference"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A wild pointer has not been initialized to NULL or a valid address and holds arbitrary garbage bits."
          },
          {
            "q": "Which function allocates memory on the heap and initializes all bytes to zero?",
            "o": [
              "malloc()",
              "calloc()",
              "realloc()",
              "valloc()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`calloc(num, size)` allocates contiguous memory and clears all bytes to zero."
          },
          {
            "q": "What happens if `free()` is called on a NULL pointer in C?",
            "o": [
              "Program crashes",
              "Segmentation fault",
              "No operation is performed (safe)",
              "Throws NullPointerException"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "The C standard explicitly states that passing NULL to `free()` performs no action safely."
          },
          {
            "q": "What is the dangerous error of calling `free()` twice on the same memory block called?",
            "o": [
              "Memory leak",
              "Double free vulnerability",
              "Stack smash",
              "Buffer underrun"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Double free corrupts memory allocator internal metadata and can lead to severe security exploits."
          },
          {
            "q": "What does `realloc(ptr, 0)` do in standard C?",
            "o": [
              "Expands memory to maximum",
              "Frees the memory pointed to by ptr",
              "Allocates 1 byte",
              "Returns NULL without freeing"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Passing size 0 to `realloc()` is equivalent to calling `free(ptr)` (deprecated in C23)."
          },
          {
            "q": "What is a memory leak in C?",
            "o": [
              "Reading past array bounds",
              "Allocating heap memory and losing all pointers to it without freeing",
              "Using an uninitialized pointer",
              "Overwriting the stack pointer"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A memory leak occurs when heap memory is allocated (`malloc`) but never released with `free()`."
          },
          {
            "q": "What is the difference between `const int *p` and `int * const p`?",
            "o": [
              "No difference",
              "`const int *p` is pointer to constant int; `int * const p` is a constant pointer to int",
              "Both prevent modifying the pointer address",
              "First is C++ only"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`const int *p` protects the pointed-to value; `int * const p` protects the pointer's own address."
          },
          {
            "q": "What does the `restrict` type qualifier indicate to the compiler in C99?",
            "o": [
              "Pointer is read-only",
              "Pointer is the sole reference to the memory object for optimization",
              "Pointer cannot be cast",
              "Memory is stored in cache"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`restrict` promises the compiler that no other pointer aliases the target memory, unlocking aggressive optimizations."
          },
          {
            "q": "What is the result of subtracting two pointers pointing to elements in the same array?",
            "o": [
              "Number of bytes between them",
              "Difference in array indices (`ptrdiff_t`)",
              "Undefined behavior",
              "Zero"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Pointer subtraction yields the number of array elements between them as type `ptrdiff_t`."
          },
          {
            "q": "What is `uintptr_t` defined in `<stdint.h>` used for?",
            "o": [
              "An unsigned integer type guaranteed to hold a void pointer without truncation",
              "A 128-bit pointer",
              "A pointer counter",
              "Network address pointer"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`uintptr_t` is an integer type capable of safely storing pointer values without losing precision."
          }
        ]
      },
      "structures": {
        "id": "structures",
        "name": "Structures",
        "icon": "🏗️",
        "desc": "struct definitions, unions, typedef, and memory alignment.",
        "questions": [
          {
            "q": "Which keyword defines a user-defined composite data type in C?",
            "o": [
              "class",
              "struct",
              "object",
              "interface"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`struct` allows grouping variables of different types under a single name."
          },
          {
            "q": "Which operator accesses a structure member through a pointer to that structure?",
            "o": [
              ".",
              "->",
              "::",
              "&"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The arrow operator `->` accesses members via a pointer (e.g. `ptr->member`)."
          },
          {
            "q": "What is the primary difference between a `struct` and a `union` in C?",
            "o": [
              "Unions cannot hold integers",
              "All members in a union share the same memory location",
              "Structs cannot use pointers",
              "Unions are compiled in C++ only"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In a union, all members share the same memory space, and the union's size equals its largest member."
          },
          {
            "q": "Which keyword creates an alias for an existing data type in C?",
            "o": [
              "alias",
              "typedef",
              "define",
              "using"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`typedef` creates new synonym names for types (e.g., `typedef unsigned long ulong;`)."
          },
          {
            "q": "Why might `sizeof(struct { char c; int i; })` be 8 bytes instead of 5?",
            "o": [
              "Compiler error",
              "Memory padding and structure alignment",
              "Integers require 7 bytes",
              "Char is 4 bytes inside structs"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Compilers insert padding bytes so members are aligned to natural memory boundaries for performance."
          },
          {
            "q": "What is bit-field in a C struct?",
            "o": [
              "An array of booleans",
              "A struct member with an explicitly specified bit width",
              "A pointer to binary file",
              "A compiler optimization flag"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Bit-fields allow specifying the exact number of bits allocated to integer struct members (e.g. `unsigned int flag : 1;`)."
          },
          {
            "q": "Can a struct in standard C contain a member of its own struct type by value (not pointer)?",
            "o": [
              "Yes, for recursion",
              "No, struct cannot contain itself by value because size would be infinite",
              "Only if static",
              "Only up to 3 levels"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A struct cannot contain an instance of itself by value because its size would be undefined and infinite."
          },
          {
            "q": "How do you define a self-referential structure (like a linked list node) in C?",
            "o": [
              "struct Node { int val; struct Node next; };",
              "struct Node { int val; struct Node *next; };",
              "typedef Node* Node;",
              "class Node { Node n; };"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Self-referential structs use a pointer to the struct type (`struct Node *next;`)."
          },
          {
            "q": "What is flexible array member in C99?",
            "o": [
              "A dynamically resizable array on stack",
              "An unsized array member at the end of a struct",
              "A pointer to vector",
              "An array with negative index"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "C99 allows an incomplete array type `type name[];` as the last member of a struct to facilitate dynamic payload sizes."
          },
          {
            "q": "What is the offset of the first member in any standard C structure?",
            "o": [
              "0 bytes from the start of the struct",
              "4 bytes",
              "Depends on compiler",
              "Pointer size"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "The C standard guarantees that the first member of a struct starts at offset 0 with no leading padding."
          },
          {
            "q": "Which macro from `<stddef.h>` computes the byte offset of a member in a structure?",
            "o": [
              "offsetof()",
              "byte_offset()",
              "member_offset()",
              "struct_pos()"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`offsetof(type, member)` returns the byte offset of `member` in structure `type`."
          },
          {
            "q": "Can you assign one struct variable to another using the assignment operator (`=`) in C?",
            "o": [
              "No, must use memcpy",
              "Yes, assigns all members via shallow byte copy",
              "Only if typedef is used",
              "Only in C++"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In C, structs can be directly assigned (`s1 = s2;`), copying all member values."
          },
          {
            "q": "What does `#pragma pack(1)` instruct the C compiler to do?",
            "o": [
              "Disable struct optimization",
              "Align structure members on 1-byte boundaries without padding",
              "Encrypt struct data",
              "Allocate struct on heap"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`#pragma pack(1)` removes padding bytes between struct members, creating packed structs."
          },
          {
            "q": "What is an anonymous union or struct in modern C?",
            "o": [
              "A union or struct declared without a tag or variable name whose members are accessed directly",
              "A union in static memory",
              "A union containing only void*",
              "A private union"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Anonymous structs/unions (C11) embed their members directly into the enclosing struct's namespace."
          },
          {
            "q": "What is the size of an empty struct in standard C?",
            "o": [
              "0 bytes",
              "1 byte",
              "Constraint violation (standard C forbids empty structs)",
              "Undefined"
            ],
            "a": 2,
            "difficulty": "hard",
            "explanation": "Standard C requires a struct declaration to contain at least one member; empty structs are illegal in ISO C (unlike C++)."
          },
          {
            "q": "Which keyword creates a union where all members share the same memory space?",
            "o": [
              "struct",
              "union",
              "shared",
              "combine"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `union` keyword allocates memory equal to the largest member, shared by all members."
          }
        ]
      },
      "file_handling": {
        "id": "file_handling",
        "name": "File Handling",
        "icon": "📁",
        "desc": "FILE pointers, fopen modes, fread, fwrite, and fclose.",
        "questions": [
          {
            "q": "Which function is used to open a file stream in C?",
            "o": [
              "file_open()",
              "fopen()",
              "open()",
              "create_file()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`FILE *fopen(const char *filename, const char *mode)` opens a file and returns a stream pointer."
          },
          {
            "q": "What does `fopen()` return if the file cannot be opened?",
            "o": [
              "-1",
              "0",
              "NULL",
              "EOF"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`fopen()` returns `NULL` when an error occurs during file opening."
          },
          {
            "q": "Which file mode opens a file for appending data to the end?",
            "o": [
              "\"r\"",
              "\"w\"",
              "\"a\"",
              "\"x\""
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Mode `\"a\"` opens the file for writing at the end without truncating existing content."
          },
          {
            "q": "What constant indicates the end of a file in C I/O operations?",
            "o": [
              "END",
              "NULL",
              "EOF",
              "TERMINATE"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "`EOF` (End of File) is a negative integer (usually -1) defined in `<stdio.h>`."
          },
          {
            "q": "Which function writes binary blocks of data to a file stream?",
            "o": [
              "fputs()",
              "fwrite()",
              "fprintf()",
              "write_raw()"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`fwrite()` writes binary items of specified size and count to a `FILE*` stream."
          },
          {
            "q": "Which standard streams are automatically opened when a C program starts?",
            "o": [
              "stdin, stdout, stderr",
              "filein, fileout, filelog",
              "in, out, err",
              "console, terminal, error"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Standard I/O automatically opens `stdin` (0), `stdout` (1), and `stderr` (2)."
          },
          {
            "q": "What does `fseek(fp, 0, SEEK_END)` accomplish?",
            "o": [
              "Resets pointer to beginning",
              "Moves file position indicator to end of file",
              "Deletes file content",
              "Closes file stream"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`fseek(fp, 0, SEEK_END)` positions the file indicator at the end of the file."
          },
          {
            "q": "Which function reports the current byte offset in a file stream?",
            "o": [
              "ftell()",
              "fpos()",
              "fcursor()",
              "findex()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`long ftell(FILE *stream)` returns the current file position indicator."
          },
          {
            "q": "How can you determine the size of a file in bytes using C file functions?",
            "o": [
              "fsize(fp)",
              "fseek to SEEK_END and call ftell()",
              "stat() only",
              "fread() until EOF"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Seeking to `SEEK_END` and calling `ftell()` yields the file length in bytes."
          },
          {
            "q": "What function flushes unwritten buffered data to the operating system file stream?",
            "o": [
              "fflush()",
              "fsync_c()",
              "fclose_temp()",
              "fclean()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`fflush(stream)` writes any buffered data waiting in the output stream to the file."
          },
          {
            "q": "What does `rewind(fp)` do in C?",
            "o": [
              "Rewinds file position to the beginning and clears error indicators",
              "Truncates file",
              "Re-opens file",
              "Reverses file contents"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`rewind(fp)` is equivalent to `(void)fseek(fp, 0L, SEEK_SET); clearerr(fp);`."
          },
          {
            "q": "What does `feof(fp)` return when end of file has NOT been reached?",
            "o": [
              "0",
              "1",
              "-1",
              "EOF"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`feof()` returns non-zero only after an input operation attempts to read past EOF; otherwise it returns 0."
          },
          {
            "q": "Which mode in `fopen()` opens a file for reading and writing without destroying existing content?",
            "o": [
              "\"r+\"",
              "\"w+\"",
              "\"a\"",
              "\"x+\""
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Mode `\"r+\"` opens an existing file for both reading and writing from the beginning."
          },
          {
            "q": "What is the difference between text mode and binary mode on Windows in C file I/O?",
            "o": [
              "No difference",
              "Text mode translates `\\n` to `\\r\\n` on write; binary mode does not translate bytes",
              "Binary mode encrypts bytes",
              "Text mode is limited to ASCII"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "On platforms like Windows, text mode translates carriage return / newline pairs, whereas binary mode reads raw bytes."
          },
          {
            "q": "Which function reads a single character from a file stream?",
            "o": [
              "fgetc()",
              "fchar()",
              "readc()",
              "getchar_file()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`int fgetc(FILE *stream)` reads and returns the next character as an unsigned char cast to int."
          },
          {
            "q": "What function removes a file from the filesystem in C?",
            "o": [
              "remove()",
              "unlink_file()",
              "delete_file()",
              "rmfile()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`remove(filename)` from `<stdio.h>` deletes the file with the specified name."
          }
        ]
      }
    }
  },
  "java": {
    "id": "java",
    "name": "Java",
    "icon": "☕",
    "category": "enterprise",
    "description": "Object-oriented, platform-independent enterprise programming language.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Java Basics",
        "icon": "🔰",
        "desc": "JVM, JRE, JDK, bytecode, and write once run anywhere paradigm.",
        "questions": [
          {
            "q": "What does WORA stand for in Java's philosophy?",
            "o": [
              "Write Once, Read Anywhere",
              "Write Once, Run Anywhere",
              "Work Once, Run Always",
              "Wide Open Resource Access"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java's core slogan is 'Write Once, Run Anywhere' due to JVM bytecode execution."
          },
          {
            "q": "What component executes Java bytecode on a machine?",
            "o": [
              "JDK",
              "JVM",
              "JRE compiler",
              "JIT source builder"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The Java Virtual Machine (JVM) interprets and JIT-compiles bytecode into native machine instructions."
          },
          {
            "q": "What is the entry point signature for a standard Java standalone application?",
            "o": [
              "public static void main(String[] args)",
              "public void main(String[] args)",
              "static int main(String args[])",
              "public static int main(String[] args)"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Standard main method must be `public static void main(String[] args)`."
          },
          {
            "q": "What file extension is generated after compiling a Java file?",
            "o": [
              ".java",
              ".class",
              ".exe",
              ".jar"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Compiling `.java` files with `javac` generates `.class` bytecode files."
          },
          {
            "q": "What is the purpose of the JIT compiler in the JVM?",
            "o": [
              "Translates Java code to bytecode",
              "Compiles frequently executed bytecode into native machine code at runtime",
              "Cleans garbage memory",
              "Checks code security"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Just-In-Time (JIT) compiler converts hot bytecode into native machine instructions for performance."
          },
          {
            "q": "What is the role of the ClassLoader in Java?",
            "o": [
              "Compiles code to bytecode",
              "Dynamically loads Java classes into memory during runtime",
              "Frees unused memory",
              "Profiles execution time"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The Java ClassLoader subsystem loads, links, and initializes `.class` bytecode files at runtime."
          },
          {
            "q": "Which memory area in the JVM is shared among all threads?",
            "o": [
              "JVM Stack",
              "Program Counter (PC) Register",
              "Heap and Method Area",
              "Native Method Stack"
            ],
            "a": 2,
            "difficulty": "hard",
            "explanation": "The Heap and Method Area (Metaspace in Java 8+) are shared across all threads in the JVM."
          },
          {
            "q": "What command is used to compile a Java source file from terminal?",
            "o": [
              "java",
              "javac",
              "javap",
              "javadoc"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`javac FileName.java` compiles Java source files into bytecode."
          },
          {
            "q": "Which tool disassembles Java bytecode files for inspection?",
            "o": [
              "javac",
              "javap",
              "jar",
              "jconsole"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`javap -c` disassembles `.class` files to display JVM bytecode instructions."
          },
          {
            "q": "What is Garbage Collection in Java?",
            "o": [
              "Manual deallocation using free()",
              "Automatic reclamation of heap memory occupied by unreachable objects",
              "Stack pointer reset",
              "Disk cleaning"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Garbage collection automatically identifies and reclaims memory from objects that can no longer be reached."
          },
          {
            "q": "Can `main` method be overloaded in Java?",
            "o": [
              "No, compiler error",
              "Yes, but JVM only invokes standard `main(String[] args)` as entry point",
              "Only if private",
              "Only in interfaces"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "You can overload `main` with different parameter types, but the JVM specifically invokes `public static void main(String[] args)`."
          },
          {
            "q": "What does the `javadoc` utility generate?",
            "o": [
              "Bytecode binaries",
              "HTML API documentation from source code comments",
              "Unit test cases",
              "Dependency trees"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`javadoc` parses doc comments (`/** ... */`) to produce structured HTML documentation."
          },
          {
            "q": "What memory model was introduced in Java 8 to replace PermGen?",
            "o": [
              "Metaspace (native memory)",
              "Eden space",
              "Survivor space",
              "Old Generation"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Java 8 replaced the fixed-size Permanent Generation with Metaspace allocated in native OS memory."
          },
          {
            "q": "Is Java purely object-oriented?",
            "o": [
              "Yes, 100% pure",
              "No, because it supports primitive types (int, float, etc.)",
              "Only when using records",
              "Yes, in Java 17+"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Java is not purely object-oriented because primitive data types like `int` and `char` are not objects."
          },
          {
            "q": "Which keyword prevents inheritance of a class in Java?",
            "o": [
              "static",
              "final",
              "abstract",
              "const"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A `final` class cannot be subclassed (e.g. `public final class String`)."
          },
          {
            "q": "What happens if you run `java` without specifying a class with a main method?",
            "o": [
              "Starts interactive shell (JShell in Java 9+)",
              "Causes NoSuchMethodError: main",
              "Reboots JVM",
              "Silent exit"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Attempting to execute a class without `main(String[] args)` causes `Error: Main method not found in class`."
          }
        ]
      },
      "variables": {
        "id": "variables",
        "name": "Variables & Data Types",
        "icon": "📦",
        "desc": "Primitive types, wrappers, autoboxing, and type casting.",
        "questions": [
          {
            "q": "How many primitive data types are there in Java?",
            "o": [
              "6",
              "7",
              "8",
              "10"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Java has 8 primitive types: byte, short, int, long, float, double, char, and boolean."
          },
          {
            "q": "What is the size of an `int` primitive in Java?",
            "o": [
              "16 bits (2 bytes)",
              "32 bits (4 bytes)",
              "64 bits (8 bytes)",
              "Platform dependent"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In Java, an `int` is strictly guaranteed to be 32 bits (4 bytes) across all platforms."
          },
          {
            "q": "What is the default value of a boolean instance variable in Java?",
            "o": [
              "true",
              "false",
              "0",
              "null"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The default value for boolean member variables in a Java class is `false`."
          },
          {
            "q": "What is autoboxing in Java?",
            "o": [
              "Automatic serialization of classes",
              "Automatic conversion of primitive types to wrapper objects",
              "Packaging classes into JAR",
              "Memory allocation by JVM"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Autoboxing is the automatic conversion between primitive types (e.g., `int`) and their wrapper classes (e.g., `Integer`)."
          },
          {
            "q": "Which keyword is used to declare a constant in Java?",
            "o": [
              "const",
              "final",
              "static",
              "immutable"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `final` keyword prevents a variable from being reassigned after initialization."
          },
          {
            "q": "What is the range of a `byte` data type in Java?",
            "o": [
              "0 to 255",
              "-128 to 127",
              "-32768 to 32767",
              "-2^31 to 2^31-1"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A signed 8-bit byte in Java ranges from -128 to 127."
          },
          {
            "q": "What is the size of a `char` primitive in Java?",
            "o": [
              "1 byte (ASCII)",
              "2 bytes (16-bit Unicode UTF-16 code unit)",
              "4 bytes",
              "Platform dependent"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java `char` is an unsigned 16-bit integer representing UTF-16 code units (0 to 65535)."
          },
          {
            "q": "What is the default value of an uninitialized local variable inside a method in Java?",
            "o": [
              "0",
              "null",
              "No default value; causes compilation error if used before assignment",
              "false"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "Java local variables do not receive default values; the compiler rejects code that reads them unassigned."
          },
          {
            "q": "What is the purpose of the `transient` keyword in Java?",
            "o": [
              "Marks a variable as thread-safe",
              "Excludes a field from being serialized",
              "Stores variable in CPU cache",
              "Prevents reassignment"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A `transient` variable is skipped by Java's serialization mechanism."
          },
          {
            "q": "What is the difference between `float` and `double` in Java?",
            "o": [
              "float is 32-bit single precision, double is 64-bit double precision",
              "double is faster always",
              "float cannot store negative numbers",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`float` is 32-bit (suffix `f`), and `double` is 64-bit standard floating-point."
          },
          {
            "q": "What does the `var` keyword introduce in Java 10?",
            "o": [
              "Dynamic runtime typing",
              "Local-variable type inference at compile time",
              "Global variable scope",
              "Weak typing"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`var` allows the compiler to infer local variable types while remaining strictly statically typed."
          },
          {
            "q": "What is unboxing in Java?",
            "o": [
              "Unzipping JAR files",
              "Automatic conversion from a wrapper object to its primitive counterpart",
              "De-serializing an object",
              "Removing garbage from heap"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Unboxing converts wrapper types like `Integer` or `Double` back into `int` or `double`."
          },
          {
            "q": "What will `Integer.valueOf(100) == Integer.valueOf(100)` evaluate to?",
            "o": [
              "true (cached by Integer Cache -128 to 127)",
              "false always",
              "Compiler error",
              "Throws exception"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "The JVM caches Integer objects between -128 and 127, so references to 100 point to the exact same cached instance."
          },
          {
            "q": "What is the default value of a reference instance variable in a Java class?",
            "o": [
              "Empty object",
              "null",
              "0",
              "undefined"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "All reference instance fields default to `null` if not explicitly assigned."
          },
          {
            "q": "What is the precision issue with `double` when doing financial calculations?",
            "o": [
              "Double overflow",
              "Binary floating-point cannot accurately represent decimal fractions like 0.1",
              "Slow processing",
              "Negative zero ambiguity"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Binary floating-point arithmetic introduces rounding inaccuracies; `BigDecimal` should be used for monetary values."
          },
          {
            "q": "What is the value of `(byte)130` due to overflow in Java?",
            "o": [
              "130",
              "-126",
              "127",
              "0"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "130 exceeds byte range (-128 to 127); in two's complement 130 wraps to -126."
          }
        ]
      },
      "operators": {
        "id": "operators",
        "name": "Operators",
        "icon": "➕",
        "desc": "Arithmetic, short-circuit logical operators, and instanceof.",
        "questions": [
          {
            "q": "What is the difference between `&` and `&&` in Java?",
            "o": [
              "No difference",
              "`&&` performs short-circuit evaluation while `&` evaluates both sides",
              "`&` is logical and `&&` is bitwise",
              "`&` cannot be used with boolean"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`&&` is a short-circuit operator that skips the right operand if the left operand is false."
          },
          {
            "q": "Which operator checks if an object is an instance of a specific class or interface?",
            "o": [
              "typeof",
              "isInstance",
              "instanceof",
              "as"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`instanceof` tests whether an object has a given type or interface in its hierarchy."
          },
          {
            "q": "What does the expression `10 >> 1` evaluate to in Java?",
            "o": [
              "20",
              "5",
              "10",
              "1"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Right bit-shift by 1 divides an integer by 2 (`10 / 2 = 5`)."
          },
          {
            "q": "What does the unsigned right shift operator `>>>` do in Java?",
            "o": [
              "Fills leftmost bits with sign bit",
              "Fills leftmost bits with zeros always",
              "Rotates bits circularly",
              "Inverts the shifted bits"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`>>>` shifts bits right and always fills high-order bits with zero, regardless of sign."
          },
          {
            "q": "What does `5 + 2 + \"Java\"` evaluate to in Java?",
            "o": [
              "\"52Java\"",
              "\"7Java\"",
              "\"Java7\"",
              "Compile error"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Addition evaluates left to right: `5 + 2 = 7`, then integer 7 is concatenated with string: `\"7Java\"`."
          },
          {
            "q": "What does `\"Java\" + 5 + 2` evaluate to in Java?",
            "o": [
              "\"Java7\"",
              "\"Java52\"",
              "\"52Java\"",
              "Compile error"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Left to right: `\"Java\" + 5 = \"Java5\"`, then `\"Java5\" + 2 = \"Java52\"`."
          },
          {
            "q": "What is the bitwise complement operator in Java?",
            "o": [
              "!",
              "~",
              "^",
              "&"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Tilde `~` inverts all bits of an integral value."
          },
          {
            "q": "What is the result of `true ^ false` (Boolean XOR) in Java?",
            "o": [
              "true",
              "false",
              "0",
              "1"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Logical XOR `^` yields true when exactly one of the boolean operands is true."
          },
          {
            "q": "What is the ternary operator syntax in Java?",
            "o": [
              "condition ? val1 : val2",
              "if (cond) val1 else val2",
              "cond -> val1 : val2",
              "val1 if cond else val2"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Java uses the standard C-style ternary syntax `condition ? expr1 : expr2`."
          },
          {
            "q": "What is the assignment operator `+=` equivalent to?",
            "o": [
              "x = x + y with implicit type cast",
              "x = y + x without cast",
              "x + y",
              "x = y"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Compound assignments like `x += y` implicitly perform a cast `(type of x)(x + y)`."
          },
          {
            "q": "What happens when you divide by zero with floating point numbers in Java (`5.0 / 0.0`)?",
            "o": [
              "Throws ArithmeticException",
              "Returns Infinity",
              "Returns NaN",
              "Returns 0.0"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Floating-point division by zero produces `Double.POSITIVE_INFINITY` without throwing an exception."
          },
          {
            "q": "What happens when you divide an integer by zero (`5 / 0`) in Java?",
            "o": [
              "Returns Infinity",
              "Throws java.lang.ArithmeticException: / by zero",
              "Returns 0",
              "Compiler error"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Integer division by zero throws an unchecked `ArithmeticException` at runtime."
          },
          {
            "q": "What is the associativity of the ternary operator in Java?",
            "o": [
              "Left-to-right",
              "Right-to-left",
              "Non-associative",
              "Platform-dependent"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Conditional ternary operators evaluate from right to left (`a ? b : c ? d : e`)."
          },
          {
            "q": "Which operator checks if two object references point to the exact same heap memory location?",
            "o": [
              "equals()",
              "==",
              "===",
              "compareTo()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`==` tests reference identity (whether both variables point to the same memory address)."
          },
          {
            "q": "What does `Integer.toBinaryString(5)` return?",
            "o": [
              "\"101\"",
              "\"0101\"",
              "\"5\"",
              "\"0x5\""
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "5 in binary is represented as `\"101\"`."
          },
          {
            "q": "What does the expression `(1 << 31) >>> 1` produce in Java?",
            "o": [
              "-1073741824",
              "1073741824",
              "0",
              "-1"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`1 << 31` sets the sign bit (Integer.MIN_VALUE); unsigned shift `>>> 1` moves bits right inserting 0, giving 2^30 = 1073741824."
          }
        ]
      },
      "conditionals": {
        "id": "conditionals",
        "name": "Conditional Statements",
        "icon": "🔀",
        "desc": "if-else-if, switch expressions, and pattern matching.",
        "questions": [
          {
            "q": "Can `String` objects be used in Java `switch` statements?",
            "o": [
              "No, never",
              "Yes, supported since Java 7",
              "Only in Java 17+",
              "Only with switch expressions"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java 7 introduced support for `String` objects in `switch` statements."
          },
          {
            "q": "What happens if no `break` or arrow `->` is provided in a switch case?",
            "o": [
              "Compilation fails",
              "Fall-through occurs to the next case",
              "Exception thrown at runtime",
              "Default case executes"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Classic switch statements without `break` fall through to executing subsequent case bodies."
          },
          {
            "q": "Can a `null` variable be evaluated in `switch(str)`?",
            "o": [
              "Yes, matches default",
              "Throws NullPointerException",
              "Yields false",
              "Compiles but returns empty"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Passing `null` as the selector expression in a switch throws `NullPointerException`."
          },
          {
            "q": "Can `enum` types be evaluated in Java `switch` statements?",
            "o": [
              "No",
              "Yes, supported natively",
              "Only with ordinal()",
              "Only since Java 17"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Enums can be evaluated directly in switch statements using unqualified enum constant names."
          },
          {
            "q": "What is the new arrow syntax `case A -> ...` in Java 14+ switch expressions?",
            "o": [
              "Lambda expression",
              "Eliminates fall-through automatically without needing break",
              "Creates a thread",
              "Calls a method"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Arrow syntax `case X ->` returns values or executes statements without falling through to subsequent cases."
          },
          {
            "q": "Which keyword yields a value from a multi-line switch expression block in modern Java?",
            "o": [
              "return",
              "yield",
              "break value;",
              "output"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`yield` returns a value from a block within a Java switch expression."
          },
          {
            "q": "What is pattern matching for `instanceof` introduced in Java 16?",
            "o": [
              "Regex matching",
              "Extracts and casts the variable in a single step (e.g. `if (obj instanceof String s)`)",
              "Matches interfaces only",
              "Deprecates instanceof"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Pattern matching allows declaring a typed binding variable directly in the `instanceof` check."
          },
          {
            "q": "Can a `boolean` variable be used in a switch statement in Java?",
            "o": [
              "Yes",
              "No, boolean is not supported as a switch selector expression in Java",
              "Only with boolean wrappers",
              "Only in Java 21"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java switch expressions do not accept `boolean` or `Boolean` types; use `if-else` instead."
          },
          {
            "q": "What happens if all cases fail in a classic switch without a default block?",
            "o": [
              "Throws IllegalStateException",
              "Nothing happens; execution continues past the switch",
              "NullPointerException",
              "Infinite loop"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "If no case matches and there is no default, execution smoothly skips the entire switch block."
          },
          {
            "q": "Can an `else` block exist without an accompanying `if` block in Java?",
            "o": [
              "Yes",
              "No, causes a compile error",
              "Only inside loops",
              "Only in static blocks"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "An `else` must strictly pair with a preceding `if` statement."
          },
          {
            "q": "What is the output of `if (true); else System.out.println(\"Hi\");`?",
            "o": [
              "\"Hi\"",
              "Nothing printed because semicolon creates an empty if body",
              "Compile error",
              "Throws exception"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The semicolon after `if (true);` terminates the if branch with an empty statement; the else never executes."
          },
          {
            "q": "Are `float` and `double` allowed as switch selector expressions in Java?",
            "o": [
              "Yes, since Java 8",
              "No, floating point values cannot be evaluated in switch statements",
              "Only float",
              "Only double"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Floating-point types cannot be used in switch selectors due to rounding precision issues."
          },
          {
            "q": "In Java switch statements, can cases be combined with commas in modern Java (`case 1, 2, 3 ->`)?",
            "o": [
              "No, must repeat case labels",
              "Yes, supported in switch expressions and enhanced switch",
              "Only in preview mode",
              "Only for strings"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Enhanced switch permits listing multiple comma-separated case constants in a single branch."
          },
          {
            "q": "What does short-circuit evaluation guarantee for `if (obj != null && obj.isValid())`?",
            "o": [
              "`obj.isValid()` is never called if `obj` is null",
              "Both conditions are evaluated in parallel",
              "Throws NullPointerException anyway",
              "Compiler skips the if block"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Logical AND stops immediately when the first condition is false, preventing NullPointerException."
          },
          {
            "q": "Can a switch expression return a value in Java?",
            "o": [
              "No, switch only executes statements",
              "Yes, switch expressions can be assigned directly to variables",
              "Only if methods are called",
              "Only with return"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Switch expressions can produce values directly (e.g. `String res = switch(x) { ... };`)."
          },
          {
            "q": "What is exhaustive matching in Java switch expressions?",
            "o": [
              "The compiler checks that all possible input values (e.g. all enum constants) are covered",
              "Checking array boundaries",
              "Testing all exceptions",
              "Pattern matching regex"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Switch expressions must be exhaustive; all enum cases must be handled or a default case must be present."
          }
        ]
      },
      "loops": {
        "id": "loops",
        "name": "Loops",
        "icon": "🔁",
        "desc": "for, enhanced for-each, while, do-while, and loop labels.",
        "questions": [
          {
            "q": "What interface must an object implement to be iterated with the enhanced `for-each` loop?",
            "o": [
              "Iterator",
              "Iterable",
              "Collection",
              "List"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The enhanced `for (T item : list)` loop requires the target object to implement `java.lang.Iterable`."
          },
          {
            "q": "Can labeled `break` statements break out of nested outer loops in Java?",
            "o": [
              "No, Java does not support labels",
              "Yes, labeled breaks can terminate specified outer loops",
              "Only with goto",
              "Only inside try-catch"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Java supports labeled loops so `break labelName;` can exit directly from nested loops."
          },
          {
            "q": "What is the output of `for(;;)` in Java?",
            "o": [
              "Syntax error",
              "An infinite loop",
              "Runs exactly 0 times",
              "Throws StackOverflowError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`for(;;)` compiles to an infinite loop in Java."
          },
          {
            "q": "Can a `while` loop condition in Java be an integer like `while (1)`?",
            "o": [
              "Yes, 1 is true",
              "No, Java requires an explicit boolean expression",
              "Only in Java 8",
              "Only with compiler flag"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java strictly enforces type safety; loop conditions must evaluate to `boolean`, so `while(1)` causes a compile error."
          },
          {
            "q": "What does the `break` statement with a label do in Java?",
            "o": [
              "Breaks loop and restarts it",
              "Terminates the labeled enclosing block or loop directly",
              "Throws an exception",
              "Exits the JVM"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Java supports labeled breaks (e.g. `break outer;`) to break out of multiple nested loops."
          },
          {
            "q": "What happens if you modify a collection directly while iterating over it with a `for-each` loop in Java?",
            "o": [
              "Works normally",
              "Throws ConcurrentModificationException",
              "Infinite loop",
              "Deletes all elements"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Modifying a collection during enhanced for-each iteration invalidates the iterator and throws `ConcurrentModificationException`."
          },
          {
            "q": "Which loop construct evaluates its termination condition at the end of the loop body?",
            "o": [
              "for",
              "while",
              "do-while",
              "for-each"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`do-while` checks its boolean condition at the bottom, guaranteeing at least one execution."
          },
          {
            "q": "How can an element be safely removed from a collection during iteration in Java?",
            "o": [
              "Using collection.remove() directly",
              "Using Iterator's remove() method",
              "Setting element to null",
              "Using break"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`Iterator.remove()` safely deletes the current element without triggering ConcurrentModificationException."
          },
          {
            "q": "What does `for (int i = 0; i < 5; i++);` execute?",
            "o": [
              "5 iterations of empty statement",
              "Causes compilation error",
              "Prints numbers 0 to 4",
              "Infinite loop"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The trailing semicolon forms an empty loop body that executes 5 times."
          },
          {
            "q": "Can `continue` take a label in Java?",
            "o": [
              "No, labels only work with break",
              "Yes, `continue label;` skips to the next iteration of the labeled outer loop",
              "Only in switch statements",
              "Deprecated in Java 11"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`continue label;` transfers control to the next iteration of the designated enclosing loop."
          },
          {
            "q": "What is the time complexity of a loop nested 3 levels deep, each running N times?",
            "o": [
              "O(N)",
              "O(N^2)",
              "O(N^3)",
              "O(3N)"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Three nested loops iterating up to N execute N * N * N = N^3 steps."
          },
          {
            "q": "What will `while (false) { int a = 5; }` produce in Java?",
            "o": [
              "Compiles and runs normally",
              "Compile-time error: unreachable statement",
              "Warning only",
              "Runtime exception"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Java compilers strictly forbid unreachable code and reject `while (false)` with a compile error."
          },
          {
            "q": "How many times does `do { System.out.print(\"X\"); } while (false);` run?",
            "o": [
              "0 times",
              "Exactly 1 time",
              "Infinite times",
              "Compiler error"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `do` block executes first before testing the condition, running exactly once."
          },
          {
            "q": "What is an iterator's `hasNext()` method used for?",
            "o": [
              "Advances to next element",
              "Returns true if the iteration has more elements",
              "Removes current element",
              "Resets iteration to beginning"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`hasNext()` inspects whether further elements remain without advancing the cursor."
          },
          {
            "q": "Can you iterate through an array backwards using Java's enhanced `for-each` loop?",
            "o": [
              "Yes, using reverse keyword",
              "No, for-each loop only iterates forwards sequentially",
              "Only with Arrays.reverse()",
              "Only if array is sorted"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The enhanced `for (T item : array)` loop strictly processes elements in forward index order from 0 to length - 1."
          },
          {
            "q": "What interface provides bidirectional iteration in Java?",
            "o": [
              "Iterator",
              "ListIterator",
              "Iterable",
              "Stream"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`ListIterator` supports bidirectional traversal with `hasPrevious()` and `previous()`."
          }
        ]
      },
      "arrays": {
        "id": "arrays",
        "name": "Arrays",
        "icon": "📊",
        "desc": "Array declaration, length property, Arrays utility class.",
        "questions": [
          {
            "q": "How do you find the number of elements in a Java array `int[] arr`?",
            "o": [
              "arr.length()",
              "arr.length",
              "arr.size()",
              "arr.count"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Arrays in Java have a built-in `length` field (not a method)."
          },
          {
            "q": "What exception is thrown when accessing index 5 of an array with 3 elements in Java?",
            "o": [
              "NullPointerException",
              "ArrayIndexOutOfBoundsException",
              "IndexError",
              "NoSuchElementException"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java throws `java.lang.ArrayIndexOutOfBoundsException` at runtime for invalid indices."
          },
          {
            "q": "Are arrays in Java objects stored on the heap?",
            "o": [
              "No, stored on stack only",
              "Yes, all arrays are dynamic objects on the heap",
              "Only object arrays are on heap",
              "Depends on size"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In Java, all arrays (including primitive arrays) are objects allocated on the heap."
          },
          {
            "q": "What is the default value of numeric elements in an uninitialized array `int[] arr = new int[5];`?",
            "o": [
              "Garbage",
              "0",
              "-1",
              "null"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java initializes new primitive integer array elements to 0 on heap allocation."
          },
          {
            "q": "Which class provides utility methods like `sort()`, `binarySearch()`, and `equals()` for arrays in Java?",
            "o": [
              "java.lang.Array",
              "java.util.Arrays",
              "java.util.Collections",
              "java.lang.System"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`java.util.Arrays` contains static algorithms for sorting, searching, and manipulating arrays."
          },
          {
            "q": "How do you make a shallow copy of an array in Java efficiently?",
            "o": [
              "Using `arr.clone()` or `System.arraycopy()`",
              "Using copy() keyword",
              "Using = assignment",
              "Looping with new objects"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`arr.clone()` or `System.arraycopy()` copies the elements (or references) efficiently in memory."
          },
          {
            "q": "What happens when you declare an array without specifying size, like `int[] arr = new int[];`?",
            "o": [
              "Allocates size 0",
              "Compile error: dimension missing",
              "Allocates default size 10",
              "Creates dynamic list"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java requires either an explicit dimension or an array initializer list when instantiating arrays."
          },
          {
            "q": "Can an array in Java hold elements of different primitive types (e.g. both int and double)?",
            "o": [
              "Yes, auto-promoted",
              "No, arrays are strictly homogeneous collections",
              "Only in Object[]",
              "Only with var"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java arrays are strictly homogeneous and can only store values of their declared component type."
          },
          {
            "q": "What is an anonymous array in Java?",
            "o": [
              "An array without a reference variable name (e.g. `new int[]{1, 2, 3}`)",
              "An array with negative size",
              "A private array",
              "A null array"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "An anonymous array is instantiated on-the-fly without assigning it to a local variable name."
          },
          {
            "q": "What is the return type of `arr.clone()` on an `int[]` in Java?",
            "o": [
              "Object",
              "int[]",
              "List<Integer>",
              "void"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In Java, calling `.clone()` on an array returns the exact same array type (`int[]`), requiring no type cast."
          },
          {
            "q": "What is the time complexity of accessing an element in an array by its index?",
            "o": [
              "O(n)",
              "O(log n)",
              "O(1)",
              "O(n^2)"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Array index access is direct memory address computation, taking constant time O(1)."
          },
          {
            "q": "Can a multidimensional array in Java have rows of differing lengths (ragged array)?",
            "o": [
              "No, must be rectangular",
              "Yes, Java supports jagged/ragged arrays because 2D arrays are arrays of arrays",
              "Only with ArrayList",
              "Only in Java 17+"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In Java, multidimensional arrays are arrays of array references, allowing each sub-array to have a unique length."
          },
          {
            "q": "What does `Arrays.binarySearch()` return if the target element is NOT found?",
            "o": [
              "-1",
              "A negative value representing `-(insertion point) - 1`",
              "0",
              "Throws NoSuchElementException"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "If not found, `binarySearch()` returns `-(insertion point) - 1`, allowing callers to know where to insert the element."
          },
          {
            "q": "What method converts an array to a fixed-size `List` backed by the specified array?",
            "o": [
              "Arrays.asList()",
              "List.from()",
              "arr.toList()",
              "Collections.toList()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Arrays.asList(arr)` returns a fixed-size List view backed by the underlying array."
          },
          {
            "q": "What is the superclass of all array types in Java?",
            "o": [
              "java.lang.Object",
              "java.lang.Array",
              "java.util.Collection",
              "java.lang.Iterable"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Every array type in Java directly extends `java.lang.Object` and implements `Cloneable` and `Serializable`."
          },
          {
            "q": "What does `System.arraycopy()` do?",
            "o": [
              "Allocates a new array on heap",
              "Fast native memory copy of a sub-array from source to destination array",
              "Sorts elements",
              "Deep copies objects"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`System.arraycopy()` is a high-performance native method for copying elements between arrays."
          }
        ]
      },
      "strings": {
        "id": "strings",
        "name": "Strings",
        "icon": "🔤",
        "desc": "String immutability, String Pool, StringBuilder, and StringBuffer.",
        "questions": [
          {
            "q": "Are `String` objects mutable in Java?",
            "o": [
              "Yes, always",
              "No, String objects are strictly immutable",
              "Only when declared final",
              "Mutable via methods"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java `String` objects are immutable. Any modification creates a new String instance."
          },
          {
            "q": "Which class is recommended for mutable string operations in a single-threaded environment?",
            "o": [
              "StringBuffer",
              "StringBuilder",
              "StringWriter",
              "StringVector"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`StringBuilder` is faster than `StringBuffer` because its methods are not synchronized."
          },
          {
            "q": "Where are string literals stored in JVM memory?",
            "o": [
              "Stack frame",
              "String Constant Pool (in Heap)",
              "Registers",
              "Native memory"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "String literals are stored in the String Constant Pool, which resides inside the JVM heap."
          },
          {
            "q": "What does `s1.equals(s2)` test when comparing two strings in Java?",
            "o": [
              "Memory address equality",
              "Character sequence value equality",
              "Hash code equality only",
              "Length equality"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`equals()` tests logical content equality, whereas `==` checks reference identity."
          },
          {
            "q": "Why are String objects immutable in Java?",
            "o": [
              "For security, caching in the String Pool, and thread-safety",
              "To prevent subclassing",
              "Because JVM cannot reallocate heap",
              "To speed up garbage collection"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "String immutability ensures security (network/file parameters), enables String Pool caching, and guarantees thread-safety."
          },
          {
            "q": "What is the difference between `StringBuffer` and `StringBuilder` in Java?",
            "o": [
              "StringBuffer is synchronized (thread-safe); StringBuilder is not synchronized (faster for single thread)",
              "StringBuilder cannot append ints",
              "StringBuffer is deprecated",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`StringBuffer` methods are synchronized for multithreaded safety, while `StringBuilder` is unsynchronized and faster."
          },
          {
            "q": "What does `s.intern()` do in Java?",
            "o": [
              "Deletes the string",
              "Puts the string in the String Pool and returns its canonical reference",
              "Converts to lowercase",
              "Computes MD5 hash"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`intern()` searches the String Constant Pool for an equivalent string and returns the pooled reference."
          },
          {
            "q": "What does `\"hello\".charAt(1)` return?",
            "o": [
              "'h'",
              "'e'",
              "'l'",
              "'o'"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java strings are zero-indexed; index 1 is character `'e'`."
          },
          {
            "q": "What is the result of `\"Java\".substring(1, 3)` in Java?",
            "o": [
              "\"av\"",
              "\"ava\"",
              "\"Jav\"",
              "\"a\""
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`substring(beginIndex, endIndex)` extracts characters from `beginIndex` up to (exclusive of) `endIndex` ('a', 'v')."
          },
          {
            "q": "Which method checks if a string is empty or contains only whitespace in Java 11+?",
            "o": [
              "isEmpty()",
              "isBlank()",
              "isWhitespace()",
              "trim().isEmpty()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`isBlank()` tests if a string is empty or contains only whitespace codepoints."
          },
          {
            "q": "What does `String.join(\"-\", \"a\", \"b\", \"c\")` return?",
            "o": [
              "\"a-b-c\"",
              "\"abc-\"",
              "\"-a-b-c-\"",
              "\"a,b,c\""
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`String.join()` joins strings with the specified delimiter."
          },
          {
            "q": "What is a Text Block in Java 15+?",
            "o": [
              "A multiline string literal enclosed in triple quotes `\"\"\"...\"\"\"`",
              "A bytecode section",
              "A synchronized buffer",
              "A regex matcher"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Text blocks allow readable multiline strings without explicit escape characters."
          },
          {
            "q": "Does `String` implement `Comparable<String>`?",
            "o": [
              "Yes, compares lexicographically using compareTo()",
              "No, String cannot be sorted",
              "Only with Collator",
              "Only in Java 21"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`String` implements `Comparable<String>` using lexicographical character code comparisons."
          },
          {
            "q": "What is the result of `\"abc\".repeat(3)` in Java 11?",
            "o": [
              "\"abcabcabc\"",
              "\"abc3\"",
              "\"3abc\"",
              "TypeError"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`repeat(n)` duplicates the string `n` times."
          },
          {
            "q": "Which class is used to search patterns in strings using regular expressions?",
            "o": [
              "java.util.regex.Pattern and Matcher",
              "java.lang.StringRegex",
              "java.util.Scanner",
              "java.lang.Parser"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`Pattern` compiles regex patterns and `Matcher` executes matching operations."
          },
          {
            "q": "What internal encoding representation was introduced in Java 9 for compact strings?",
            "o": [
              "UTF-32",
              "Latin-1 (1 byte per char) when possible, otherwise UTF-16 (2 bytes)",
              "ASCII only",
              "Brotli compression"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Compact Strings use a byte array with an encoder flag, saving 50% memory for Latin-1 character strings."
          }
        ]
      },
      "oop": {
        "id": "oop",
        "name": "OOP",
        "icon": "🧩",
        "desc": "Encapsulation, abstraction, constructors, and access modifiers.",
        "questions": [
          {
            "q": "Which access modifier gives the widest visibility in Java?",
            "o": [
              "protected",
              "private",
              "public",
              "default (package-private)"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`public` members are accessible from any class in any package."
          },
          {
            "q": "What is encapsulation in Object-Oriented Programming?",
            "o": [
              "Inheriting from multiple parents",
              "Bundling data and methods into a unit and hiding internal state",
              "Writing abstract methods",
              "Calling super() constructors"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Encapsulation hides class fields (e.g. `private`) and exposes them via getters/setters."
          },
          {
            "q": "Does a constructor have a return type in Java?",
            "o": [
              "Yes, void",
              "No return type, not even void",
              "Yes, Object",
              "Yes, int"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Constructors have no return type and share the exact same name as the class."
          },
          {
            "q": "What keyword refers to the current class instance in Java?",
            "o": [
              "self",
              "this",
              "super",
              "current"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`this` refers to the current instance of the class."
          },
          {
            "q": "What are the four core pillars of Object-Oriented Programming?",
            "o": [
              "Encapsulation, Abstraction, Inheritance, Polymorphism",
              "Compilation, Execution, Linking, Debugging",
              "Interfaces, Lambdas, Streams, Generics",
              "Classes, Objects, Methods, Variables"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The four foundational principles of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism."
          },
          {
            "q": "What is the default constructor in a Java class?",
            "o": [
              "A no-argument constructor inserted by the compiler if no constructors are declared",
              "A private constructor",
              "A constructor that returns null",
              "A static block"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The compiler automatically provides a public no-arg constructor if no explicit constructor is defined."
          },
          {
            "q": "What is a copy constructor in Java?",
            "o": [
              "A built-in keyword",
              "A constructor that initializes a new object using an existing instance of the same class",
              "A constructor that calls clone()",
              "A static method"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A copy constructor takes an object of the same class as a parameter to duplicate its fields."
          },
          {
            "q": "Can a constructor be declared `static`, `final`, or `abstract` in Java?",
            "o": [
              "Yes, all of them",
              "No, constructors cannot be static, final, or abstract",
              "Only final",
              "Only static"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Constructors are invoked during object instantiation and cannot be static, final, or abstract."
          },
          {
            "q": "What is constructor chaining in Java?",
            "o": [
              "Calling one constructor from another constructor using `this()` or `super()`",
              "Executing multiple methods",
              "Creating array of constructors",
              "Inheriting constructors"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Constructor chaining invokes overloaded or parent constructors using `this(...)` or `super(...)` on the first line."
          },
          {
            "q": "What does the `static` keyword mean when applied to a class field?",
            "o": [
              "Field is read-only",
              "Field belongs to the class itself rather than individual instances",
              "Field is private",
              "Field cannot be serialized"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`static` members are shared across all instances of the class."
          },
          {
            "q": "What is a `record` in Java 16+?",
            "o": [
              "A database table row",
              "A concise, immutable data-carrier class with auto-generated constructor, getters, equals, and hashCode",
              "A dynamic array",
              "An interface for audio"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Records (`record Point(int x, int y) {}`) reduce boilerplate for immutable data-carrying classes."
          },
          {
            "q": "Can an abstract class have constructors in Java?",
            "o": [
              "No, abstract classes cannot have constructors",
              "Yes, abstract classes can have constructors called via super() from subclasses",
              "Only private constructors",
              "Only static constructors"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Abstract classes have constructors to initialize fields when subclass instances are created."
          },
          {
            "q": "What is the difference between an abstract class and an interface in modern Java?",
            "o": [
              "Abstract classes can maintain instance state (fields); interfaces cannot have instance fields",
              "Interfaces cannot have method bodies",
              "Abstract classes can be instantiated directly",
              "No difference"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Abstract classes can hold state (non-static instance fields), while interface variables are strictly `public static final` constants."
          },
          {
            "q": "What is a static nested class vs an inner class in Java?",
            "o": [
              "Static nested classes do not have reference to outer class instance; inner classes require an outer instance",
              "No difference",
              "Inner classes are always public",
              "Static nested classes cannot have methods"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Static nested classes behave like top-level classes; non-static inner classes hold an implicit reference to an enclosing instance."
          },
          {
            "q": "What is the purpose of `finalize()` method in Java (deprecated in Java 9)?",
            "o": [
              "Called by garbage collector before reclaiming object memory",
              "Called when app exits",
              "Finalizes classes",
              "Forces garbage collection"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`finalize()` was intended for resource cleanup prior to garbage collection, but was deprecated due to unpredictability."
          },
          {
            "q": "What is method overloading in Java?",
            "o": [
              "Defining multiple methods with the same name but different parameter signatures in the same class",
              "Overriding a superclass method",
              "Calling a method repeatedly",
              "Hiding fields"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Method overloading is compile-time polymorphism where methods share a name but differ in parameter count or types."
          }
        ]
      },
      "inheritance": {
        "id": "inheritance",
        "name": "Inheritance",
        "icon": "🧬",
        "desc": "extends, implements, super, overriding, and polymorphism.",
        "questions": [
          {
            "q": "Which keyword is used to inherit a class in Java?",
            "o": [
              "implements",
              "extends",
              "inherits",
              "subclass"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`extends` is used to inherit a class (`class Dog extends Animal`)."
          },
          {
            "q": "Does Java support multiple inheritance of classes?",
            "o": [
              "Yes, using commas",
              "No, Java avoids multiple inheritance of classes to prevent ambiguity",
              "Yes, via virtual classes",
              "Only in Java 8+"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Java does not permit multiple class inheritance to avoid the diamond problem, but permits multiple interface implementation."
          },
          {
            "q": "What keyword calls a superclass constructor or method?",
            "o": [
              "parent",
              "super",
              "base",
              "root"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`super()` invokes the parent class constructor, and `super.method()` calls superclass methods."
          },
          {
            "q": "What annotation informs the compiler that a method is intended to override a superclass method?",
            "o": [
              "@Overwrite",
              "@Override",
              "@Inherit",
              "@Poly"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`@Override` provides compile-time verification that a method matches a superclass signature."
          },
          {
            "q": "What is method overriding in Java?",
            "o": [
              "Writing methods with different names",
              "Redefining a superclass method in a subclass with the same signature and return type",
              "Overloading constructors",
              "Creating abstract methods"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Method overriding provides subclass-specific behavior for an inherited superclass method."
          },
          {
            "q": "Can a `static` method be overridden in Java?",
            "o": [
              "Yes, runtime polymorphism applies",
              "No, static methods are hidden (method hiding), not overridden",
              "Only if public",
              "Only in interfaces"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Static methods belong to the class and are resolved at compile-time; declaring the same static method in a subclass hides it."
          },
          {
            "q": "Can a `private` method be overridden in Java?",
            "o": [
              "Yes, always",
              "No, private methods are not visible to subclasses and cannot be overridden",
              "Only with @Override",
              "Only in same package"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Private methods are hidden from subclasses, making overriding impossible."
          },
          {
            "q": "Can the access modifier of an overridden method in a subclass be made more restrictive (e.g. public to protected)?",
            "o": [
              "Yes, anytime",
              "No, subclass methods cannot reduce the visibility of inherited methods",
              "Only in abstract classes",
              "Only if checked exceptions are thrown"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Subclasses cannot reduce visibility because doing so would violate the Liskov Substitution Principle."
          },
          {
            "q": "Can an overridden method declare new or broader checked exceptions in Java?",
            "o": [
              "Yes, any exception",
              "No, it can only declare fewer, narrower checked exceptions, or none at all",
              "Only RuntimeExceptions",
              "Only Errors"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "An overriding method cannot throw checked exceptions that are broader than those declared by the superclass method."
          },
          {
            "q": "What does the `super` keyword reference?",
            "o": [
              "The root Object class",
              "The immediate parent class instance",
              "The current class instance",
              "The enclosing class"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`super` refers to the immediate parent class, used to access parent fields, methods, or constructors."
          },
          {
            "q": "Can an interface in Java extend multiple other interfaces?",
            "o": [
              "No, single inheritance only",
              "Yes, interfaces support multiple inheritance using commas (`interface C extends A, B`)",
              "Only since Java 17",
              "Only if empty"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Java interfaces can extend multiple super-interfaces using the `extends` keyword."
          },
          {
            "q": "What are `default` methods in Java interfaces introduced in Java 8?",
            "o": [
              "Private methods",
              "Methods in interfaces that provide a default concrete implementation",
              "Methods with package-private access",
              "Static helper methods"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Default methods allow adding new methods to interfaces without breaking existing implementing classes."
          },
          {
            "q": "What is the Diamond Problem and how does Java avoid it for classes?",
            "o": [
              "Ambiguity from multiple class inheritance; avoided by forbidding multiple class inheritance",
              "Circular dependencies",
              "Memory leaks in garbage collection",
              "Duplicate jar files"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Java prohibits multiple class inheritance to avoid ambiguity when two parent classes define the same method."
          },
          {
            "q": "What are `sealed` classes introduced in Java 17?",
            "o": [
              "Classes that cannot be instantiated",
              "Classes that restrict which other classes or interfaces may extend or implement them",
              "Classes stored in encrypted JARs",
              "Deprecated classes"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Sealed classes (`sealed class Shape permits Circle, Square`) explicitly control their inheritance hierarchy."
          },
          {
            "q": "What is dynamic method dispatch (runtime polymorphism)?",
            "o": [
              "Resolving method calls at compile time",
              "Determining which overridden method implementation to execute at runtime based on actual object type",
              "Dynamic compilation using JIT",
              "Reflection invocation"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Dynamic method dispatch invokes overridden methods based on the runtime instance type rather than the reference type."
          },
          {
            "q": "What is covariant return type in Java?",
            "o": [
              "Overridden method can return a subtype of the return type declared in the superclass",
              "Returning multiple values",
              "Returning void",
              "Returning generic wildcard"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Since Java 5, an overriding method may return a narrower subclass type than the superclass method."
          }
        ]
      },
      "exceptions": {
        "id": "exceptions",
        "name": "Exception Handling",
        "icon": "🛡️",
        "desc": "try, catch, finally, throw, throws, and checked vs unchecked.",
        "questions": [
          {
            "q": "Which block always executes regardless of whether an exception was thrown or caught?",
            "o": [
              "catch",
              "finally",
              "final",
              "after"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `finally` block executes after try/catch, typically used to close resources."
          },
          {
            "q": "Which of the following is an unchecked (Runtime) exception in Java?",
            "o": [
              "IOException",
              "SQLException",
              "NullPointerException",
              "ClassNotFoundException"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "`NullPointerException` inherits from `RuntimeException` and does not require explicit handling."
          },
          {
            "q": "What is the base class for all errors and exceptions in Java?",
            "o": [
              "java.lang.Exception",
              "java.lang.Throwable",
              "java.lang.Error",
              "java.lang.Object"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`Throwable` is the root superclass of both `Exception` and `Error`."
          },
          {
            "q": "What keyword is used in a method declaration to indicate that it might raise an exception?",
            "o": [
              "throw",
              "throws",
              "raise",
              "catches"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`throws` is placed in the method signature to specify checked exceptions it can propagate."
          },
          {
            "q": "What is the difference between checked and unchecked exceptions in Java?",
            "o": [
              "Checked exceptions are verified at compile time; unchecked (Runtime) exceptions are not",
              "Checked exceptions crash the JVM",
              "Unchecked exceptions inherit from Throwable directly",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Checked exceptions (subclasses of Exception excluding RuntimeException) must be handled or declared with `throws`."
          },
          {
            "q": "What is the purpose of the try-with-resources statement introduced in Java 7?",
            "o": [
              "Speeds up execution",
              "Automatically closes resources that implement `java.lang.AutoCloseable`",
              "Catches all exceptions automatically",
              "Replaces finally keyword entirely"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Try-with-resources automatically closes streams and connections upon leaving the block."
          },
          {
            "q": "Can a `try` block exist without a `catch` block in Java?",
            "o": [
              "No, catch is mandatory",
              "Yes, if accompanied by a `finally` block or in a try-with-resources statement",
              "Only inside methods",
              "Only in Java 11+"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A try block must be followed by at least one `catch` block or a `finally` block."
          },
          {
            "q": "Does the `finally` block execute if `System.exit(0)` is called inside the `try` block?",
            "o": [
              "Yes, always",
              "No, `System.exit()` terminates JVM execution immediately",
              "Only if catch caught it",
              "Only on Linux"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`System.exit()` halts the JVM process immediately, skipping `finally` execution."
          },
          {
            "q": "What is multi-catch in Java 7+?",
            "o": [
              "Catching multiple exception types in a single catch block using `|` (`catch (IOException | SQLException e)`)",
              "Catching exceptions across threads",
              "Running multiple threads on error",
              "Catching Throwable directly"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Multi-catch reduces duplication by handling multiple unrelated exceptions in one catch clause."
          },
          {
            "q": "What is the base class for exceptions that a standard application should NOT attempt to catch?",
            "o": [
              "java.lang.Exception",
              "java.lang.Error",
              "java.lang.RuntimeException",
              "java.lang.Throwable"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`Error` indicates catastrophic system problems (e.g. `OutOfMemoryError`, `StackOverflowError`) that apps should not catch."
          },
          {
            "q": "What does `e.printStackTrace()` do?",
            "o": [
              "Prints memory address",
              "Prints the exception class, message, and call stack trace to System.err",
              "Restarts the thread",
              "Logs error to disk"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`printStackTrace()` outputs the exception sequence of method invocations leading up to the error."
          },
          {
            "q": "Can a method re-throw a caught exception?",
            "o": [
              "No, exceptions can only be thrown once",
              "Yes, using the `throw` keyword inside a catch block",
              "Only if wrapped in Error",
              "Only unchecked exceptions"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "You can re-throw caught exceptions (`throw e;`) or wrap them in custom exceptions."
          },
          {
            "q": "What is an `OutOfMemoryError` in Java?",
            "o": [
              "A checked exception",
              "A fatal Error thrown when the JVM runs out of heap memory and GC cannot free more",
              "A syntax error",
              "Stack corruption"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`OutOfMemoryError` is thrown when heap space is exhausted and garbage collection cannot reclaim space."
          },
          {
            "q": "What happens if both `try` and `finally` blocks return a value in Java?",
            "o": [
              "Compilation error",
              "The value returned by the `finally` block overrides the value returned by `try`",
              "Throws RuntimeException",
              "Both values concatenated"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "A return statement inside `finally` discards any pending return value or exception from the `try` block."
          },
          {
            "q": "How do you create a custom checked exception in Java?",
            "o": [
              "Extend java.lang.Exception",
              "Extend java.lang.RuntimeException",
              "Implement Throwable",
              "Extend java.lang.Error"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Extending `java.lang.Exception` creates a checked exception that requires explicit handling."
          },
          {
            "q": "What is exception chaining in Java?",
            "o": [
              "Catching multiple exceptions in sequence",
              "Associating an original root-cause exception with a newly thrown higher-level exception via `initCause()`",
              "Throwing exceptions in loops",
              "Circular try blocks"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Exception chaining wraps low-level exceptions inside high-level business exceptions while preserving root cause."
          }
        ]
      },
      "collections": {
        "id": "collections",
        "name": "Collections",
        "icon": "📚",
        "desc": "List, Set, Map, ArrayList, HashMap, and Iterators.",
        "questions": [
          {
            "q": "Which collection interface does NOT allow duplicate elements?",
            "o": [
              "List",
              "Set",
              "Queue",
              "Vector"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Set` represents a collection with no duplicate elements."
          },
          {
            "q": "Does `java.util.Map` inherit from the `Collection` interface?",
            "o": [
              "Yes, directly",
              "No, Map has its own independent hierarchy",
              "Only in Java 11+",
              "Yes, via Iterable"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`Map` works with key-value pairs and does not extend the `Collection` interface."
          },
          {
            "q": "What is the average time complexity for `get()` and `put()` in a `HashMap`?",
            "o": [
              "O(n)",
              "O(log n)",
              "O(1)",
              "O(n log n)"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "A well-distributed hash map provides constant time O(1) performance for lookups and insertions."
          },
          {
            "q": "Which List implementation is based on a doubly linked list?",
            "o": [
              "ArrayList",
              "LinkedList",
              "Vector",
              "Stack"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`java.util.LinkedList` implements `List` and `Deque` using a doubly-linked list."
          },
          {
            "q": "What is the default initial capacity of an `ArrayList` in Java?",
            "o": [
              "0",
              "10",
              "16",
              "32"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "When elements are first added, `ArrayList` defaults to an initial capacity of 10."
          },
          {
            "q": "How does `ArrayList` expand its capacity when full?",
            "o": [
              "Doubles size (100% growth)",
              "Grows by approximately 50% (`newCapacity = oldCapacity + (oldCapacity >> 1)`)",
              "Adds 10 elements",
              "Allocates linked node"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Java's `ArrayList` expands by 50% of its current size (`oldCapacity >> 1`)."
          },
          {
            "q": "What data structure does `HashSet` use internally in Java?",
            "o": [
              "A binary search tree",
              "A `HashMap` instance where elements are stored as keys",
              "A dynamic array",
              "A linked list"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`HashSet` wraps a private `HashMap` instance, storing elements as keys with a dummy object value."
          },
          {
            "q": "What is the difference between `Comparable` and `Comparator` in Java?",
            "o": [
              "Comparable defines natural ordering via compareTo(); Comparator defines custom sorting via compare()",
              "Comparable is in java.util",
              "Comparator is for primitives only",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Comparable` gives an object its intrinsic ordering, whereas `Comparator` provides external sorting strategies."
          },
          {
            "q": "What is the time complexity of lookup in a `TreeSet`?",
            "o": [
              "O(1)",
              "O(log n)",
              "O(n)",
              "O(n log n)"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`TreeSet` uses a Red-Black Tree internally, ensuring O(log n) time complexity for basic operations."
          },
          {
            "q": "Can a `HashMap` contain `null` keys and values in Java?",
            "o": [
              "No, throws NullPointerException",
              "Yes, allows one null key and multiple null values",
              "Allows null values but not null keys",
              "Only in Java 17+"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`HashMap` permits a single `null` key (stored in bucket 0) and multiple `null` values."
          },
          {
            "q": "Does `ConcurrentHashMap` allow `null` keys or values in Java?",
            "o": [
              "Yes, just like HashMap",
              "No, neither null keys nor null values are allowed in ConcurrentHashMap",
              "Only null values",
              "Only null keys"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`ConcurrentHashMap` strictly prohibits null keys and values to prevent ambiguity in concurrent map lookups."
          },
          {
            "q": "What is the difference between `fail-fast` and `fail-safe` iterators in Java?",
            "o": [
              "Fail-fast throws ConcurrentModificationException on modification; fail-safe iterates over a copy without throwing",
              "Fail-safe is deprecated",
              "Fail-fast is slower",
              "No difference"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Fail-fast iterators detect structural changes and abort; fail-safe iterators (e.g. `CopyOnWriteArrayList`) iterate over snapshot copies."
          },
          {
            "q": "Which queue implementation provides FIFO ordering using heap array?",
            "o": [
              "LinkedList",
              "ArrayDeque",
              "PriorityQueue",
              "Stack"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`ArrayDeque` implements a resizable circular array, typically outperforming `LinkedList` as a queue or stack."
          },
          {
            "q": "What does `Collections.unmodifiableList(list)` return?",
            "o": [
              "A thread-safe list",
              "An unmodifiable view of the specified list (throws UnsupportedOperationException on write)",
              "A deep clone",
              "A frozen array"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Unmodifiable wrappers throw `UnsupportedOperationException` if modification methods like `add()` or `remove()` are called."
          },
          {
            "q": "What does the contract between `equals()` and `hashCode()` require in Java?",
            "o": [
              "If `a.equals(b)` is true, `a.hashCode()` must equal `b.hashCode()`",
              "Equal hash codes mean objects must be equal",
              "Hash codes must be unique",
              "Objects must be immutable"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "If two objects are equal according to `equals()`, they MUST produce the identical `hashCode()`."
          },
          {
            "q": "Which Collection class maintains insertion order while offering O(1) hash lookups?",
            "o": [
              "HashMap",
              "LinkedHashMap",
              "TreeMap",
              "Hashtable"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`LinkedHashMap` maintains a doubly-linked list through all its entries, preserving insertion order."
          }
        ]
      },
      "multithreading": {
        "id": "multithreading",
        "name": "Multithreading",
        "icon": "⚡",
        "desc": "Thread class, Runnable, synchronized, and concurrency utilities.",
        "questions": [
          {
            "q": "Which method starts execution of a thread in Java?",
            "o": [
              "run()",
              "start()",
              "execute()",
              "init()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`start()` creates a new operating system thread and then invokes `run()`."
          },
          {
            "q": "What functional interface can be implemented to create a task for a Thread?",
            "o": [
              "Callable",
              "Runnable",
              "Threadable",
              "Process"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Runnable` has a single `public void run()` method and is commonly passed to `Thread`."
          },
          {
            "q": "Which keyword prevents concurrent access to a critical section of code?",
            "o": [
              "volatile",
              "synchronized",
              "atomic",
              "locked"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`synchronized` acquires an intrinsic lock on an object to guarantee mutual exclusion."
          },
          {
            "q": "What is the state of a thread waiting for another thread to release a lock?",
            "o": [
              "TIMED_WAITING",
              "BLOCKED",
              "RUNNABLE",
              "TERMINATED"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A thread waiting to enter a synchronized block or method is in the `BLOCKED` state."
          },
          {
            "q": "What is the difference between `wait()` and `sleep()` in Java?",
            "o": [
              "`wait()` releases the object lock; `sleep()` holds the lock while sleeping",
              "`sleep()` releases the lock",
              "`wait()` is in Thread class",
              "No difference"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`Object.wait()` releases monitor ownership until notified; `Thread.sleep()` pauses execution without relinquishing locks."
          },
          {
            "q": "Where are `wait()`, `notify()`, and `notifyAll()` declared in Java?",
            "o": [
              "java.lang.Thread",
              "java.lang.Object",
              "java.lang.Runnable",
              "java.util.concurrent.Lock"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "These methods are declared in `java.lang.Object` because monitor locks belong to objects, not threads."
          },
          {
            "q": "What is the purpose of the `volatile` keyword in Java multithreading?",
            "o": [
              "Guarantees atomic transactions",
              "Ensures visibility of variable changes across threads by reading directly from main memory",
              "Prevents garbage collection",
              "Locks the object"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`volatile` ensures that reads and writes go directly to main memory, preventing thread-local CPU caching inconsistencies."
          },
          {
            "q": "What is a deadlock in Java?",
            "o": [
              "A thread running forever",
              "A situation where two or more threads are blocked forever, each waiting for a lock held by the other",
              "A JVM crash",
              "A thread starvation"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Deadlock occurs when thread A holds Lock 1 waiting for Lock 2, while thread B holds Lock 2 waiting for Lock 1."
          },
          {
            "q": "Which package introduced high-level concurrency utilities like ExecutorService, CountDownLatch, and Semaphore in Java 5?",
            "o": [
              "java.lang.concurrent",
              "java.util.concurrent",
              "java.io.threads",
              "javax.concurrent"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`java.util.concurrent` (Doug Lea's JSR 166) introduced modern concurrency primitives."
          },
          {
            "q": "What is the difference between `Callable` and `Runnable` in Java?",
            "o": [
              "Callable can return a value and throw checked exceptions; Runnable cannot",
              "Runnable is for multithreading only",
              "Callable is deprecated",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Callable<V>` returns a result `V` and can throw checked exceptions via `call()`, whereas `Runnable.run()` returns void."
          },
          {
            "q": "What is a `daemon` thread in Java?",
            "o": [
              "A thread with maximum priority",
              "A background thread that does not prevent the JVM from exiting when all user threads finish",
              "A thread that cannot be stopped",
              "A thread running native code"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Daemon threads provide background services (e.g. GC); the JVM terminates automatically when only daemon threads remain."
          },
          {
            "q": "What is `ThreadLocal` used for in Java?",
            "o": [
              "Sharing variables across threads",
              "Providing thread-isolated copies of a variable dedicated to the current thread",
              "Locking thread execution",
              "Tracking CPU cores"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`ThreadLocal` allocates independent variable instances per thread, avoiding synchronization overhead."
          },
          {
            "q": "What does the `join()` method do when called on a Thread instance?",
            "o": [
              "Merges two threads",
              "Causes the current thread to pause execution until the target thread finishes",
              "Terminates the target thread",
              "Changes thread priority"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`t.join()` waits for thread `t` to terminate before continuing."
          },
          {
            "q": "What are Virtual Threads introduced in Java 21 (Project Loom)?",
            "o": [
              "Threads emulated by browser",
              "Lightweight threads managed by the JVM that dramatically increase throughput for I/O-heavy applications",
              "GPU threads",
              "Process threads"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Virtual threads are lightweight, user-mode threads scheduled by the JVM on carrier OS threads."
          },
          {
            "q": "What is an `AtomicInteger` in `java.util.concurrent.atomic`?",
            "o": [
              "A constant int",
              "A thread-safe integer providing lock-free atomic operations via hardware Compare-And-Swap (CAS)",
              "A 128-bit integer",
              "An encrypted integer"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`AtomicInteger` uses lock-free hardware CAS instructions (`compareAndSet`) to perform atomic increments and updates."
          },
          {
            "q": "What does `CompletableFuture` enable in Java 8+?",
            "o": [
              "Non-blocking asynchronous reactive programming and pipeline composition",
              "Synchronous blocking IO",
              "Memory management",
              "Thread termination"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`CompletableFuture` represents future asynchronous computation pipelines with callbacks like `thenApply` and `thenCompose`."
          }
        ]
      }
    }
  },
  "python": {
    "id": "python",
    "name": "Python",
    "icon": "🐍",
    "category": "scripting",
    "description": "High-level, dynamically typed language known for clarity, versatility, and rich ecosystems.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Python Basics",
        "icon": "🔰",
        "desc": "Indentation, comments, dynamic typing, and the Python interpreter.",
        "questions": [
          {
            "q": "How does Python delimit blocks of code?",
            "o": [
              "Curly braces `{}`",
              "Indentation (whitespace)",
              "Begin/End keywords",
              "Semicolons `;`"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python enforces clean structure through consistent whitespace indentation."
          },
          {
            "q": "Which symbol denotes a single-line comment in Python?",
            "o": [
              "//",
              "/*",
              "#",
              "--"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "The hash `#` character starts a single-line comment."
          },
          {
            "q": "What function outputs text to the standard console in Python?",
            "o": [
              "echo()",
              "console.log()",
              "print()",
              "printf()"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`print()` is Python's built-in function to display output to the terminal."
          },
          {
            "q": "Is Python a statically typed or dynamically typed language?",
            "o": [
              "Statically typed",
              "Dynamically typed",
              "Assembly typed",
              "Strongly untyped"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python is dynamically typed; variable types are resolved at runtime."
          },
          {
            "q": "Who created the Python programming language and in what year was it first released?",
            "o": [
              "Guido van Rossum (1991)",
              "Brendan Eich (1995)",
              "Bjarne Stroustrup (1985)",
              "James Gosling (1995)"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Python was conceived in late 1980s by Guido van Rossum and first released in 1991."
          },
          {
            "q": "What PEP document outlines the official Python Style Guide?",
            "o": [
              "PEP 8",
              "PEP 20",
              "PEP 257",
              "PEP 484"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "PEP 8 is the definitive Style Guide for Python Code."
          },
          {
            "q": "What command displays 'The Zen of Python' in an interactive interpreter?",
            "o": [
              "import zen",
              "import this",
              "help('zen')",
              "python --zen"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`import this` outputs Tim Peters' 19 guiding design aphorisms known as The Zen of Python."
          },
          {
            "q": "Is Python statically typed or dynamically typed?",
            "o": [
              "Statically typed",
              "Dynamically typed (variable types are resolved at runtime)",
              "Weakly typed like assembly",
              "Untyped"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python is dynamically typed and strongly typed (type errors are strictly enforced at runtime)."
          },
          {
            "q": "What is the Global Interpreter Lock (GIL) in CPython?",
            "o": [
              "A database lock",
              "A mutex that protects access to Python objects, preventing multiple native threads from executing bytecode simultaneously",
              "A file lock for scripts",
              "A security sandbox"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "CPython's GIL prevents multi-core parallelism for CPU-bound threads within a single process."
          },
          {
            "q": "What does the `pass` statement do in Python?",
            "o": [
              "Exits the program",
              "A null statement used as a syntactical placeholder where code is required",
              "Passes arguments to function",
              "Skips to next loop iteration"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`pass` is a no-op placeholder when syntax requires a statement block but no action is needed."
          },
          {
            "q": "What function outputs documentation and attributes of an object in Python?",
            "o": [
              "dir() and help()",
              "info()",
              "inspect()",
              "show()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`dir(obj)` lists valid attributes, and `help(obj)` opens interactive documentation."
          },
          {
            "q": "How are code blocks demarcated in Python syntax?",
            "o": [
              "Curly braces { }",
              "Indentation (typically 4 spaces)",
              "begin ... end keywords",
              "Parentheses ( )"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python uses indentation (leading whitespace) to determine grouping of statements."
          },
          {
            "q": "What does the `__name__ == '__main__'` idiom signify in Python scripts?",
            "o": [
              "Checks if script is running in main thread",
              "Determines whether the module is being run as the top-level script or imported elsewhere",
              "Checks if user is root/admin",
              "Checks if Python version is 3"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "When executed directly, Python sets `__name__` to `'__main__'`; when imported, it is the module's name."
          },
          {
            "q": "What is bytecode in Python?",
            "o": [
              "Machine code executed directly by CPU",
              "Low-level platform-independent intermediate representation (.pyc) executed by the Python Virtual Machine",
              "JavaScript code",
              "Source code comments"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Python compiles `.py` source files into bytecode `.pyc` files cached in `__pycache__` for the PVM."
          },
          {
            "q": "What built-in function returns the unique identity/memory address of an object?",
            "o": [
              "id()",
              "address()",
              "hash()",
              "ref()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`id(obj)` returns an integer representing the object's identity, which is its memory address in CPython."
          },
          {
            "q": "What is the difference between `==` and `is` in Python?",
            "o": [
              "`==` tests value equality; `is` tests object identity (same memory reference)",
              "`is` tests value equality",
              "No difference",
              "`==` is deprecated"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`a == b` checks if values are equivalent; `a is b` checks if both references point to the exact same object in memory."
          },
          {
            "q": "What is garbage collection in CPython primarily based on?",
            "o": [
              "Reference counting augmented by a cyclic garbage collector",
              "Manual pointer free",
              "Stop-the-world tracing only",
              "Rust borrow checker"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "CPython uses reference counting as its primary GC mechanism, with a generational cycle detector for circular refs."
          }
        ]
      },
      "variables": {
        "id": "variables",
        "name": "Variables & Types",
        "icon": "📦",
        "desc": "int, float, bool, str, NoneType, and type conversion.",
        "questions": [
          {
            "q": "What is the type of the value `None` in Python?",
            "o": [
              "void",
              "null",
              "NoneType",
              "undefined"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "In Python, `None` is an instance of `NoneType`."
          },
          {
            "q": "What is the result of `type(3.14)` in Python?",
            "o": [
              "<class 'double'>",
              "<class 'float'>",
              "<class 'real'>",
              "<class 'decimal'>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python represents standard floating-point numbers as `<class 'float'>`."
          },
          {
            "q": "What will `int('42')` produce in Python?",
            "o": [
              "Integer 42",
              "String '42'",
              "Float 42.0",
              "ValueError"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`int()` parses a numeric string into an integer."
          },
          {
            "q": "Are variables in Python variables or object references?",
            "o": [
              "Variables store raw values directly on CPU registers",
              "Variables are names (references/labels) bound to objects in memory",
              "Variables are pointers like C pointers",
              "Variables are static memory slots"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In Python, variables are names referencing objects in heap memory. Assignment binds a name to an object."
          },
          {
            "q": "Which of the following data types is mutable in Python?",
            "o": [
              "tuple",
              "str",
              "list",
              "int"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Lists, dicts, and sets are mutable. Integers, floats, strings, and tuples are immutable."
          },
          {
            "q": "How do you swap values of two variables `a` and `b` in Python without a temp variable?",
            "o": [
              "a, b = b, a",
              "swap(a, b)",
              "a = b; b = a",
              "a.swap(b)"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Tuple packing and unpacking allows concise simultaneous assignment `a, b = b, a`."
          },
          {
            "q": "What is the type of variable `x` if `x = (5,)`?",
            "o": [
              "int",
              "tuple",
              "set",
              "list"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A single element followed by a comma inside parentheses creates a 1-tuple `(5,)`."
          },
          {
            "q": "What does the `global` keyword do inside a Python function?",
            "o": [
              "Makes the function globally accessible",
              "Declares that assignments to the variable modify the module-level global variable rather than creating a local one",
              "Exports variable to JSON",
              "Makes variable thread-safe"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`global x` allows modifying a module-scope variable from within an inner function scope."
          },
          {
            "q": "What does the `nonlocal` keyword do in nested Python functions?",
            "o": [
              "Declares variable as global",
              "Declares that the identifier refers to a variable in the nearest enclosing (outer) non-global scope",
              "Imports variable from another file",
              "Disables variable modification"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`nonlocal` allows modifying variables in enclosing function scopes (closures) without making them module globals."
          },
          {
            "q": "What is Python's scoping rule order commonly abbreviated as?",
            "o": [
              "FIFO",
              "LEGB (Local, Enclosing, Global, Built-in)",
              "LIFO",
              "SOLID"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Names are resolved in LEGB order: Local scope, Enclosing scope, Global scope, Built-in namespace."
          },
          {
            "q": "What happens when you assign a list to another variable: `b = a`?",
            "o": [
              "Creates a deep independent copy",
              "Both variables refer to the exact same list object in memory",
              "Throws TypeError",
              "Creates a read-only view"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`b = a` copies the reference, not the underlying list. Modifying `b` will mutate `a`."
          },
          {
            "q": "How do you create a shallow copy of a list `a` in Python?",
            "o": [
              "a.copy() or a[:]",
              "copy(a)",
              "clone(a)",
              "a.shallow()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`a.copy()` or slicing `a[:]` creates a new shallow list containing references to the original items."
          },
          {
            "q": "What module provides deep copying of arbitrary nested objects in Python?",
            "o": [
              "clone",
              "copy (using copy.deepcopy())",
              "pickle",
              "json"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The `copy` module provides `copy.deepcopy()` to recursively copy nested data structures."
          },
          {
            "q": "What is variable type annotation syntax introduced in PEP 484?",
            "o": [
              "`x: int = 5`",
              "`int x = 5`",
              "`x = 5 as int`",
              "`x -> int = 5`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`x: int = 5` adds type hints checked by static analysis tools like mypy, without altering runtime behavior."
          },
          {
            "q": "What does `del var_name` do in Python?",
            "o": [
              "Deletes the object immediately from RAM",
              "Unbinds the name from the object in current namespace and decrements the object's reference count",
              "Sets var to None",
              "Deletes variable type"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`del` deletes the reference name binding; if the object's reference count hits 0, it becomes eligible for GC."
          },
          {
            "q": "What are Python variable naming conventions for constants per PEP 8?",
            "o": [
              "camelCase",
              "ALL_CAPS_WITH_UNDERSCORES",
              "snake_case",
              "PascalCase"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Constants are written in uppercase with underscores separating words (e.g., `MAX_RETRIES = 5`)."
          },
          {
            "q": "Can a Python variable name start with a number (e.g. `1x = 10`)?",
            "o": [
              "Yes",
              "No, variable names must begin with a letter or an underscore `_`",
              "Only in functions",
              "Only with floats"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python identifiers cannot start with digits; they must begin with ASCII letters or underscores."
          }
        ]
      },
      "operators": {
        "id": "operators",
        "name": "Operators",
        "icon": "➕",
        "desc": "Floor division, exponentiation, identity (is), and membership (in).",
        "questions": [
          {
            "q": "Which operator performs floor division in Python?",
            "o": [
              "/",
              "//",
              "%",
              "div"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`//` rounds down the division quotient to the nearest integer."
          },
          {
            "q": "Which operator is used to raise a number to a power in Python?",
            "o": [
              "^",
              "**",
              "^^",
              "pow"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`**` is the exponentiation operator (e.g. `2 ** 3 == 8`)."
          },
          {
            "q": "What does `a is b` check in Python?",
            "o": [
              "Value equality",
              "Object identity (same memory address)",
              "Type compatibility",
              "Subset relationship"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`is` checks if two references point to the exact same object in memory (`id(a) == id(b)`)."
          },
          {
            "q": "What does the floor division operator `//` do in Python?",
            "o": [
              "Calculates floating division",
              "Divides and rounds result down to nearest mathematical integer",
              "Calculates modulo",
              "Rounds up to ceiling"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`7 // 2` yields `3`, and `-7 // 2` rounds down to `-4`."
          },
          {
            "q": "What is the result of `10 % 3` vs `-10 % 3` in Python?",
            "o": [
              "1 and 2",
              "1 and -1",
              "1 and 0",
              "3 and -3"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "In Python, modulo follows the sign of the divisor: `-10 % 3 = 2` because `-10 = (-4 * 3) + 2`."
          },
          {
            "q": "What operator is used for exponentiation in Python?",
            "o": [
              "^",
              "**",
              "pow",
              "^^"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`2 ** 3` evaluates to 8. The `^` operator is bitwise XOR in Python."
          },
          {
            "q": "What does the walrus operator `:=` introduced in Python 3.8 do?",
            "o": [
              "Assignment expression that assigns values to variables as part of an expression",
              "Bitwise comparison",
              "Type definition",
              "Pattern matching"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`if (n := len(items)) > 10:` assigns `len(items)` to `n` and tests the condition in a single expression."
          },
          {
            "q": "What does chaining comparison operators like `1 < x < 10` mean in Python?",
            "o": [
              "Evaluates `(1 < x) < 10` converting boolean to int",
              "Evaluates `1 < x and x < 10` with short-circuiting",
              "SyntaxError",
              "Bitwise AND comparison"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Python natively supports chained comparisons equivalent to `1 < x and x < 10` where `x` is evaluated once."
          },
          {
            "q": "What is the result of `'cat' and 'dog'` vs `'cat' or 'dog'`?",
            "o": [
              "'dog' and 'cat'",
              "'cat' and 'dog'",
              "True and True",
              "'cat' and 'cat'"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`and` returns the first falsy operand or the last operand ('dog'). `or` returns the first truthy operand ('cat')."
          },
          {
            "q": "What does the bitwise NOT operator `~` calculate for an integer `x` in Python?",
            "o": [
              "-x",
              "-(x + 1)",
              "1 / x",
              "abs(x)"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In two's complement arithmetic, `~x` equals `-(x + 1)`. For example, `~5` is `-6`."
          },
          {
            "q": "What does the matrix multiplication operator `@` do in Python 3.5+?",
            "o": [
              "Decorator definition",
              "Calls `__matmul__` method for matrix multiplication (used by NumPy)",
              "Calculates dot product of scalars",
              "Creates lambda"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`@` invokes `__matmul__`, providing native operator syntax for linear algebra matrix multiplications."
          },
          {
            "q": "What does the `in` operator test in Python sequences?",
            "o": [
              "Checks if an item is a member of a sequence or collection",
              "Checks index bounds",
              "Imports modules",
              "Checks object identity"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`'a' in 'apple'` tests for containment and returns a Boolean."
          },
          {
            "q": "What operator precedence applies to `not`, `and`, and `or` in Python?",
            "o": [
              "or > and > not",
              "not > and > or",
              "Left to right equality",
              "and > not > or"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Logical NOT has highest precedence, followed by AND, and then OR."
          },
          {
            "q": "What does the identity operator `is not` test?",
            "o": [
              "Checks that two variables do not reference the exact same object in memory",
              "Checks inequality of values",
              "Checks different data types",
              "None of the above"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`a is not b` evaluates to `True` if `id(a) != id(b)`."
          },
          {
            "q": "What does `[1, 2] + [3, 4]` produce?",
            "o": [
              "`[4, 6]`",
              "`[1, 2, 3, 4]` (concatenation)",
              "`[[1, 2], [3, 4]]`",
              "TypeError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Applying `+` between two lists concatenates them into a new combined list."
          },
          {
            "q": "What does `['a'] * 3` evaluate to?",
            "o": [
              "`['a', 'a', 'a']`",
              "`['aaa']`",
              "`3a`",
              "TypeError"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Multiplying a sequence by an integer repeats its elements."
          },
          {
            "q": "What is the danger of `[[0] * 3] * 3` in Python?",
            "o": [
              "Creates an immutable array",
              "All 3 rows reference the exact same inner list; modifying one row mutates all rows",
              "Memory overflow",
              "Syntax error"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "List multiplication duplicates references. Modifying row 0 modifies all rows because they share the same list instance."
          }
        ]
      },
      "control_flow": {
        "id": "control_flow",
        "name": "Control Flow",
        "icon": "🔀",
        "desc": "if, elif, else, and ternary conditional expressions.",
        "questions": [
          {
            "q": "What keyword is used for 'else if' in Python?",
            "o": [
              "elseif",
              "else if",
              "elif",
              "elsif"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Python uses `elif` as shorthand for 'else if'."
          },
          {
            "q": "How is a ternary operator written in Python?",
            "o": [
              "x ? a : b",
              "a if x else b",
              "if x then a else b",
              "choose(x, a, b)"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python's conditional expression syntax is `result = a if condition else b`."
          },
          {
            "q": "How is an `else-if` condition written in Python?",
            "o": [
              "else if",
              "elseif",
              "elif",
              "elsif"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Python uses the concise keyword `elif` for chained conditional checks."
          },
          {
            "q": "What is the syntax for a ternary conditional expression in Python?",
            "o": [
              "`condition ? a : b`",
              "`a if condition else b`",
              "`if condition then a else b`",
              "`a ? condition : b`"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python's ternary operator syntax is `value_if_true if condition else value_if_false`."
          },
          {
            "q": "What feature was introduced in Python 3.10 for structural pattern matching?",
            "o": [
              "switch ... case",
              "match ... case",
              "pattern ... when",
              "select ... case"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Python 3.10 introduced `match ... case` for powerful structural pattern matching with guard clauses."
          },
          {
            "q": "What does a wildcard case `case _:` represent in Python `match` statements?",
            "o": [
              "Default / fallback pattern that matches any value",
              "Ignored error",
              "Matches null only",
              "Regex pattern"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The underscore `case _:` acts as the wildcard catch-all branch matching any subject value."
          },
          {
            "q": "Can guard clauses be attached to `case` statements in Python pattern matching?",
            "o": [
              "No, conditions cannot be attached",
              "Yes, using `case pattern if condition:`",
              "Only using while loops",
              "Only with boolean flags"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`case [x, y] if x == y:` applies an arbitrary Boolean guard check to the matched pattern."
          },
          {
            "q": "What values are considered falsy in Python boolean evaluation?",
            "o": [
              "None, False, 0, 0.0, empty sequences (`''`, `()`, `[]`), empty mappings (`{}`) and sets",
              "Only False and 0",
              "Only None",
              "All negative numbers"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Any empty collection or numeric zero is inherently evaluated as falsy in Python conditionals."
          },
          {
            "q": "Does Python have a `switch` statement in Python versions prior to 3.10?",
            "o": [
              "Yes, switch keyword",
              "No, dictionary dispatch or if-elif-else chains were conventionally used",
              "Yes, select keyword",
              "Yes, choose keyword"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Prior to Python 3.10's `match ... case`, developers used `if-elif-else` chains or dictionaries of callables."
          },
          {
            "q": "What does `any(iterable)` return?",
            "o": [
              "True if at least one element of the iterable is truthy; False if empty or all falsy",
              "True only if all are truthy",
              "Count of truthy items",
              "First truthy value"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`any([False, True, False])` returns `True`. If the iterable is empty, `any()` returns `False`."
          },
          {
            "q": "What does `all(iterable)` return for an empty list `all([])`?",
            "o": [
              "False",
              "True (vacuous truth)",
              "None",
              "ValueError"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`all()` checks if no elements are false. For an empty collection, it vacuously evaluates to `True`."
          },
          {
            "q": "What is short-circuit evaluation in Python conditionals?",
            "o": [
              "Halting program when syntax fails",
              "Stopping evaluation of boolean expressions as soon as the outcome is definitively determined",
              "Fast CPU branching",
              "Evaluating both operands in parallel"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In `A and B`, if `A` is false, `B` is never evaluated; in `A or B`, if `A` is true, `B` is skipped."
          },
          {
            "q": "Can multiple conditions be combined in a Python `if` statement?",
            "o": [
              "Only using nested if statements",
              "Yes, using logical keywords `and`, `or`, and `not`",
              "Only using commas",
              "Only with bitwise operators"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Logical keywords `and`, `or`, and `not` chain multiple conditions cleanly."
          },
          {
            "q": "What happens if no branch matches in `match ... case` without a wildcard `case _`?",
            "o": [
              "Raises MatchError",
              "Execution silently passes through with no error",
              "Terminates program",
              "Assigns None to subject"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "If no pattern matches and no wildcard `case _` is present, the match statement completes without action."
          },
          {
            "q": "What does `if item in collection:` execute under the hood for a custom class?",
            "o": [
              "Calls `__contains__()` method or falls back to iteration via `__iter__()` / `__getitem__()`",
              "Calls `equals()`",
              "Checks memory address",
              "Throws error"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Python checks `__contains__`, then falls back to testing elements via `__iter__` or sequence protocol."
          },
          {
            "q": "What is an assertion in Python (`assert condition, 'error message'`)?",
            "o": [
              "A comment",
              "A debugging check that raises `AssertionError` if condition evaluates to False",
              "A type definition",
              "A performance profiler"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`assert expr, msg` raises `AssertionError(msg)` if `expr` is falsy (disabled with `-O` flag)."
          }
        ]
      },
      "loops": {
        "id": "loops",
        "name": "Loops",
        "icon": "🔁",
        "desc": "for-in, while, range(), and the unique for-else clause.",
        "questions": [
          {
            "q": "What does `range(2, 6)` produce?",
            "o": [
              "[2, 3, 4, 5, 6]",
              "[2, 3, 4, 5]",
              "[3, 4, 5]",
              "[2, 4, 6]"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`range(start, stop)` produces values from `start` up to but not including `stop` (2, 3, 4, 5)."
          },
          {
            "q": "When does an `else` clause attached to a `for` loop execute in Python?",
            "o": [
              "Every iteration",
              "When the loop completes normally without encountering a `break`",
              "Only if the loop raised an exception",
              "Never"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The `else` block of a loop runs when the iterable is exhausted without a `break` being hit."
          },
          {
            "q": "What does the `else` clause on a `for` or `while` loop do in Python?",
            "o": [
              "Executes if the loop is terminated by a `break` statement",
              "Executes only if the loop finishes naturally without encountering a `break`",
              "Executes on every iteration",
              "Executes on syntax error"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The loop `else` block executes when the iterable is exhausted or while condition becomes false, but NOT if broken by `break`."
          },
          {
            "q": "What does `enumerate(iterable, start=0)` provide in a `for` loop?",
            "o": [
              "Pairs of `(index, item)` for each element in the sequence",
              "Sorted sequence items",
              "Reversed loop order",
              "Count of total items"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`for i, val in enumerate(my_list):` yields the running index alongside each value."
          },
          {
            "q": "What does `zip(seq1, seq2)` do when iterating in Python?",
            "o": [
              "Compresses sequences to zip format",
              "Pairs elements from multiple iterables element-wise into tuples",
              "Concatenates sequences",
              "Finds common elements"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`zip(['a', 'b'], [1, 2])` yields `('a', 1)` and `('b', 2)` in lockstep."
          },
          {
            "q": "What does `itertools.zip_longest()` do when input sequences have unequal lengths?",
            "o": [
              "Truncates to shortest sequence",
              "Fills missing values with a designated `fillvalue` (default None) until longest sequence finishes",
              "Raises IndexError",
              "Repeats shortest list"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Unlike standard `zip()` which stops at the shortest iterable, `zip_longest()` continues until the longest finishes."
          },
          {
            "q": "What does the `continue` statement do inside a loop body?",
            "o": [
              "Terminates the loop completely",
              "Skips the rest of the current iteration and jumps to the next cycle",
              "Restarts the loop from index 0",
              "Pauses execution for 1 second"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`continue` immediately skips the remaining lines of the current loop iteration."
          },
          {
            "q": "What does `range(1, 10, 2)` generate in Python 3?",
            "o": [
              "1, 2, 3, 4, 5, 6, 7, 8, 9",
              "1, 3, 5, 7, 9 (start 1, stop 10 exclusive, step 2)",
              "2, 4, 6, 8, 10",
              "1, 10, 2"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`range(start, stop, step)` generates integers starting at 1, increasing by 2 up to, but not including, 10."
          },
          {
            "q": "Does `range()` in Python 3 allocate all numbers in memory at once?",
            "o": [
              "Yes, creates a full list",
              "No, it returns a lazy sequence object that computes elements on demand in O(1) memory",
              "Allocates array buffer",
              "Only if length > 1000"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`range` objects are memory-efficient lazy sequences calculating items on the fly regardless of range size."
          },
          {
            "q": "How do you loop backwards over a list in Python cleanly?",
            "o": [
              "`for x in reversed(my_list):`",
              "`for x in my_list.backwards():`",
              "`for x in my_list[::-1].loop():`",
              "`for x in invert(my_list):`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`reversed(list)` yields items in reverse order without duplicating the entire list in memory."
          },
          {
            "q": "What is an infinite loop in Python and how is it typically written?",
            "o": [
              "`for ;;`",
              "`while True:`",
              "`loop forever:`",
              "`do while:`"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`while True:` continues looping indefinitely until an explicit `break`, `return`, or exception occurs."
          },
          {
            "q": "Can a `while` loop condition evaluate non-boolean expressions?",
            "o": [
              "No, strictly requires bool",
              "Yes, any expression is evaluated for truthiness per Python's truth value testing rules",
              "Only integers",
              "Only strings"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Expressions like `while my_list:` test truthiness (loops as long as `my_list` is non-empty)."
          },
          {
            "q": "What happens if a loop modifies the list it is actively iterating over (`for x in my_list: my_list.remove(x)`)?",
            "o": [
              "Safe execution",
              "Items are skipped or iterated unpredictably because internal indices shift",
              "Throws ConcurrentModificationException",
              "Freezes system"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Mutating a list while iterating over it shifts index positions, causing items to be skipped. Iterate over a slice copy `my_list[:]` instead."
          },
          {
            "q": "What module provides infinite iterators like `count()`, `cycle()`, and `repeat()`?",
            "o": [
              "collections",
              "itertools",
              "functools",
              "operator"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The `itertools` module provides efficient iterator building blocks including infinite generators."
          },
          {
            "q": "What does `itertools.cycle('AB')` do?",
            "o": [
              "Runs twice then stops",
              "Yields 'A', 'B', 'A', 'B', 'A' ... endlessly",
              "Throws StopIteration",
              "Reverses string"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`cycle(iterable)` loops over the elements of the iterable infinitely."
          },
          {
            "q": "What does `break` do in nested loops?",
            "o": [
              "Breaks out of all outer loops",
              "Terminates only the innermost enclosing loop",
              "Stops current function",
              "Pauses execution"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`break` only breaks the innermost loop in which it resides."
          }
        ]
      },
      "functions": {
        "id": "functions",
        "name": "Functions",
        "icon": "⚙️",
        "desc": "def, *args, **kwargs, lambda expressions, and decorators.",
        "questions": [
          {
            "q": "Which keyword defines a function in Python?",
            "o": [
              "function",
              "fn",
              "def",
              "lambda"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`def` is the keyword used to define functions in Python."
          },
          {
            "q": "What allows a function to accept an arbitrary number of keyword arguments?",
            "o": [
              "*args",
              "**kwargs",
              "&params",
              "$props"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`**kwargs` collects arbitrary keyword arguments into a dictionary."
          },
          {
            "q": "What is an anonymous, single-expression function called in Python?",
            "o": [
              "closure",
              "arrow function",
              "lambda function",
              "inline def"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Python creates anonymous functions using the `lambda` keyword."
          },
          {
            "q": "What keyword is used to define a function in Python?",
            "o": [
              "function",
              "func",
              "def",
              "fn"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Python functions are declared using the `def` keyword."
          },
          {
            "q": "What does `*args` syntax in a function parameter list allow?",
            "o": [
              "Passes pointers",
              "Collects arbitrary positional arguments into a tuple",
              "Multiplies arguments",
              "Requires keyword arguments"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`*args` captures any arbitrary number of positional arguments into a tuple."
          },
          {
            "q": "What does `**kwargs` syntax in a function parameter list allow?",
            "o": [
              "Keyword-only parameters",
              "Collects arbitrary keyword arguments into a dictionary",
              "Double pointer arguments",
              "Power exponent arguments"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`**kwargs` captures all keyword arguments passed to the function into a dictionary."
          },
          {
            "q": "What is a lambda function in Python?",
            "o": [
              "An anonymous, single-expression inline function",
              "A recursive function",
              "A high-performance C extension",
              "A multi-line closure"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`lambda x, y: x + y` creates an anonymous function limited syntactically to a single expression."
          },
          {
            "q": "What is a major pitfall of using mutable default arguments like `def append_to(item, target=[])`?",
            "o": [
              "SyntaxError",
              "The default list is instantiated once at function definition and shared across all subsequent calls",
              "List is wiped on each call",
              "Performance drop"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Default parameter values are evaluated once at function definition time, so mutable defaults retain state between calls."
          },
          {
            "q": "What is the recommended idiom for optional default list or dictionary parameters?",
            "o": [
              "`def fn(target=None): if target is None: target = []`",
              "`def fn(target=[]): pass`",
              "`def fn(target=list()): pass`",
              "`def fn(target=copy([])): pass`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Using `None` as default sentinel and initializing inside the function body ensures a fresh object every invocation."
          },
          {
            "q": "What is a decorator in Python?",
            "o": [
              "A GUI widget style",
              "A callable that takes a function as argument and returns an augmented function wrapper (`@decorator`)",
              "A CSS style sheet",
              "An HTML template tag"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Decorators wrap functions or methods using `@syntax` to add cross-cutting behavior like logging or auth."
          },
          {
            "q": "Why should `functools.wraps` be used inside custom decorator wrapper functions?",
            "o": [
              "Speeds up execution",
              "Preserves the original function's name (`__name__`), docstring (`__doc__`), and metadata",
              "Enables multithreading",
              "Prevents recursion"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`@functools.wraps(fn)` copies metadata from the original function to the inner wrapper function."
          },
          {
            "q": "What does the `yield` statement do in a Python function?",
            "o": [
              "Terminates function permanently",
              "Turns the function into a generator, pausing execution and returning a value to the caller until resumed",
              "Throws an exception",
              "Allocates memory buffer"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`yield` produces a value and suspends function state, resuming on the next `next()` call."
          },
          {
            "q": "What keyword specifies keyword-only arguments in Python 3?",
            "o": [
              "Using a bare asterisk `*` in the parameter list (e.g. `def fn(a, *, b):`)",
              "keyword keyword",
              "only keyword",
              "param keyword"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Any parameters placed after a bare `*` or `*args` must be supplied using keyword arguments."
          },
          {
            "q": "What does the `/` marker in a Python 3.8+ parameter list indicate?",
            "o": [
              "Division operation",
              "Parameters before `/` are positional-only arguments and cannot be passed by keyword",
              "Comments",
              "Optional parameters"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "In `def f(a, b, /, c):`, parameters `a` and `b` can only be passed positionally."
          },
          {
            "q": "What is a closure in Python?",
            "o": [
              "A function that has closed its file descriptors",
              "A nested function that retains access to variables from its enclosing lexical scope even after the outer scope has returned",
              "Private class method",
              "Terminated thread"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Closures capture variables from outer lexical scopes in their `__closure__` attribute."
          },
          {
            "q": "Are functions first-class citizens in Python?",
            "o": [
              "No, only classes are",
              "Yes, functions can be assigned to variables, passed as arguments, and returned from other functions",
              "Only lambda functions are",
              "Only static methods"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In Python, functions are first-class objects with full attribute support and passability."
          }
        ]
      },
      "lists": {
        "id": "lists",
        "name": "Lists & Tuples",
        "icon": "📋",
        "desc": "List slicing, mutability, list comprehensions, and tuples.",
        "questions": [
          {
            "q": "What is the main difference between a list and a tuple in Python?",
            "o": [
              "Lists are faster",
              "Lists are mutable, tuples are immutable",
              "Tuples cannot store strings",
              "Lists have fixed length"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Lists `[ ]` can be modified after creation; tuples `( )` are immutable."
          },
          {
            "q": "What does `arr[::-1]` do on a Python list?",
            "o": [
              "Clears the list",
              "Reverses the list",
              "Sorts the list",
              "Returns the first element"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A step of `-1` in slice syntax reverses the sequence."
          },
          {
            "q": "What is the output of `[x * 2 for x in [1, 2, 3]]`?",
            "o": [
              "[1, 2, 3, 1, 2, 3]",
              "[2, 4, 6]",
              "6",
              "[2, 2, 2]"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "This list comprehension multiplies every item in the list by 2."
          },
          {
            "q": "What method appends an element to the end of a Python list?",
            "o": [
              "push()",
              "append()",
              "insert()",
              "add()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`my_list.append(item)` adds a single element to the end of the list in amortized O(1) time."
          },
          {
            "q": "What is the difference between `list.append(x)` and `list.extend(x)`?",
            "o": [
              "`append()` adds x as a single element; `extend()` iterates over x appending each element individually",
              "No difference",
              "extend() only works on numbers",
              "append() is faster"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`[1].append([2, 3])` produces `[1, [2, 3]]`; `[1].extend([2, 3])` produces `[1, 2, 3]`."
          },
          {
            "q": "What does `list.pop()` do when called with no arguments?",
            "o": [
              "Removes and returns the first element",
              "Removes and returns the last element",
              "Clears the entire list",
              "Raises TypeError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`pop()` with default index `-1` removes and returns the final element in O(1) time."
          },
          {
            "q": "What is the time complexity of `list.insert(0, val)` or `list.pop(0)` in Python?",
            "o": [
              "O(1)",
              "O(n) because all subsequent elements must be shifted in contiguous memory",
              "O(log n)",
              "O(n^2)"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Python lists are dynamic arrays; inserting or popping at index 0 requires shifting all remaining elements, taking O(n) time."
          },
          {
            "q": "Which data structure from the `collections` module provides O(1) appends and pops from both ends?",
            "o": [
              "collections.deque",
              "collections.OrderedDict",
              "collections.namedtuple",
              "collections.heap"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`deque` (double-ended queue) supports O(1) appends and pops from both the left and right ends."
          },
          {
            "q": "What does list slicing `a[start:stop:step]` return if step is `-1` (`a[::-1]`)?",
            "o": [
              "Empty list",
              "A reversed copy of the list",
              "First and last elements",
              "Raises ValueError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A negative step `-1` traverses the list backwards, creating a reversed shallow copy."
          },
          {
            "q": "What is the difference between `list.sort()` and the built-in `sorted(list)`?",
            "o": [
              "`list.sort()` sorts in-place returning None; `sorted()` returns a new sorted list",
              "`sorted()` modifies the original list",
              "No difference",
              "list.sort() returns a list"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`.sort()` mutates the original list in-place; `sorted()` generates a fresh sorted list leaving original intact."
          },
          {
            "q": "What sorting algorithm is utilized by Python's `sort()` and `sorted()`?",
            "o": [
              "Quicksort",
              "Timsort (adaptive hybrid of merge sort and insertion sort)",
              "Heapsort",
              "Bubblesort"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Python uses Timsort, engineered by Tim Peters, which has O(n log n) worst-case and O(n) best-case performance."
          },
          {
            "q": "What does a list comprehension `[x**2 for x in range(5) if x % 2 == 0]` evaluate to?",
            "o": [
              "`[0, 4, 16]`",
              "`[1, 9]`",
              "`[0, 1, 4, 9, 16]`",
              "`[4, 16]`"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Even numbers in `range(5)` are 0, 2, 4; their squares are 0, 4, 16."
          },
          {
            "q": "What does `my_list.index(val)` do if `val` is not in the list?",
            "o": [
              "Returns -1",
              "Raises ValueError",
              "Returns None",
              "Returns len(my_list)"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Unlike JavaScript or Python strings `find()`, calling `.index()` on a missing element raises `ValueError`."
          },
          {
            "q": "How do you count the number of times an element occurs in a list?",
            "o": [
              "`my_list.count(element)`",
              "`my_list.occurrences(element)`",
              "`my_list.find_all(element)`",
              "`len(my_list, element)`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`my_list.count(x)` counts total occurrences of `x` in the list."
          },
          {
            "q": "What does `my_list.clear()` do?",
            "o": [
              "Deletes the variable",
              "Removes all items from the list in-place (equivalent to `del my_list[:]`)",
              "Fills list with zeros",
              "Sets reference to None"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`clear()` empties the list container in-place without reassigning the variable."
          },
          {
            "q": "Can a Python list contain elements of different data types?",
            "o": [
              "No, lists are strictly homogeneous arrays",
              "Yes, Python lists can store elements of any mixed data types",
              "Only if cast to Object",
              "Only ints and strings"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python lists are heterogeneous arrays capable of holding arbitrary object references simultaneously."
          }
        ]
      },
      "dictionaries": {
        "id": "dictionaries",
        "name": "Dictionaries & Sets",
        "icon": "📖",
        "desc": "Key-value mappings, set operations, and hashing.",
        "questions": [
          {
            "q": "How do you access the value of key `'age'` in `d = {'age': 25}` safely without raising a KeyError?",
            "o": [
              "d.fetch('age')",
              "d.get('age')",
              "d['age']",
              "d.find('age')"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`d.get('key')` returns `None` (or a fallback default) if the key is missing."
          },
          {
            "q": "Can a Python set contain duplicate values?",
            "o": [
              "Yes",
              "No, sets contain only unique elements",
              "Only if strings",
              "Depends on initialization"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Sets are unordered collections of unique elements."
          },
          {
            "q": "What is the time complexity of dictionary key lookup in Python on average?",
            "o": [
              "O(1)",
              "O(log n)",
              "O(n)",
              "O(n log n)"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Python dictionaries use hash tables, giving average O(1) time complexity for key lookups."
          },
          {
            "q": "What happens if you look up a non-existent key using bracket notation `d['missing']`?",
            "o": [
              "Returns None",
              "Raises KeyError",
              "Returns False",
              "Inserts key with None"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Direct bracket indexing on a missing key raises a `KeyError`; `.get()` should be used for safe lookup."
          },
          {
            "q": "How are sets represented in Python syntax?",
            "o": [
              "Curly braces with values `{1, 2, 3}`",
              "Square brackets `[1, 2, 3]`",
              "Parentheses `(1, 2, 3)`",
              "Angle brackets `<1, 2, 3>`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Sets use curly braces `{value, ...}`; an empty set must be instantiated using `set()`, as `{}` denotes a dict."
          },
          {
            "q": "What does the set union operator `|` do in Python?",
            "o": [
              "Finds common items (intersection)",
              "Combines all unique elements from both sets",
              "Finds difference",
              "Creates Cartesian product"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`a | b` or `a.union(b)` yields a new set containing all elements from both sets."
          },
          {
            "q": "What does `d.setdefault(key, default)` do?",
            "o": [
              "Overrides existing key value",
              "Returns value if key exists; otherwise inserts key with default value and returns it",
              "Clears dictionary",
              "Sets default dictionary size"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`setdefault()` is an atomic convenience method for setting defaults without explicit `if key not in d` checks."
          },
          {
            "q": "What is a `collections.defaultdict` in Python?",
            "o": [
              "A dictionary that accepts any data type",
              "A dictionary subclass that calls a factory function to provide default values for missing keys",
              "A frozen dictionary",
              "An ordered dictionary"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`defaultdict(list)` automatically initializes missing keys with empty lists upon access."
          },
          {
            "q": "What is `collections.Counter` used for?",
            "o": [
              "Counting loop iterations",
              "A dict subclass for counting hashable objects (multiset/frequency map)",
              "Counting lines of code",
              "Stopwatch timing"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Counter('banana')` creates a mapping of elements to their occurrence counts."
          },
          {
            "q": "Are Python dictionaries insertion-ordered in Python 3.7+?",
            "o": [
              "No, dictionaries are always unordered",
              "Yes, Python 3.7+ officially guarantees insertion order preservation",
              "Only OrderedDict is ordered",
              "Only integer keys"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Since Python 3.7, standard `dict` instances are guaranteed to preserve insertion order."
          },
          {
            "q": "What does `d1 | d2` do in Python 3.9+?",
            "o": [
              "Bitwise OR of hashes",
              "Merges two dictionaries into a new dictionary, with d2 values taking precedence",
              "Finds key intersection",
              "Syntax error"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Python 3.9 introduced the `|` operator for dictionary union/merge."
          },
          {
            "q": "What is a `frozenset` in Python?",
            "o": [
              "A set with cached hashes",
              "An immutable, hashable set that can be used as a dictionary key or in another set",
              "An empty set",
              "A sorted set"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`frozenset` is the immutable counterpart of `set`, making it eligible for hashing."
          },
          {
            "q": "What is dictionary comprehension syntax in Python?",
            "o": [
              "`{k: v for k, v in iterable}`",
              "`[k: v for k in iterable]`",
              "`dict(k, v)`",
              "`{k = v for k in iterable}`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`{x: x**2 for x in range(5)}` constructs a dictionary mapping numbers to their squares."
          },
          {
            "q": "What does `d.pop('key', default)` do?",
            "o": [
              "Removes and returns the value of 'key', or returns default if not found",
              "Pops the first key in the dict",
              "Returns key without removing",
              "Clears the dict"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`pop()` removes the key and returns its value safely."
          },
          {
            "q": "What must be true for an object to be used as a set element or dictionary key?",
            "o": [
              "Must be a string or int",
              "Must be hashable (`__hash__`) and comparable for equality (`__eq__`)",
              "Must be mutable",
              "Must inherit from KeyObject"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Hashable objects have a constant hash value during their lifetime and can be compared for equality."
          },
          {
            "q": "What does the `&` operator calculate between two sets?",
            "o": [
              "Union",
              "Intersection (common elements)",
              "Difference",
              "Symmetric difference"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`set1 & set2` computes the intersection of two sets."
          }
        ]
      },
      "strings": {
        "id": "strings",
        "name": "Strings",
        "icon": "🔤",
        "desc": "f-strings, string formatting, splitting, and join.",
        "questions": [
          {
            "q": "What prefix is used for formatted string literals introduced in Python 3.6?",
            "o": [
              "s\"...\"",
              "f\"...\"",
              "format\"...\"",
              "$\"...\""
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "f-strings (prefixed with `f` or `F`) allow expressions inside curly braces `{name}`."
          },
          {
            "q": "Which method joins elements of an iterable into a single string?",
            "o": [
              "concat()",
              "join()",
              "merge()",
              "append()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`\"delimiter\".join(iterable)` concatenates items with the given delimiter."
          },
          {
            "q": "Can Python strings be modified in-place using item assignment like `s[0] = 'H'`?",
            "o": [
              "Yes, strings are mutable",
              "No, Python strings are immutable and will raise a TypeError",
              "Only in byte arrays",
              "Only ASCII characters"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Strings in Python are strictly immutable; modifying a string creates a new string object."
          },
          {
            "q": "What method strips leading and trailing whitespace from a Python string?",
            "o": [
              "trim()",
              "strip()",
              "clean()",
              "cut()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`s.strip()` removes whitespace (or specified characters) from both ends of the string."
          },
          {
            "q": "What is the difference between `str.find()` and `str.index()` in Python?",
            "o": [
              "`find()` returns -1 if substring not found; `index()` raises ValueError",
              "No difference",
              "index() searches backwards",
              "find() is regex based"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`find()` returns -1 gracefully if not found, while `index()` raises `ValueError`."
          },
          {
            "q": "What does the `r\"...\"` prefix represent on a Python string literal?",
            "o": [
              "Regular expression",
              "Raw string where backslashes are treated as literal characters (no escape processing)",
              "Reverse string",
              "Read-only string"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Raw strings `r\"\\n\"` treat backslashes literally, commonly used for regex patterns and Windows filepaths."
          },
          {
            "q": "What does `b\"hello\"` represent in Python 3?",
            "o": [
              "Binary base64",
              "A `bytes` object (sequence of raw 8-bit bytes)",
              "A Boolean string",
              "Buffer string"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`bytes` objects represent sequences of raw byte values, distinct from Unicode `str` text."
          },
          {
            "q": "How do you convert a `bytes` object to a string in Python?",
            "o": [
              "b.decode('utf-8')",
              "b.encode('utf-8')",
              "str(b)",
              "b.toString()"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`bytes.decode()` converts bytes to a Unicode string using the specified encoding."
          },
          {
            "q": "What does `\"Python\".startswith((\"P\", \"J\"))` return?",
            "o": [
              "True (startswith accepts a tuple of prefixes)",
              "False",
              "TypeError: tuple not allowed",
              "None"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`startswith()` and `endswith()` conveniently accept a tuple of candidates to test multiple prefixes."
          },
          {
            "q": "What does `\"hello world\".title()` return?",
            "o": [
              "\"Hello World\"",
              "\"HELLO WORLD\"",
              "\"hello world\"",
              "\"Hello world\""
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`title()` capitalizes the first character of each word."
          },
          {
            "q": "What is string interpolation using `%` formatting called in Python?",
            "o": [
              "f-string",
              "printf-style string formatting",
              "Template strings",
              "Regex format"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`%s, %d` formatting is Python's legacy printf-style string formatting."
          },
          {
            "q": "What does `f\"{val:.2f}\"` format a floating point number to?",
            "o": [
              "2 significant digits",
              "Fixed 2 decimal places",
              "Binary 2-bit float",
              "Scientific notation"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`:.2f` specifies formatting with exactly two digits after the decimal point."
          },
          {
            "q": "What does `'ab,cd,ef'.split(',', 1)` produce?",
            "o": [
              "['ab', 'cd,ef']",
              "['ab', 'cd', 'ef']",
              "['ab']",
              "['cd,ef']"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "The `maxsplit` parameter limits the number of splits performed to 1, leaving the rest un-split."
          },
          {
            "q": "What does `str.partition(sep)` return in Python?",
            "o": [
              "A list of tokens",
              "A 3-tuple `(part_before, sep, part_after)`",
              "Two strings",
              "A dictionary"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`partition()` splits a string at the first occurrence of separator and returns a 3-tuple."
          },
          {
            "q": "What encoding is used by default for Python 3 source code files?",
            "o": [
              "ASCII",
              "UTF-8",
              "ISO-8859-1",
              "UTF-16"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "PEP 3120 set UTF-8 as the default source encoding for Python 3."
          },
          {
            "q": "What does `ord('A')` and `chr(65)` demonstrate in Python?",
            "o": [
              "Conversion between character and its Unicode codepoint integer",
              "Binary encoding",
              "Bit shift",
              "Hex formatting"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`ord()` returns the Unicode integer; `chr()` converts the integer codepoint back to a character."
          }
        ]
      },
      "oop": {
        "id": "oop",
        "name": "OOP in Python",
        "icon": "🧩",
        "desc": "Classes, self, __init__, inheritance, and dunder methods.",
        "questions": [
          {
            "q": "What is the constructor method in a Python class?",
            "o": [
              "__new__",
              "__init__",
              "constructor()",
              "__create__"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`__init__` initializes newly created class instances."
          },
          {
            "q": "What does the `self` parameter represent in an instance method?",
            "o": [
              "The class object itself",
              "The current instance of the class",
              "The parent module",
              "The global namespace"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`self` represents the specific instance invoking the method."
          },
          {
            "q": "What are dunder (magic) methods in Python?",
            "o": [
              "Dangerous methods",
              "Special methods surrounded by double underscores like `__str__` and `__len__`",
              "Private C extensions",
              "Deprecated functions"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Dunder (double underscore) methods implement operator overloading and built-in protocols."
          },
          {
            "q": "What is the difference between `__str__` and `__repr__` in Python?",
            "o": [
              "`__str__` is for human-readable end-user display; `__repr__` is unambiguous developer representation",
              "No difference",
              "__repr__ is deprecated",
              "__str__ is for numbers"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`__repr__` should ideally be code that recreates the object; `__str__` is user-friendly text."
          },
          {
            "q": "What is the `@classmethod` decorator in Python?",
            "o": [
              "A constructor",
              "A method that receives the class object (`cls`) as its first parameter rather than an instance",
              "A static function",
              "A private method"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`@classmethod` methods receive `cls` and are often used as alternative factory constructors."
          },
          {
            "q": "What is the `@staticmethod` decorator in Python?",
            "o": [
              "Prevents method from changing state",
              "A plain function scoped inside a class namespace that receives neither `self` nor `cls`",
              "Locks the class",
              "A final method"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`@staticmethod` behaves like an independent function that happens to live in a class's namespace."
          },
          {
            "q": "What is `@property` decorator used for in Python?",
            "o": [
              "Listing object properties",
              "Defining getter, setter, and deleter methods accessed like standard instance attributes",
              "Declaring public fields",
              "Encrypting fields"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`@property` enables pythonic getter and setter syntax without breaking attribute access conventions."
          },
          {
            "q": "What does `super()` do in Python 3?",
            "o": [
              "Returns the root object",
              "Returns a proxy object that delegates method calls to a parent or sibling class using MRO",
              "Calls the OS kernel",
              "Creates a thread"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`super()` delegates method calls according to the class's Method Resolution Order (MRO)."
          },
          {
            "q": "What is the C3 Linearization algorithm used for in Python?",
            "o": [
              "Memory optimization",
              "Determining Method Resolution Order (MRO) for multiple inheritance",
              "Linear regression",
              "Compiling bytecode"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Python uses C3 linearization to produce a consistent, monotonic MRO for multiple inheritance hierarchies."
          },
          {
            "q": "What does `__slots__` do in a Python class?",
            "o": [
              "Limits the number of instances",
              "Restricts allowed attributes to a fixed tuple, removing `__dict__` and dramatically saving RAM",
              "Creates slot machines",
              "Locks method execution"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`__slots__ = ('x', 'y')` prevents dynamic attribute creation and optimizes memory per instance."
          },
          {
            "q": "How do you achieve name mangling for private attributes in Python?",
            "o": [
              "Using keyword `private`",
              "Prefixing the attribute name with two leading underscores (e.g. `__secret`)",
              "Using uppercase names",
              "Using `#` prefix"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`__attr` is rewritten by the interpreter as `_ClassName__attr` to prevent accidental subclass collisions."
          },
          {
            "q": "What is multiple inheritance in Python?",
            "o": [
              "A class can inherit from more than one parent class directly",
              "Inheriting 100 classes",
              "Nested classes",
              "Creating multiple instances"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Python supports multiple base classes directly (e.g. `class Child(Base1, Base2):`)."
          },
          {
            "q": "What module provides Abstract Base Classes (ABCs) in Python?",
            "o": [
              "abstract",
              "abc",
              "typing",
              "classes"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `abc` module provides `ABC` and `@abstractmethod` to enforce interface contracts in subclasses."
          },
          {
            "q": "What does `isinstance(obj, Class)` vs `type(obj) is Class` do?",
            "o": [
              "`isinstance()` considers inheritance hierarchies; `type()` checks exact class identity only",
              "No difference",
              "type() is faster",
              "isinstance() is for primitives only"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`isinstance(subclass_inst, SuperClass)` returns True; `type()` is strictly identity-based."
          },
          {
            "q": "What is a dataclass introduced in Python 3.7?",
            "o": [
              "A database ORM",
              "A decorator `@dataclass` that automatically generates `__init__`, `__repr__`, and `__eq__` methods",
              "A binary struct",
              "A frozen list"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`@dataclass` eliminates boilerplate for classes storing structured state."
          },
          {
            "q": "What dunder method implements the `len()` function for custom classes?",
            "o": [
              "__size__",
              "__length__",
              "__len__",
              "__count__"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Implementing `def __len__(self): return count` enables calling `len(instance)`."
          }
        ]
      },
      "file_handling": {
        "id": "file_handling",
        "name": "File Handling",
        "icon": "📁",
        "desc": "open(), with statements, context managers, and read/write.",
        "questions": [
          {
            "q": "Why is the `with open(...)` construct preferred for file operations?",
            "o": [
              "It runs faster",
              "It guarantees the file is properly closed even if an exception occurs",
              "It writes directly to SSD",
              "It compresses file data"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `with` statement utilizes context management to automatically close files upon exit."
          },
          {
            "q": "Which mode opens a file for writing and truncates it if it already exists?",
            "o": [
              "'r'",
              "'w'",
              "'a'",
              "'x'"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Mode `'w'` opens a file for writing and truncates existing content."
          },
          {
            "q": "What does `f.read()` without arguments do on an open file object?",
            "o": [
              "Reads 1 line",
              "Reads the entire remaining content of the file as a single string or bytes",
              "Reads 1024 bytes",
              "Clears file"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`f.read()` reads until EOF and returns the full file content."
          },
          {
            "q": "What does `f.readline()` vs `f.readlines()` do in Python?",
            "o": [
              "`readline()` reads a single line; `readlines()` reads all remaining lines into a list of strings",
              "No difference",
              "readlines() deletes lines",
              "readline() is for binary files"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`readline()` returns one line as string; `readlines()` returns a list containing every line."
          },
          {
            "q": "What does mode `'a'` do when opening a file in Python?",
            "o": [
              "Opens for reading",
              "Opens for writing, appending new data to the end without truncating",
              "Opens for ASCII only",
              "Opens asynchronously"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Mode `'a'` appends data to the end of the file; creates file if it doesn't exist."
          },
          {
            "q": "What does mode `'x'` do in Python's `open()` function?",
            "o": [
              "Executes file",
              "Exclusive creation: opens for writing only if the file does not already exist (raises FileExistsError if exists)",
              "XML mode",
              "Hex mode"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Mode `'x'` guarantees exclusive creation, preventing accidental overwriting of existing files."
          },
          {
            "q": "What is the standard module used for working with file paths across different operating systems in modern Python?",
            "o": [
              "os.path",
              "pathlib (Path objects)",
              "sys.path",
              "filepath"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`pathlib.Path` provides modern, object-oriented filesystem path operations across Windows, macOS, and Linux."
          },
          {
            "q": "Which module is used to serialize and deserialize arbitrary Python objects to byte streams?",
            "o": [
              "json",
              "pickle",
              "marshal",
              "sqlite3"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`pickle` serializes complex Python object hierarchies to and from byte streams."
          },
          {
            "q": "Why is `pickle` considered insecure for untrusted data in Python?",
            "o": [
              "It lacks encryption",
              "Arbitrary code execution can occur during unpickling via `__reduce__`",
              "It leaks memory",
              "It modifies the global namespace"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Unpickling untrusted data can execute malicious code embedded within the serialized stream."
          },
          {
            "q": "What does `f.seek(0)` do?",
            "o": [
              "Deletes first byte",
              "Moves the file stream read/write pointer back to the beginning of the file",
              "Flushes buffer",
              "Closes file"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`seek(offset, whence)` re-positions the file pointer; `seek(0)` resets to offset 0 (start)."
          },
          {
            "q": "What does `f.tell()` return in Python?",
            "o": [
              "File name",
              "Current position (byte offset) of the file pointer",
              "File size",
              "Line count"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`f.tell()` returns an integer specifying the current stream position."
          },
          {
            "q": "Which built-in module handles CSV files in Python?",
            "o": [
              "csv",
              "json",
              "tabular",
              "excel"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The `csv` module provides `csv.reader`, `csv.writer`, `DictReader`, and `DictWriter`."
          },
          {
            "q": "What does `shutil.copy(src, dst)` do?",
            "o": [
              "Copies file content and permissions to destination",
              "Renames file",
              "Creates a symlink",
              "Deletes source file"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "The `shutil` module offers high-level file and directory copying and manipulation functions."
          },
          {
            "q": "What context manager protocol methods must an object implement to work with `with` statements?",
            "o": [
              "`__init__` and `__del__`",
              "`__enter__` and `__exit__`",
              "`__start__` and `__stop__`",
              "`__open__` and `__close__`"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Context managers implement `__enter__()` (setup) and `__exit__(exc_type, exc_val, exc_tb)` (teardown)."
          },
          {
            "q": "What does `os.walk(dirpath)` generate?",
            "o": [
              "A graph of files",
              "A 3-tuple `(dirpath, dirnames, filenames)` for each directory in the tree",
              "A file list only",
              "An executable shell script"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`os.walk()` recursively traverses directory trees, yielding tuples of root, dirs, and files."
          },
          {
            "q": "What happens if you open a file with `'w'` mode and forget to close it or use `with`?",
            "o": [
              "Nothing",
              "Buffered data may not be flushed to disk immediately, risking data loss",
              "Operating system crashes",
              "File deletes itself"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "File streams buffer output; without `flush()` or `close()`, buffered writes might be lost if the program crashes."
          }
        ]
      },
      "exceptions": {
        "id": "exceptions",
        "name": "Exception Handling",
        "icon": "🛡️",
        "desc": "try, except, else, finally, and custom exceptions.",
        "questions": [
          {
            "q": "Which block handles an exception that occurs inside a `try` block?",
            "o": [
              "catch",
              "except",
              "rescue",
              "handle"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Python uses `except` to catch and handle exceptions."
          },
          {
            "q": "What keyword is used to trigger an exception manually in Python?",
            "o": [
              "throw",
              "raise",
              "error",
              "fire"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In Python, exceptions are explicitly triggered with `raise`."
          },
          {
            "q": "What is the base class for all built-in exceptions in Python?",
            "o": [
              "Exception",
              "BaseException",
              "StandardError",
              "SystemError"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`BaseException` is the root class of all exceptions; `Exception` inherits from it (system exits inherit directly from BaseException)."
          },
          {
            "q": "Why should you avoid using a bare `except:` without an exception class?",
            "o": [
              "Syntax error",
              "It catches SystemExit and KeyboardInterrupt (Ctrl+C), making the script difficult to terminate",
              "Slows execution",
              "Compiler warning"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A bare `except:` catches `BaseException`, intercepting intentional process signals like Ctrl+C."
          },
          {
            "q": "When does the `else` block of a `try-except-else-finally` construct execute in Python?",
            "o": [
              "When an exception was caught",
              "When the `try` block completed without raising any exceptions",
              "Every time",
              "Only if finally fails"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The `else` clause runs only when code in the `try` block executes without raising any exceptions."
          },
          {
            "q": "What statement is used to re-raise the currently active exception in an `except` block?",
            "o": [
              "rethrow",
              "raise",
              "throw",
              "pass"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A bare `raise` without arguments inside an `except` block re-raises the active exception."
          },
          {
            "q": "What is exception chaining using `raise ... from ...` (PEP 3134)?",
            "o": [
              "Catching multiple errors",
              "Explicitly preserving the original causing exception (`__cause__`) when raising a new exception",
              "Creating error lists",
              "Looping exceptions"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`raise CustomError from original_err` connects the new exception to its original root cause."
          },
          {
            "q": "What does `assert condition, 'error message'` do in Python?",
            "o": [
              "Catches errors",
              "Raises an `AssertionError` with the message if the condition evaluates to False",
              "Logs a warning",
              "Halts compiler"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`assert` tests internal invariants during development and testing, raising `AssertionError` on failure."
          },
          {
            "q": "Can assertions be globally disabled in Python?",
            "o": [
              "No, assert always runs",
              "Yes, running Python with `-O` (optimize flag) skips all assert statements",
              "Only with compiler flags",
              "Only in Linux"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Running `python -O script.py` strips all `assert` statements from bytecode."
          },
          {
            "q": "What is an `ExceptionGroup` introduced in Python 3.11 (PEP 654)?",
            "o": [
              "A list of classes",
              "An exception that bundles multiple concurrent exceptions together, handled via `except*`",
              "A thread error",
              "An async queue"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`ExceptionGroup` bundles multiple exceptions (common in concurrent task groups) and pairs with `except*`."
          },
          {
            "q": "What exception is raised when attempting to divide a number by zero?",
            "o": [
              "ArithmeticError",
              "ZeroDivisionError",
              "MathException",
              "DivisionError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`ZeroDivisionError` is raised on integer or float division or modulo by zero."
          },
          {
            "q": "What exception is raised when trying to access a list index that does not exist?",
            "o": [
              "KeyError",
              "IndexError",
              "ValueError",
              "LookupError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`IndexError: list index out of range` is raised for invalid sequence indices."
          },
          {
            "q": "What exception is raised when a function receives an argument of the correct type but inappropriate value?",
            "o": [
              "TypeError",
              "ValueError",
              "IndexError",
              "ArgumentError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`ValueError` occurs when types match (e.g. `int('abc')`) but the value is invalid."
          },
          {
            "q": "What exception is raised when an operation is performed on an object of inappropriate type?",
            "o": [
              "ValueError",
              "TypeError",
              "AttributeError",
              "ObjectError"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`TypeError` indicates type mismatches, such as attempting `'str' + 5`."
          },
          {
            "q": "What exception is raised when attempting to access an attribute or method that does not exist on an object?",
            "o": [
              "AttributeError",
              "KeyError",
              "NoSuchMethodError",
              "TypeError"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`AttributeError` is raised when referencing an invalid attribute or method name."
          },
          {
            "q": "How do you define a custom exception class in Python?",
            "o": [
              "Create a class that inherits from `Exception`",
              "Implement IException interface",
              "Write an error function",
              "Use keyword defexception"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Custom exceptions subclass `Exception` (e.g. `class MyError(Exception): pass`)."
          }
        ]
      }
    }
  },
  "javascript": {
    "id": "javascript",
    "name": "JavaScript",
    "icon": "🟨",
    "category": "web",
    "description": "The ubiquitous language of the web, browsers, Node.js, and modern full-stack development.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Basics & Syntax",
        "icon": "🔰",
        "desc": "Console, data types, dynamic typing, and primitive values.",
        "questions": [
          {
            "q": "Which keyword outputs information to the web browser developer console?",
            "o": [
              "print()",
              "console.log()",
              "document.write()",
              "terminal.out()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`console.log()` prints debugging information to the browser console."
          },
          {
            "q": "What is the result of `typeof NaN` in JavaScript?",
            "o": [
              "'nan'",
              "'undefined'",
              "'number'",
              "'object'"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "In JavaScript, NaN (Not a Number) is technically a numeric data type."
          },
          {
            "q": "What does `typeof null` evaluate to due to a legacy design quirk?",
            "o": [
              "'null'",
              "'undefined'",
              "'object'",
              "'boolean'"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "`typeof null` returns `'object'` because of how early JS represented type tags in memory."
          },
          {
            "q": "What is JavaScript primarily designed as in its execution environment?",
            "o": [
              "Single-threaded, non-blocking, asynchronous concurrent language",
              "Multi-threaded preemptive kernel",
              "Compiled assembly code",
              "Static declarative markup"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "JavaScript is single-threaded using an event loop with non-blocking I/O operations."
          },
          {
            "q": "Which specification standardizes JavaScript?",
            "o": [
              "W3C HTML5",
              "ECMAScript (ECMA-262)",
              "POSIX",
              "ISO C++"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "JavaScript is formally standardized as ECMAScript (ECMA-262) by Ecma International."
          },
          {
            "q": "What does 'use strict' do in a JavaScript file or function?",
            "o": [
              "Compiles code to WebAssembly",
              "Enables strict mode, eliminating silent errors and securing code",
              "Enables multithreading",
              "Disables Garbage Collection"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "'use strict' enforces cleaner code by preventing accidental globals, assignments to read-only properties, etc."
          },
          {
            "q": "What is NaN in JavaScript?",
            "o": [
              "A string value",
              "A numeric data type value representing Not-a-Number",
              "A syntax error keyword",
              "A null pointer"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`typeof NaN === 'number'`; it represents computational results that cannot be represented as numbers."
          },
          {
            "q": "How do you correctly check if a value `x` is NaN in modern JavaScript?",
            "o": [
              "x == NaN",
              "x === NaN",
              "Number.isNaN(x)",
              "x.isNaN()"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "`NaN === NaN` is false. `Number.isNaN()` accurately determines whether the value is NaN without type coercion."
          },
          {
            "q": "Which primitive type was added in ES6 for unique object identifiers?",
            "o": [
              "Symbol",
              "BigInt",
              "UUID",
              "Hash"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "ES6 introduced `Symbol`, which creates guaranteed unique and immutable primitive values."
          },
          {
            "q": "Which primitive type was introduced in ES2020 for arbitrarily large integers?",
            "o": [
              "Long",
              "BigInt",
              "Float64",
              "Double"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`BigInt` allows safe representation and arithmetic on integers exceeding `Number.MAX_SAFE_INTEGER`."
          },
          {
            "q": "What is the result of `0.1 + 0.2 === 0.3` in JavaScript?",
            "o": [
              "true",
              "false (due to IEEE 754 floating point precision)",
              "TypeError",
              "undefined"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Binary floating-point arithmetic produces `0.30000000000000004`, so it is not strictly equal to `0.3`."
          },
          {
            "q": "What does `isFinite(1 / 0)` return?",
            "o": [
              "true",
              "false",
              "undefined",
              "NaN"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`1 / 0` evaluates to `Infinity`, and `isFinite(Infinity)` evaluates to false."
          },
          {
            "q": "What is the global object in a modern web browser environment?",
            "o": [
              "global",
              "window",
              "process",
              "root"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`window` represents the browser window and global scope; in ES2020 `globalThis` is standardized everywhere."
          },
          {
            "q": "What does `globalThis` provide across JavaScript environments?",
            "o": [
              "Universal access to the global scope (window in browser, global in Node.js)",
              "A copy of this in current function",
              "A thread-safe singleton",
              "Global strict mode"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`globalThis` provides a standard mechanism to access the global `this` across browsers, Web Workers, and Node.js."
          },
          {
            "q": "What is the event loop in JavaScript?",
            "o": [
              "A loop that compiles JavaScript to bytecode",
              "A mechanism that coordinates execution of synchronous code, microtasks, and macrotasks",
              "A DOM click listener loop",
              "A garbage collection algorithm"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "The event loop continuously monitors the call stack and dequeues tasks from microtask and macrotask queues."
          },
          {
            "q": "Which queue has higher execution priority in the JavaScript event loop?",
            "o": [
              "Microtask queue (Promises, queueMicrotask)",
              "Macrotask queue (setTimeout, setInterval)",
              "Render queue",
              "I/O queue"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "All microtasks in the microtask queue are drained completely before the next macrotask is picked."
          },
          {
            "q": "How is memory managed in JavaScript?",
            "o": [
              "Manual malloc and free",
              "Automatic garbage collection using mark-and-sweep algorithm",
              "Reference counting only",
              "Stack-only memory allocation"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Modern JS engines employ generational mark-and-sweep garbage collection algorithms to reclaim unused memory."
          }
        ]
      },
      "variables": {
        "id": "variables",
        "name": "Variables & Scope",
        "icon": "📦",
        "desc": "var, let, const, hoisting, and block vs function scope.",
        "questions": [
          {
            "q": "Which keyword creates a block-scoped reassignable variable?",
            "o": [
              "var",
              "let",
              "const",
              "def"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`let` has block scope `{}` and permits reassignment."
          },
          {
            "q": "What is the Temporal Dead Zone (TDZ) in JavaScript?",
            "o": [
              "Memory leak in closures",
              "The period between entering scope and variable declaration with let/const",
              "Time before garbage collection",
              "Async setTimeout delay"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Variables declared with `let` and `const` cannot be accessed before their declaration line."
          },
          {
            "q": "Does `const` mean that object properties cannot be modified?",
            "o": [
              "Yes, entire object is frozen",
              "No, the variable binding is immutable, but the object itself remains mutable",
              "Only in strict mode",
              "Yes, throws TypeError"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`const` prevents reassignment of the variable reference, but object properties can still be modified."
          },
          {
            "q": "What is the scope of variables declared with `let`?",
            "o": [
              "Block scope",
              "Function scope",
              "Global scope only",
              "Package scope"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`let` variables are scoped to the nearest enclosing block (`{ ... }`)."
          },
          {
            "q": "What is the scope of variables declared with `var`?",
            "o": [
              "Block scope",
              "Function or global scope (ignores block boundaries)",
              "Module scope only",
              "Class scope only"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`var` is scoped to the enclosing execution context (function or global), not block statements like if/for."
          },
          {
            "q": "What happens if you access a `let` variable before its declaration line?",
            "o": [
              "Returns undefined",
              "Throws ReferenceError due to the Temporal Dead Zone (TDZ)",
              "Returns null",
              "Logs warning and assigns 0"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`let` and `const` declarations are in the Temporal Dead Zone from the start of the block until execution reaches declaration."
          },
          {
            "q": "Does `const` make an assigned object immutable in JavaScript?",
            "o": [
              "Yes, object properties cannot be modified",
              "No, `const` only prevents reassignment of the variable binding itself",
              "Yes, it freezes properties",
              "Only in strict mode"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`const` prevents variable rebinding (`obj = ...`), but the properties of the referenced object remain mutable."
          },
          {
            "q": "How can you make an object truly immutable (prevent property additions, deletions, and edits)?",
            "o": [
              "Object.seal(obj)",
              "Object.freeze(obj)",
              "const obj",
              "Object.preventExtensions(obj)"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`Object.freeze()` shallowly prevents mutation of existing properties and addition/removal of new properties."
          },
          {
            "q": "What is Variable Hoisting in JavaScript?",
            "o": [
              "Moving variables to cloud storage",
              "Moving variable and function declarations to the top of their scope during compilation",
              "Converting variables to constants",
              "Releasing variable memory"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "During parsing, variable declarations (`var`) are initialized with `undefined` at the top of their scope."
          },
          {
            "q": "Can a `const` variable be declared without an initializer (e.g. `const x;`)?",
            "o": [
              "Yes",
              "No, it raises a SyntaxError: Missing initializer in const declaration",
              "Yes, defaults to null",
              "Yes, defaults to undefined"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`const` declarations must be immediately initialized with a value at declaration time."
          },
          {
            "q": "What is the difference between `Object.seal()` and `Object.freeze()`?",
            "o": [
              "`seal()` allows modifying existing properties; `freeze()` makes existing properties read-only",
              "`freeze()` allows adding properties",
              "`seal()` is deep; `freeze()` is shallow",
              "No difference"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`Object.seal()` prevents adding or deleting properties but allows modifying existing ones; `Object.freeze()` prevents modification too."
          },
          {
            "q": "What happens when declaring a variable without `var`, `let`, or `const` in non-strict mode?",
            "o": [
              "Throws error",
              "Creates an implicit global property on the global object",
              "Scoped to current block",
              "Defaults to const"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "In non-strict mode, assigning to an undeclared variable creates an implicit property on the global object."
          },
          {
            "q": "Can a variable declared with `let` be re-declared in the same block scope?",
            "o": [
              "Yes",
              "No, throws SyntaxError: Identifier has already been declared",
              "Only if typed identically",
              "Only in loops"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Re-declaring the same identifier in the same scope with `let` or `const` is forbidden and throws a `SyntaxError`."
          },
          {
            "q": "What is variable shadowing in JavaScript?",
            "o": [
              "When an inner scope variable has the same identifier as an outer scope variable, masking it",
              "Deleting outer variables",
              "Memory leakage of variables",
              "Sharing references between objects"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Variable shadowing occurs when an inner scope identifier masks access to an outer identifier with the same name."
          },
          {
            "q": "What is Destructuring Assignment in JavaScript?",
            "o": [
              "Deleting properties from an object",
              "Unpacking values from arrays or properties from objects into distinct variables",
              "Garbage collecting unused arrays",
              "Splitting strings by commas"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Destructuring (`const { name, age } = user;`) extracts values into distinct local variables cleanly."
          },
          {
            "q": "How do you provide a default value during object destructuring in JavaScript?",
            "o": [
              "`const { role = 'guest' } = user;`",
              "`const { role || 'guest' } = user;`",
              "`const { role ?? 'guest' } = user;`",
              "`const { role: 'guest' } = user;`"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`const { role = 'guest' } = user;` assigns `'guest'` if `user.role` is undefined."
          },
          {
            "q": "How do you assign a destructured property to a new variable name in JavaScript?",
            "o": [
              "`const { prop as newName } = obj;`",
              "`const { prop: newName } = obj;`",
              "`const { prop -> newName } = obj;`",
              "`const { newName = prop } = obj;`"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The syntax `{ sourceProp: targetVarName }` remaps the property name to a local variable name."
          }
        ]
      },
      "operators": {
        "id": "operators",
        "name": "Operators",
        "icon": "➕",
        "desc": "Equality (== vs ===), nullish coalescing, and logical operators.",
        "questions": [
          {
            "q": "What is the difference between `==` and `===`?",
            "o": [
              "No difference",
              "`===` checks both value and type without coercion",
              "`==` is faster",
              "`===` assigns values"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Strict equality `===` does not perform implicit type coercion."
          },
          {
            "q": "What does the nullish coalescing operator `??` check for?",
            "o": [
              "Falsy values (0, false, '')",
              "Only null or undefined",
              "NaN only",
              "Negative numbers"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`a ?? b` returns `b` only if `a` is strictly `null` or `undefined`."
          },
          {
            "q": "What does the optional chaining operator `?.` do in JavaScript?",
            "o": [
              "Conditional assignment",
              "Short-circuits and evaluates to undefined if the reference is null or undefined without throwing TypeError",
              "Throws error if property missing",
              "Calls optional method"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`user?.address?.street` evaluates safely to `undefined` if `user` or `address` is null/undefined."
          },
          {
            "q": "What does the logical nullish assignment operator `??=` do?",
            "o": [
              "Assigns value only if current variable is null or undefined",
              "Assigns if falsy",
              "Assigns if truthy",
              "Bitwise null comparison"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`x ??= y` assigns `y` to `x` only if `x` is strictly `null` or `undefined`."
          },
          {
            "q": "What does the unary plus operator `+` do when applied to a string `+'42'`?",
            "o": [
              "Appends plus sign",
              "Converts the string into a numeric value `42`",
              "Throws syntax error",
              "Returns string length"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Unary `+` converts its operand to a number (`+'42' === 42`)."
          },
          {
            "q": "What does `typeof null` evaluate to in JavaScript?",
            "o": [
              "'null'",
              "'undefined'",
              "'object'",
              "'boolean'"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`typeof null === 'object'` due to an early JavaScript implementation bug that was preserved for backwards compatibility."
          },
          {
            "q": "What is the result of `'5' - 2` vs `'5' + 2`?",
            "o": [
              "3 and '52'",
              "'3' and 7",
              "3 and 7",
              "NaN and '52'"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Subtraction coerces strings to numbers (`5 - 2 = 3`); addition with a string performs concatenation (`'52'`)."
          },
          {
            "q": "What does `in` operator test on objects in JavaScript?",
            "o": [
              "Checks if a property exists in the object or its prototype chain",
              "Checks if value is in array",
              "Tests scope",
              "Iterates keys"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`'key' in obj` checks if `'key'` exists in the object or any prototype up its chain."
          },
          {
            "q": "What is the difference between `hasOwnProperty` and the `in` operator?",
            "o": [
              "`hasOwnProperty` ignores inherited prototype properties; `in` checks the entire prototype chain",
              "No difference",
              "in is deprecated",
              "hasOwnProperty is for arrays only"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`obj.hasOwnProperty('prop')` tests only direct properties owned by the instance itself."
          },
          {
            "q": "What does `void 0` evaluate to in JavaScript?",
            "o": [
              "0",
              "null",
              "undefined",
              "NaN"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "The `void` operator evaluates its expression and strictly returns `undefined`."
          },
          {
            "q": "What does `delete obj.prop` do in JavaScript?",
            "o": [
              "Clears property value to null",
              "Removes the own property from the object, returning true on success",
              "Freezes object",
              "Deletes the variable"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`delete` removes a property from an object; it cannot delete variables declared with `var`, `let`, or `const`."
          },
          {
            "q": "What does the comma operator evaluate to in `let x = (1, 2, 3);`?",
            "o": [
              "1",
              "3 (the value of the last operand)",
              "Array [1, 2, 3]",
              "Syntax error"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The comma operator evaluates each operand and returns the final operand (3)."
          },
          {
            "q": "What does `Object.hasOwn(obj, 'prop')` provide in ES2022?",
            "o": [
              "A safe replacement for `Object.prototype.hasOwnProperty.call(obj, 'prop')`",
              "Checks prototype chain",
              "Tests array indices",
              "Checks frozen state"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`Object.hasOwn()` works safely even on objects created with `Object.create(null)`."
          },
          {
            "q": "What is the result of `false == 0` vs `false === 0` in JavaScript?",
            "o": [
              "true and false",
              "true and true",
              "false and false",
              "false and true"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`==` performs type coercion where `false` coerces to 0 (`true`); `===` compares distinct types (`false`)."
          },
          {
            "q": "What does `0 || 'fallback'` vs `0 ?? 'fallback'` evaluate to?",
            "o": [
              "'fallback' and 0",
              "'fallback' and 'fallback'",
              "0 and 0",
              "0 and 'fallback'"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`||` treats `0` as falsy (returns `'fallback'`); `??` checks only for null/undefined (returns `0`)."
          },
          {
            "q": "What does the exponentiation operator `**` calculate in `2 ** 3`?",
            "o": [
              "6",
              "8",
              "16",
              "5"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`**` raises the base to the exponent (`2 ** 3 = 8`)."
          }
        ]
      },
      "conditionals": {
        "id": "conditionals",
        "name": "Conditionals & Loops",
        "icon": "🔁",
        "desc": "if/else, switch, for-of, and for-in loops.",
        "questions": [
          {
            "q": "Which loop iterates over values of an iterable like an Array?",
            "o": [
              "for...in",
              "for...of",
              "for...each",
              "repeat...while"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`for...of` iterates over iterable values; `for...in` iterates over object keys."
          },
          {
            "q": "Which of the following is considered falsy in JavaScript?",
            "o": [
              "[]",
              "'false'",
              "0",
              "{}"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "In JavaScript, `0`, `\"\"`, `null`, `undefined`, `NaN`, and `false` are falsy."
          },
          {
            "q": "Can a `switch` statement compare values using strict equality (`===`) in JavaScript?",
            "o": [
              "No, uses loose equality ==",
              "Yes, switch cases always use strict equality `===`",
              "Only for strings",
              "Only in strict mode"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "JavaScript `switch(val)` evaluates cases using strict identity comparison (`===`) without coercion."
          },
          {
            "q": "What happens if `break` is omitted in a JavaScript `switch` case?",
            "o": [
              "Execution falls through to the next case automatically",
              "Throws SyntaxError",
              "Returns undefined",
              "Switch repeats"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Without `break`, execution continues down into subsequent cases regardless of their case match."
          },
          {
            "q": "What is the difference between `for...in` and `for...of` in JavaScript?",
            "o": [
              "`for...in` iterates over enumerable property keys; `for...of` iterates over iterable values",
              "`for...of` is for objects only",
              "No difference",
              "for...in is faster"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`for...in` is for object keys; `for...of` is for iterable values (Arrays, Maps, Sets, strings)."
          },
          {
            "q": "Can a plain JavaScript object `{}` be iterated directly with `for...of`?",
            "o": [
              "Yes, always",
              "No, plain objects are not iterables (they do not implement Symbol.iterator)",
              "Only if frozen",
              "Only in Node.js"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Plain objects lack `[Symbol.iterator]` and throw `TypeError: obj is not iterable` with `for...of`."
          },
          {
            "q": "How do you iterate over key-value pairs of a plain object using `for...of`?",
            "o": [
              "`for (const [k, v] of Object.entries(obj))`",
              "`for (const [k, v] of obj)`",
              "`for (const [k, v] of Object.pairs(obj))`",
              "`for (const [k, v] of obj.items())`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Object.entries(obj)` returns an array of `[key, value]` pairs that can be iterated with `for...of`."
          },
          {
            "q": "What are the 6 standard falsy values in JavaScript?",
            "o": [
              "false, 0, -0, 0n, \"\", null, undefined, NaN",
              "0 and false only",
              "false, null, undefined",
              "empty array and empty object"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "All other values (including `[]`, `{}`, and `\"false\"`) are truthy in JavaScript."
          },
          {
            "q": "What is labeled loop syntax in JavaScript?",
            "o": [
              "`label: for (...)` used with `break label;` or `continue label;`",
              "Loop naming function",
              "HTML label element",
              "TypeScript tag"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Labels (`myLoop: for (...)`) allow breaking out of targeted outer loops from inner loops."
          },
          {
            "q": "What does `Array.prototype.some()` return?",
            "o": [
              "First matching element",
              "true if at least one element passes the test function; otherwise false",
              "An array slice",
              "Count of matches"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`some()` tests if any element in the array passes the provided callback predicate."
          },
          {
            "q": "What does `Array.prototype.every()` return?",
            "o": [
              "All elements",
              "true if every element satisfies the callback condition; otherwise false",
              "The last element",
              "A boolean list"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`every()` tests whether all elements in the array pass the provided test."
          },
          {
            "q": "Can a `default` case be placed at the beginning or middle of a `switch` block in JavaScript?",
            "o": [
              "No, must be at the end",
              "Yes, default can appear anywhere; it executes only if no case matches",
              "Causes compilation error",
              "Must be preceded by break"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`default` can be positioned anywhere inside the switch; it executes if no cases match."
          },
          {
            "q": "What will `Boolean(new Boolean(false))` evaluate to in JavaScript?",
            "o": [
              "false",
              "true (because objects are always truthy)",
              "TypeError",
              "undefined"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Calling `new Boolean(false)` constructs a wrapper object; all objects in JavaScript are truthy."
          },
          {
            "q": "What does the statement `while (false)` do in JavaScript?",
            "o": [
              "SyntaxError: unreachable code",
              "Skips the loop body entirely and continues execution",
              "Throws TypeError",
              "Infinite loop"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Unlike Java, JavaScript does not throw compile errors on `while(false)`; it simply never enters the loop body."
          },
          {
            "q": "What is the result of `null ?? 'fallback'` vs `undefined ?? 'fallback'`?",
            "o": [
              "'fallback' and 'fallback'",
              "null and undefined",
              "'fallback' and undefined",
              "TypeError"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The nullish coalescing operator `??` triggers for both `null` and `undefined`."
          },
          {
            "q": "What does `Array.prototype.find()` return if no element matches the condition?",
            "o": [
              "-1",
              "null",
              "undefined",
              "false"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`find()` returns the value of the first matching element, or `undefined` if none match."
          }
        ]
      },
      "functions": {
        "id": "functions",
        "name": "Functions & Arrow Functions",
        "icon": "⚙️",
        "desc": "Arrow functions, lexical this, closures, and default arguments.",
        "questions": [
          {
            "q": "How do arrow functions handle the `this` keyword?",
            "o": [
              "They bind this to window",
              "They lexically inherit `this` from the enclosing scope",
              "They have their own dynamic this",
              "They throw an error if this is used"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Arrow functions do not bind their own `this`; they capture it from the outer lexical context."
          },
          {
            "q": "What is a closure in JavaScript?",
            "o": [
              "A function bundled together with references to its surrounding lexical environment",
              "A function that has terminated",
              "A private class constructor",
              "A syntax error"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "A closure gives a function access to its outer scope even after the outer function has finished executing."
          },
          {
            "q": "Can arrow functions be used as constructors with the `new` keyword in JavaScript?",
            "o": [
              "Yes, always",
              "No, arrow functions lack a `[[Construct]]` method and prototype property",
              "Only if uppercase",
              "Only in ES6"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Invoking `new () => {}` throws `TypeError: ... is not a constructor`."
          },
          {
            "q": "Do arrow functions have their own `arguments` object?",
            "o": [
              "Yes, contains all parameters",
              "No, they inherit arguments from the enclosing lexical scope",
              "Only in non-strict mode",
              "Only in Node.js"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Arrow functions do not bind `arguments`; use rest parameters `(...args) => {}` instead."
          },
          {
            "q": "What are the methods used to explicitly bind `this` and invoke a function?",
            "o": [
              "call(), apply(), and bind()",
              "setThis(), withThis()",
              "attach(), run()",
              "hook(), exec()"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`call()` and `apply()` invoke immediately with specified `this`; `bind()` returns a new bound function."
          },
          {
            "q": "What is the difference between `func.call()` and `func.apply()` in JavaScript?",
            "o": [
              "`call()` accepts arguments as a comma list; `apply()` accepts arguments as an array",
              "No difference",
              "apply() is deprecated",
              "call() is asynchronous"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`call(thisArg, arg1, arg2)` takes comma arguments; `apply(thisArg, [arg1, arg2])` takes an array."
          },
          {
            "q": "What is an Immediately Invoked Function Expression (IIFE)?",
            "o": [
              "A function that calls itself recursively",
              "A function defined and executed immediately after creation: `(function(){ ... })()`",
              "An async task",
              "A generator"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "IIFEs run immediately upon definition, historically creating private lexical scope."
          },
          {
            "q": "What is function currying in JavaScript?",
            "o": [
              "Running functions in parallel",
              "Transforming a function with multiple arguments into a sequence of functions each taking a single argument",
              "Cooking code",
              "Memoization"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Currying transforms `f(a, b, c)` into `f(a)(b)(c)`."
          },
          {
            "q": "What is a pure function in programming?",
            "o": [
              "A function without comments",
              "A function that always produces the same output for the same input and causes no side effects",
              "A private function",
              "A function with no arguments"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Pure functions do not mutate external state and have predictable, deterministic outputs."
          },
          {
            "q": "What is a generator function in JavaScript?",
            "o": [
              "A function declared with `function*` that uses `yield` to pause and resume execution",
              "A random number generator",
              "A class generator",
              "A Babel transpiler"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`function* myGen()` creates a generator object conforming to the iterator protocol."
          },
          {
            "q": "What does calling `generator.next()` return in JavaScript?",
            "o": [
              "The raw yielded value",
              "An object with `{ value: any, done: boolean }`",
              "A Promise",
              "Array of yields"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`next()` returns `{ value: currentYieldedValue, done: isFinished }`."
          },
          {
            "q": "What is the difference between function declarations and function expressions regarding hoisting?",
            "o": [
              "Function declarations are hoisted with their body; function expressions (e.g. `const f = () => {}`) are not accessible before definition",
              "No difference",
              "Expressions are hoisted higher",
              "Declarations are not hoisted"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Function declarations can be called before their definition line; function expressions follow variable TDZ rules."
          },
          {
            "q": "What is tail call optimization (TCO) in ES6?",
            "o": [
              "Speeding up loops",
              "Reusing stack frames for recursive functions whose final statement is a function call",
              "Garbage collection",
              "Code minification"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "ES6 specified TCO for strict mode tail calls, avoiding stack overflow in recursion."
          },
          {
            "q": "What is function memoization?",
            "o": [
              "Writing unit tests",
              "Caching the return values of expensive function calls based on input arguments",
              "Profiling memory",
              "Garbage collection"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Memoization stores computed results in a lookup cache to return instantaneously on repeated inputs."
          },
          {
            "q": "What does the `arguments.callee` property reference in non-strict mode?",
            "o": [
              "The caller function",
              "The currently executing function itself",
              "The global object",
              "The first argument"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`arguments.callee` allowed anonymous functions to refer to themselves (forbidden in strict mode)."
          },
          {
            "q": "What does `Function.prototype.bind()` return?",
            "o": [
              "The return value of the function",
              "A new bound function with permanently bound `this` and optional preset initial arguments",
              "A Promise",
              "A boolean"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`bind()` returns a new exotic function object with permanently locked `this` context."
          }
        ]
      },
      "arrays": {
        "id": "arrays",
        "name": "Arrays & Methods",
        "icon": "📊",
        "desc": "map, filter, reduce, find, slice, and splice.",
        "questions": [
          {
            "q": "Which array method creates a new array populated with the results of calling a provided function?",
            "o": [
              "forEach()",
              "map()",
              "filter()",
              "push()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`map()` transforms each item and returns a new array."
          },
          {
            "q": "Which method mutates the original array in JavaScript?",
            "o": [
              "slice()",
              "concat()",
              "splice()",
              "filter()"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "`splice()` mutates the original array in place by removing or inserting elements."
          },
          {
            "q": "What does `[3, 1, 20].sort()` evaluate to by default in JS?",
            "o": [
              "[1, 3, 20]",
              "[1, 20, 3]",
              "[20, 3, 1]",
              "TypeError"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "By default, `.sort()` converts items to strings and compares UTF-16 code units, placing `'20'` before `'3'`."
          },
          {
            "q": "What does `Array.prototype.reduce()` do?",
            "o": [
              "Shortens array length",
              "Executes a reducer function on each element, accumulating results into a single output value",
              "Filters array",
              "Sorts array"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`reduce((acc, curr) => acc + curr, initialValue)` reduces an array to a single aggregated value."
          },
          {
            "q": "What is the difference between `slice()` and `splice()` in JavaScript?",
            "o": [
              "`slice()` returns a shallow copy of a sub-array without mutating; `splice()` mutates the original array in-place",
              "No difference",
              "splice is for strings only",
              "slice is deprecated"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`slice(start, end)` does not mutate; `splice(start, deleteCount, ...items)` directly modifies the original array."
          },
          {
            "q": "What does `Array.from()` do in JavaScript?",
            "o": [
              "Copies array to clipboard",
              "Creates a new, shallow-copied Array instance from an iterable or array-like object",
              "Clears array",
              "Converts array to string"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Array.from('hello')` converts iterables or objects with a `.length` property into a real Array."
          },
          {
            "q": "What does `Array.prototype.flat(depth)` do in ES2019?",
            "o": [
              "Sorts array",
              "Recursively flattens sub-array elements up to the specified depth",
              "Removes duplicates",
              "Compresses elements"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`flat(1)` flattens 1 level of nested arrays; `flat(Infinity)` flattens all nesting completely."
          },
          {
            "q": "What does `Array.prototype.flatMap()` do?",
            "o": [
              "Maps each element using a mapping function, then flattens the result by 1 level",
              "Sorts and maps",
              "Filters and flattens",
              "Deep clones array"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`flatMap(fn)` is identical to calling `.map(fn).flat(1)` with higher performance."
          },
          {
            "q": "What is the time complexity of `array.unshift(item)` in JavaScript?",
            "o": [
              "O(1)",
              "O(n)",
              "O(log n)",
              "O(n^2)"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`unshift()` adds to the front, requiring re-indexing all subsequent elements, taking O(n) time."
          },
          {
            "q": "How do you remove duplicates from an array `arr` in a single line of modern JavaScript?",
            "o": [
              "`[...new Set(arr)]`",
              "`arr.unique()`",
              "`arr.dedup()`",
              "`Object.keys(arr)`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Passing the array to `new Set()` strips duplicates, and spreading `[...set]` converts it back to an array."
          },
          {
            "q": "What does `Array.isArray(obj)` return for an array?",
            "o": [
              "true",
              "false",
              "undefined",
              "'array'"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Array.isArray()` reliably determines whether the passed value is an Array across iframe boundaries."
          },
          {
            "q": "What does `arr.at(-1)` do in ES2022?",
            "o": [
              "Causes syntax error",
              "Returns the last element of the array using relative negative indexing",
              "Returns first element",
              "Deletes last element"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `.at()` method supports negative integer indexing where `-1` accesses the final item."
          },
          {
            "q": "What does `Array.prototype.findIndex()` return if no element matches the predicate?",
            "o": [
              "null",
              "-1",
              "undefined",
              "false"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`findIndex()` returns the index of the first matching element, or `-1` if no elements match."
          },
          {
            "q": "What is the output of `[1, 2, 3].includes(2)`?",
            "o": [
              "true",
              "false",
              "1",
              "undefined"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`includes()` checks whether an array includes a certain value among its entries, returning true or false."
          },
          {
            "q": "What does `arr.fill(val, start, end)` do?",
            "o": [
              "Fills array with specified static value across index range",
              "Filters array",
              "Expands array size",
              "Replaces nulls only"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`fill(0)` mutates all elements in an array to the specified value in place."
          },
          {
            "q": "What is a typed array in JavaScript (e.g. `Uint8Array`, `Float32Array`)?",
            "o": [
              "TypeScript syntax",
              "Array-like objects providing an efficient mechanism for accessing raw binary buffer data",
              "An array with string types",
              "An immutable array"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Typed arrays represent contiguous memory buffers for WebGL, WebAssembly, and binary streams."
          }
        ]
      },
      "dom": {
        "id": "dom",
        "name": "DOM Manipulation",
        "icon": "🌐",
        "desc": "querySelector, event listeners, bubbling, and element creation.",
        "questions": [
          {
            "q": "Which method selects the first element matching a CSS selector?",
            "o": [
              "document.find()",
              "document.querySelector()",
              "document.getElement()",
              "document.selectFirst()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`querySelector()` matches the first element satisfying the CSS selector."
          },
          {
            "q": "What method registers an event handler on a DOM element?",
            "o": [
              "attach()",
              "addEventListener()",
              "on()",
              "bindEvent()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`addEventListener()` attaches an event listener function to an element."
          },
          {
            "q": "What is the difference between `document.getElementById()` and `document.querySelector()`?",
            "o": [
              "`getElementById()` matches only IDs and is faster; `querySelector()` matches any CSS selector and returns the first match",
              "No difference",
              "querySelector is for classes only",
              "getElementById is deprecated"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`getElementById` specifically looks up elements by ID; `querySelector` parses arbitrary CSS selectors."
          },
          {
            "q": "What does `document.querySelectorAll()` return?",
            "o": [
              "A live HTMLCollection",
              "A static (non-live) NodeList representing matches at the time of query",
              "A JavaScript Array",
              "A single DOM element"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`querySelectorAll` returns a static `NodeList` that does not automatically update when DOM changes occur."
          },
          {
            "q": "What are the three phases of DOM event propagation?",
            "o": [
              "Capturing, Target, and Bubbling",
              "Init, Run, Destroy",
              "Click, Focus, Blur",
              "Capture, Intercept, Execute"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Events travel down from document to target (Capturing phase), hit target (Target phase), then bubble back up (Bubbling phase)."
          },
          {
            "q": "What does `event.stopPropagation()` do?",
            "o": [
              "Prevents browser default action (e.g. link navigation)",
              "Stops the event from traveling further up or down the DOM tree",
              "Removes the event listener",
              "Cancels JavaScript execution"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`stopPropagation()` prevents the event from propagating to parent or ancestor listeners."
          },
          {
            "q": "What does `event.preventDefault()` do?",
            "o": [
              "Stops event bubbling",
              "Prevents the default browser action associated with the event (e.g. form submission or link navigation)",
              "Deletes event target",
              "Hides the element"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`preventDefault()` stops the native default behavior without terminating event propagation."
          },
          {
            "q": "What is event delegation in JavaScript?",
            "o": [
              "Delegating events to Web Workers",
              "Attaching a single event listener to a common parent element to handle events for all current and future child elements using bubbling",
              "Calling events manually",
              "Passing events to iframes"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Event delegation leverages event bubbling to manage events for multiple child items on a single parent handler."
          },
          {
            "q": "What is the difference between `element.innerHTML` and `element.textContent`?",
            "o": [
              "`innerHTML` parses and renders HTML tags (posing XSS risks); `textContent` handles plain unparsed text safely",
              "textContent parses HTML",
              "innerHTML is faster always",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`textContent` safely sets plain text without HTML parsing, preventing XSS injection attacks."
          },
          {
            "q": "What is a `DocumentFragment` in the DOM API?",
            "o": [
              "A broken DOM node",
              "A lightweight, minimal document object stored in memory without a DOM parent used for batching DOM inserts",
              "A browser frame",
              "A CSS stylesheet"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Appending elements to a `DocumentFragment` and inserting it once prevents multiple browser reflows and repaints."
          },
          {
            "q": "What is browser Reflow (layout) vs Repaint?",
            "o": [
              "Reflow computes geometric positions and dimensions; Repaint updates visual pixels (colors, shadows) without changing layout",
              "Repaint is slower",
              "Reflow is for SVG only",
              "No difference"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Reflow recalculates element dimensions and positions; repaint redraws pixels on the screen."
          },
          {
            "q": "What method removes a DOM element from the document tree?",
            "o": [
              "element.delete()",
              "element.remove()",
              "document.remove(element)",
              "element.destroy()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`element.remove()` detaches the node from its parent in the DOM tree."
          },
          {
            "q": "How do you read or write custom `data-*` attributes on a DOM element in JavaScript?",
            "o": [
              "element.customData",
              "element.dataset (e.g. `element.dataset.userId`)",
              "element.getData()",
              "element.attributes.custom"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `dataset` property exposes all `data-*` attributes in camelCase format."
          },
          {
            "q": "What does `classList.toggle('active')` do on an element?",
            "o": [
              "Adds 'active' class if absent; removes it if present",
              "Deletes all classes",
              "Renames class",
              "Replaces class"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`toggle()` automatically adds or removes the class depending on whether it currently exists."
          },
          {
            "q": "What is the Intersection Observer API used for in modern web development?",
            "o": [
              "Intersecting arrays",
              "Asynchronously observing changes in the intersection of a target element with an ancestor viewport (lazy loading, infinite scroll)",
              "CSS 3D math",
              "Network interception"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`IntersectionObserver` efficiently detects when elements enter or exit the visible screen area without scroll listeners."
          },
          {
            "q": "What event fires when the initial HTML document has been completely parsed without waiting for stylesheets or images?",
            "o": [
              "load",
              "DOMContentLoaded",
              "readystatechange",
              "beforeunload"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`DOMContentLoaded` fires as soon as the DOM tree is constructed, before images and subresources finish loading."
          }
        ]
      },
      "async": {
        "id": "async",
        "name": "Async JS & Promises",
        "icon": "⚡",
        "desc": "Promises, async/await, event loop, and fetch API.",
        "questions": [
          {
            "q": "What are the three states of a JavaScript Promise?",
            "o": [
              "Waiting, Active, Done",
              "Pending, Fulfilled, Rejected",
              "Init, Running, Error",
              "Open, Processing, Closed"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Promises are always in one of three states: pending, fulfilled, or rejected."
          },
          {
            "q": "What does an `async` function always return?",
            "o": [
              "A boolean",
              "A Promise",
              "Undefined",
              "The value synchronously"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`async` functions automatically wrap their return values in a Promise."
          },
          {
            "q": "What is the JavaScript Event Loop?",
            "o": [
              "A while loop in source code",
              "The runtime mechanism that coordinates the execution of synchronous code, microtasks, and macrotasks on the single call stack",
              "A timer utility",
              "A thread pool"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The Event Loop continuously checks the call stack and dequeues tasks from microtask and macrotask queues."
          },
          {
            "q": "Which queue has higher priority in the JavaScript event loop: Microtasks or Macrotasks?",
            "o": [
              "Macrotasks (e.g. setTimeout)",
              "Microtasks (e.g. Promise.then, queueMicrotask) run first before the next macrotask",
              "Equal priority (round-robin)",
              "Depends on browser"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "The microtask queue is completely drained after each task before any macrotask (like setTimeout) is executed."
          },
          {
            "q": "What does `Promise.all([p1, p2])` do if any of the promises rejects?",
            "o": [
              "Waits for all to finish",
              "Rejects immediately with the reason of the first promise that rejected (fail-fast)",
              "Returns undefined",
              "Retries rejected promise"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Promise.all()` rejects immediately upon the first rejection without waiting for other promises."
          },
          {
            "q": "What does `Promise.allSettled(promises)` return in ES2020?",
            "o": [
              "An array of outcome objects with `{ status: 'fulfilled' | 'rejected', value/reason }` after all promises settle",
              "Only successful results",
              "Rejects on first error",
              "A single boolean"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Promise.allSettled()` waits for all promises to resolve or reject, returning complete statuses."
          },
          {
            "q": "What does `Promise.race(promises)` do?",
            "o": [
              "Settles with the result of the fastest promise (whether fulfilled or rejected)",
              "Settles with the fastest fulfilled promise only",
              "Runs promises in parallel threads",
              "Times out after 5s"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Promise.race()` takes the outcome of the first promise to settle, whether it succeeds or fails."
          },
          {
            "q": "What does `Promise.any(promises)` do in ES2021?",
            "o": [
              "Fulfills with the first promise that fulfills, ignoring rejections unless all reject (AggregateError)",
              "Rejects on first rejection",
              "Returns boolean",
              "Runs synchronously"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`Promise.any()` resolves with the first successful promise; if all fail, it raises an `AggregateError`."
          },
          {
            "q": "What happens if an `await` expression is used on a rejected Promise inside an async function?",
            "o": [
              "Returns null",
              "Throws the rejection error, which can be caught using a standard `try...catch` block",
              "Crashes the browser tab",
              "Halts thread permanently"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`await` unwraps the Promise value or throws the rejected error, allowing standard `try/catch` handling."
          },
          {
            "q": "What does `setTimeout(fn, 0)` accomplish?",
            "o": [
              "Executes `fn` immediately synchronously",
              "Schedules `fn` to run in the macrotask queue after current call stack and microtasks clear",
              "Pauses JavaScript for 1 millisecond",
              "Cancels task"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`setTimeout(fn, 0)` queues execution for the next available event loop macrotask cycle."
          },
          {
            "q": "What does the `fetch()` API return?",
            "o": [
              "Parsed JSON object",
              "A Promise that resolves to a `Response` object",
              "An XMLHttpRequest object",
              "String HTML"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`fetch()` initiates a network request and returns a Promise resolving to the HTTP `Response`."
          },
          {
            "q": "Does `fetch()` reject its Promise on HTTP 404 or 500 error responses?",
            "o": [
              "Yes, throws an HTTPError",
              "No, it resolves normally with `response.ok === false`; it rejects only on network failures",
              "Only on 500 errors",
              "Only in CORS errors"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`fetch()` rejects only on actual network failures (e.g. disconnected, DNS failure); 4xx/5xx responses resolve normally."
          },
          {
            "q": "What is an `AbortController` used for in modern JavaScript?",
            "o": [
              "Cancelling DOM animations",
              "Aborting one or more asynchronous web requests (like fetch) via an `AbortSignal`",
              "Shutting down Node server",
              "Terminating worker threads"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`AbortController.abort()` cancels in-flight fetch requests and event listeners."
          },
          {
            "q": "What is a Web Worker in JavaScript?",
            "o": [
              "A browser extension",
              "A background script executing in an isolated OS thread without access to the DOM",
              "A CSS preprocessor",
              "A Service Worker only"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Web Workers run CPU-intensive scripts on separate threads, communicating via `postMessage`."
          },
          {
            "q": "What is the return value of `queueMicrotask(callback)` used for?",
            "o": [
              "A Promise",
              "Explicitly queues a microtask function to execute before the browser yields control to rendering",
              "A timer ID",
              "A thread handle"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`queueMicrotask()` safely enqueues microtasks directly without constructing synthetic Promise instances."
          },
          {
            "q": "What is top-level `await` supported in modern ES modules?",
            "o": [
              "Using await outside of async functions at the top level of a module",
              "Await in HTML tags",
              "Await in global eval",
              "Syntax error"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Top-level `await` allows modules to act as asynchronous modules, pausing dependent module execution until resolved."
          }
        ]
      }
    }
  },
  "cpp": {
    "id": "cpp",
    "name": "C++",
    "icon": "🅲⁺⁺",
    "category": "systems",
    "description": "High-performance systems programming with classes, templates, and STL.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "C++ Basics",
        "icon": "🔰",
        "desc": "Cin, cout, namespaces, references, and headers.",
        "questions": [
          {
            "q": "Which stream object is used to print output to standard console in C++?",
            "o": [
              "cin",
              "cout",
              "printf",
              "out"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`std::cout` represents the standard character output stream."
          },
          {
            "q": "Which header is required for `cin` and `cout`?",
            "o": [
              "<stdio.h>",
              "<iostream>",
              "<stdlib.h>",
              "<stream>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`#include <iostream>` provides the standard stream objects."
          },
          {
            "q": "What is RAII (Resource Acquisition Is Initialization) in C++?",
            "o": [
              "A compiler flag",
              "A core idiom where resource lifecycle is tied to object lifetime (acquired in constructor, released in destructor)",
              "A runtime profiler",
              "A memory allocator"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "RAII guarantees resource cleanup (memory, file handles, locks) when stack objects go out of scope."
          },
          {
            "q": "What does the `auto` keyword do in modern C++ (C++11 and newer)?",
            "o": [
              "Declares storage class",
              "Deduces variable type automatically from its initializer expression at compile time",
              "Dynamic typing",
              "Allocates on heap"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Modern C++ uses `auto` for compile-time type deduction (e.g. `auto it = vec.begin();`)."
          },
          {
            "q": "What is the difference between `std::endl` and `'\\n'` in C++?",
            "o": [
              "`std::endl` inserts a newline AND explicitly flushes the output stream buffer; `'\\n'` only inserts a newline character",
              "No difference",
              "std::endl is faster",
              "'\\n' is C only"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`std::endl` forces a buffer flush, which can degrade performance in tight loops compared to `'\\n'`."
          },
          {
            "q": "What does `constexpr` indicate in modern C++?",
            "o": [
              "Read-only variable",
              "The expression or function can be evaluated at compile time",
              "Variable in ROM",
              "Constant reference"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`constexpr` signals that a value or function is capable of full compile-time evaluation."
          },
          {
            "q": "What is a namespace in C++?",
            "o": [
              "A memory segment",
              "A declarative region that provides a scope to identifiers to prevent name collisions",
              "A file header",
              "A class interface"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Namespaces (e.g. `namespace my_lib { ... }`) prevent name conflicts in large programs."
          },
          {
            "q": "What does `nullptr` replace from older C++ standards?",
            "o": [
              "void*",
              "NULL / 0, providing a strongly-typed pointer literal of type `std::nullptr_t`",
              "EMPTY",
              "NIL"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`nullptr` resolves ambiguity where integer 0 was used for null pointers in function overloads."
          },
          {
            "q": "What is pass-by-reference in C++ using `&` (e.g. `void func(int &x)`)?",
            "o": [
              "Passes a pointer address value",
              "Passes an alias to the original variable, allowing in-place modification without copying",
              "Copies the integer",
              "Allocates reference on heap"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "References bind directly to the caller's variable without the overhead of copying or pointer dereferencing syntax."
          },
          {
            "q": "What does `std::string` provide over C-style `char*` strings?",
            "o": [
              "Automatic memory management, dynamic resizing, and safe member methods like .size()",
              "Only fixed size",
              "Slower execution always",
              "UTF-32 only"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`std::string` manages its own memory buffer and eliminates manual buffer overflows."
          },
          {
            "q": "What header is required for standard mathematical functions like `sqrt` and `pow` in C++?",
            "o": [
              "<math>",
              "<cmath>",
              "<algorithm>",
              "<numeric>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<cmath>` provides standard math functions inside the `std::` namespace."
          },
          {
            "q": "What is range-based for loop syntax in C++11?",
            "o": [
              "`for (const auto &item : container)`",
              "`foreach (item in container)`",
              "`for (item of container)`",
              "`for (item in container)`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Range-based for loops iterate cleanly over any container with `.begin()` and `.end()`."
          },
          {
            "q": "What does `decltype(expr)` do in C++11?",
            "o": [
              "Inspects the declared type of an entity or expression at compile time",
              "Dynamic cast",
              "Converts type to string",
              "Deletes type"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`decltype` extracts the exact compile-time type of an expression."
          },
          {
            "q": "What is the result of `10 / 4` vs `10.0 / 4` in C++?",
            "o": [
              "2 and 2.5",
              "2.5 and 2.5",
              "2 and 2",
              "2.0 and 2.5"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Integer division truncates to `2`; mixed float division promotes to `2.5`."
          },
          {
            "q": "What does `using namespace std;` do and why is it often discouraged in header files?",
            "o": [
              "Imports std symbols into global namespace, risking widespread symbol name collisions",
              "Causes compiler crash",
              "Slows compilation by 10x",
              "Disables templates"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Polluting the global namespace with `using namespace std;` in headers forces collisions on all files including that header."
          },
          {
            "q": "What is structured binding introduced in C++17?",
            "o": [
              "JSON parsing",
              "Unpacking tuple/struct/array members into named variables: `auto [x, y] = point;`",
              "Binary layout",
              "Struct inheritance"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Structured bindings allow unpacking values into distinct variables in a single statement."
          }
        ]
      },
      "oop": {
        "id": "oop",
        "name": "OOP & Classes",
        "icon": "🧩",
        "desc": "Constructors, destructors, access specifiers, and operator overloading.",
        "questions": [
          {
            "q": "What is the default access specifier for members of a `class` in C++?",
            "o": [
              "public",
              "private",
              "protected",
              "friend"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In C++, `class` members are private by default; `struct` members are public by default."
          },
          {
            "q": "What symbol precedes the destructor name in C++?",
            "o": [
              "!",
              "~",
              "#",
              "$"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Destructors are denoted by a tilde `~` before the class name (e.g. `~MyClass()`)."
          },
          {
            "q": "What is the difference between `struct` and `class` in C++?",
            "o": [
              "`struct` members and base classes are `public` by default; `class` members are `private` by default",
              "struct cannot have methods",
              "class cannot use templates",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The only difference in C++ is default access visibility: `public` for struct, `private` for class."
          },
          {
            "q": "What does the `virtual` keyword on a member function do in C++?",
            "o": [
              "Makes function fast",
              "Enables dynamic polymorphism so the most-derived override is invoked via base pointers/references",
              "Makes function pure abstract",
              "Inlines function"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`virtual` enables dynamic dispatch through virtual method tables (vtable)."
          },
          {
            "q": "What is a pure virtual function in C++?",
            "o": [
              "A function with empty braces `{}`",
              "A virtual function declared with `= 0;` that must be overridden by concrete subclasses",
              "A static function",
              "A template function"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`virtual void draw() = 0;` makes the class an abstract class that cannot be instantiated directly."
          },
          {
            "q": "Why should a base class destructor always be declared `virtual` if derived objects are deleted via base pointers?",
            "o": [
              "To prevent memory leaks by ensuring the derived class destructor is invoked properly",
              "Compiler error otherwise",
              "Required by RAII",
              "Makes destructor public"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Deleting a derived object via a non-virtual base pointer causes undefined behavior and skips derived destructors."
          },
          {
            "q": "What is the 'Rule of Five' in modern C++?",
            "o": [
              "5 pillars of OOP",
              "If you define any of: Destructor, Copy Constructor, Copy Assignment, Move Constructor, Move Assignment, you should consider defining all five",
              "5 lines per function",
              "5 inheritance levels"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Custom resource management requires managing both copy and move semantics alongside destruction."
          },
          {
            "q": "What does the `override` specifier do on a member function in C++11?",
            "o": [
              "Enables virtual dispatch",
              "Ensures the compiler verifies that the method strictly overrides a virtual function in a base class",
              "Forces method inlining",
              "Suppresses warnings"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`override` catches spelling and parameter type discrepancies at compile time."
          },
          {
            "q": "What does the `final` specifier do when applied to a class or virtual function in C++11?",
            "o": [
              "Prevents class inheritance or prevents further overriding of the virtual method",
              "Makes variable constant",
              "Destroys class",
              "Freezes memory"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`final` stops class inheritance or prevents subclasses from overriding that specific virtual method."
          },
          {
            "q": "What is a `friend` function or class in C++?",
            "o": [
              "A public function",
              "A function or class granted access to private and protected members of another class",
              "An inherited class",
              "A friendly namespace"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`friend` declarations grant external functions or classes privileged access to private members."
          },
          {
            "q": "What is an initialization list in a C++ constructor?",
            "o": [
              "An array of constructors",
              "Syntax `: member(val), ...` before the constructor body to initialize members directly without default construction",
              "A static list",
              "A macro list"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Member initializer lists initialize fields directly, required for `const` and reference members."
          },
          {
            "q": "What is operator overloading in C++?",
            "o": [
              "Redefining operators like `+`, `==`, `<<` for user-defined types using `operator+()` syntax",
              "Calling multiple operators",
              "Compiler error",
              "Deleting operators"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "C++ allows custom types to define intuitive operator semantics via `ReturnType operator+(const T&)`."
          },
          {
            "q": "What is the Diamond Problem in C++ multiple inheritance, and how is it solved?",
            "o": [
              "Duplicate bases; resolved by using `virtual` inheritance (`class B : virtual public A`)",
              "Memory leaks; solved by smart pointers",
              "Circular calls; solved by friends",
              "Compiler bug"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`virtual` base classes ensure only one shared base subobject exists in the derived instance."
          },
          {
            "q": "What does the `explicit` keyword do on a single-argument constructor in C++?",
            "o": [
              "Makes constructor public",
              "Prevents the compiler from using the constructor for implicit conversions",
              "Forces explicit heap allocation",
              "Speeds up instantiation"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`explicit` stops accidental implicit conversions (e.g. converting `int` to `MyClass`)."
          },
          {
            "q": "What is move semantics in C++11 enabled by rvalue references (`&&`)?",
            "o": [
              "Moving files on disk",
              "Transferring ownership of internal resources from a temporary object rather than deep copying",
              "Physical RAM movement",
              "Thread switching"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Move semantics (`std::move`) transfers pointers and buffers from temporaries without expensive deep copies."
          },
          {
            "q": "What is a vtable (virtual method table) in C++?",
            "o": [
              "An array of function pointers created by the compiler for dynamic dispatch of virtual methods",
              "A hash table",
              "A database table",
              "A template table"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Each class with virtual functions has a vtable pointing to its virtual function implementations."
          }
        ]
      },
      "stl": {
        "id": "stl",
        "name": "STL Containers",
        "icon": "🧰",
        "desc": "vector, map, set, iterators, and algorithms.",
        "questions": [
          {
            "q": "Which STL container represents a dynamically resizable array?",
            "o": [
              "std::array",
              "std::vector",
              "std::list",
              "std::deque"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`std::vector` is a sequence container encapsulating dynamic arrays."
          },
          {
            "q": "What is the average time complexity for insertion into `std::unordered_map`?",
            "o": [
              "O(log n)",
              "O(1)",
              "O(n)",
              "O(n^2)"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`std::unordered_map` uses hashing to provide average O(1) operations."
          },
          {
            "q": "What is the time complexity of lookup in `std::map` vs `std::unordered_map`?",
            "o": [
              "`std::map` is O(log n) (Red-Black Tree); `std::unordered_map` is average O(1) (Hash Table)",
              "Both are O(1)",
              "Both are O(log n)",
              "std::map is faster"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`std::map` maintains sorted order via a binary search tree; `std::unordered_map` uses hashing."
          },
          {
            "q": "Which method adds an element to the end of a `std::vector` in C++?",
            "o": [
              "add()",
              "push_back() (or emplace_back())",
              "append()",
              "insert_end()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`push_back()` appends elements to the end of a dynamic array vector."
          },
          {
            "q": "What is the advantage of `emplace_back()` over `push_back()` in modern C++?",
            "o": [
              "Constructs the element directly in-place in vector memory, avoiding temporary copies or moves",
              "Runs in separate thread",
              "Allocates on stack",
              "No difference"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`emplace_back()` forwards arguments directly to the constructor in-place."
          },
          {
            "q": "What is an iterator invalidation in C++ STL?",
            "o": [
              "Deleting iterator",
              "When container modifications (like vector reallocation) render existing iterators/pointers dangling and unsafe",
              "A syntax error",
              "Memory leak"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Operations like adding to a vector when capacity is exceeded reallocate storage, invalidating existing iterators."
          },
          {
            "q": "Which algorithm from `<algorithm>` sorts elements in ascending order?",
            "o": [
              "std::order()",
              "std::sort(begin, end)",
              "std::qsort()",
              "std::arrange()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`std::sort(vec.begin(), vec.end())` sorts containers in O(n log n) time."
          },
          {
            "q": "What does `std::find(begin, end, val)` return if the value is NOT found?",
            "o": [
              "NULL",
              "-1",
              "end iterator (the past-the-end position)",
              "Throws exception"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "If no match exists, `std::find()` returns the `last` iterator argument (`end`)."
          },
          {
            "q": "What is `std::deque` in C++?",
            "o": [
              "A double-ended queue providing fast O(1) insertions and deletions at both the beginning and end",
              "A fixed-size array",
              "A binary heap",
              "A priority queue"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`std::deque` allocates chunks of contiguous memory, allowing efficient expansion at both ends."
          },
          {
            "q": "What container adapter provides LIFO (Last-In, First-Out) operations in C++?",
            "o": [
              "std::queue",
              "std::stack",
              "std::vector",
              "std::deque"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`std::stack` provides `.push()`, `.pop()`, and `.top()` conforming to LIFO order."
          },
          {
            "q": "What data structure does `std::priority_queue` implement by default in C++?",
            "o": [
              "A max-heap",
              "A min-heap",
              "A sorted array",
              "A linked list"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "By default, `std::priority_queue` is a max-heap where `.top()` returns the largest element."
          },
          {
            "q": "What is `std::set` in C++?",
            "o": [
              "An associative container containing a sorted set of unique objects",
              "A hash set",
              "A multiset allowing duplicates",
              "An unsorted list"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`std::set` stores unique elements in ascending sorted order using a balanced binary tree."
          },
          {
            "q": "What header defines lambda expressions, `std::function`, and `std::bind` in C++?",
            "o": [
              "<functional>",
              "<algorithm>",
              "<utility>",
              "<lambda>"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<functional>` provides polymorphic function wrappers and function objects."
          },
          {
            "q": "What does `std::string_view` introduce in C++17?",
            "o": [
              "A non-owning, lightweight view of a string buffer avoiding unnecessary heap memory allocations",
              "A mutable string",
              "A regex parser",
              "An encrypted string"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`std::string_view` consists of a pointer and a length, passing string slices without copying."
          },
          {
            "q": "What does `std::optional<T>` provide in C++17?",
            "o": [
              "A type that may or may not contain a valid value, avoiding sentinel values or null pointers",
              "A pointer wrapper",
              "A thread lock",
              "A dynamic array"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`std::optional` encapsulates optional return values cleanly (`opt.has_value()`, `opt.value()`)."
          },
          {
            "q": "What does `std::accumulate(begin, end, init)` from `<numeric>` do?",
            "o": [
              "Multiplies array",
              "Calculates the sum of elements plus the initial value",
              "Sorts numbers",
              "Finds average"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`std::accumulate()` performs a left fold/reduction over the iterator range."
          }
        ]
      },
      "pointers": {
        "id": "pointers",
        "name": "Pointers & References",
        "icon": "🎯",
        "desc": "Raw pointers, references, smart pointers (unique_ptr, shared_ptr).",
        "questions": [
          {
            "q": "Which smart pointer owns and manages another object through unique ownership?",
            "o": [
              "std::shared_ptr",
              "std::unique_ptr",
              "std::weak_ptr",
              "std::auto_ptr"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`std::unique_ptr` maintains sole ownership of a resource."
          },
          {
            "q": "Can a C++ reference `int &ref = x;` be reseated to refer to another variable?",
            "o": [
              "Yes, anytime",
              "No, references cannot be reseated after binding",
              "Only with std::move",
              "Only if declared mutable"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "References must be initialized on declaration and can never be rebound to another object."
          },
          {
            "q": "What is the difference between `std::unique_ptr` and `std::shared_ptr` in C++?",
            "o": [
              "`unique_ptr` has exclusive ownership; `shared_ptr` maintains reference counting for shared ownership",
              "unique_ptr is slower",
              "shared_ptr cannot be moved",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`unique_ptr` cannot be copied (move-only); `shared_ptr` shares ownership via an atomic reference count."
          },
          {
            "q": "What does `std::make_unique<T>()` provide over `new T()`?",
            "o": [
              "Exception-safety and eliminates explicit `new` keyword",
              "Allocates on GPU",
              "Faster runtime",
              "Disables destructor"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`std::make_unique` provides exception-safe dynamic allocation without raw `new`."
          },
          {
            "q": "What is a `std::weak_ptr` used for in C++?",
            "o": [
              "A pointer that holds no memory",
              "Breaks circular reference cycles in `shared_ptr` by holding a non-owning reference",
              "A raw pointer",
              "A deprecated smart pointer"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Circular references between `shared_ptr` prevent ref counts from reaching 0; `weak_ptr` breaks the cycle."
          },
          {
            "q": "How do you convert a `std::weak_ptr` to a `std::shared_ptr` to safely access its object?",
            "o": [
              "Using the `.lock()` method",
              "Using get()",
              "Using dynamic_cast",
              "Direct assignment"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`weak.lock()` returns a valid `shared_ptr` if the object is still alive, or empty shared_ptr if destroyed."
          },
          {
            "q": "What happens when a `std::unique_ptr` goes out of scope?",
            "o": [
              "Memory leak",
              "Its destructor automatically deletes the owned heap object and frees memory",
              "Transfers to global scope",
              "Throws exception"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "When a `unique_ptr` goes out of scope, it automatically invokes `delete` on the managed resource."
          },
          {
            "q": "Can a `std::unique_ptr` be copied using assignment `p1 = p2`?",
            "o": [
              "Yes, creates second reference",
              "No, copy constructor and copy assignment are deleted (must use `std::move`)",
              "Only if const",
              "Only in C++20"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`unique_ptr` enforces strict sole ownership; copying is forbidden, but moving (`std::move`) is permitted."
          },
          {
            "q": "What does `smartPtr.get()` return?",
            "o": [
              "The size of memory",
              "The underlying raw pointer managed by the smart pointer",
              "Reference count",
              "A copy of object"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`.get()` exposes the raw pointer for APIs requiring legacy C-style pointer parameters."
          },
          {
            "q": "What is a dangling reference in C++?",
            "o": [
              "A reference bound to an object that has already been deallocated or went out of scope",
              "A null pointer",
              "A static reference",
              "A circular link"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Accessing a dangling reference leads to undefined behavior because the target object no longer exists."
          },
          {
            "q": "What does `std::move(ptr)` do to a `std::unique_ptr`?",
            "o": [
              "Transfers ownership to the target variable and resets the source pointer to `nullptr`",
              "Copies object",
              "Frees memory",
              "Clones pointer"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Moving a unique_ptr hands over the resource pointer and sets the original instance to null."
          },
          {
            "q": "What is the overhead of a `std::unique_ptr` compared to a raw pointer?",
            "o": [
              "Double memory",
              "Zero overhead (same size and performance as a raw pointer)",
              "50% slower",
              "Reference count block"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`std::unique_ptr` is a zero-cost abstraction with identical memory footprint and speed to a raw pointer."
          },
          {
            "q": "What is `nullptr_t` in C++?",
            "o": [
              "The type of the null pointer literal `nullptr`",
              "A void pointer",
              "An integer type",
              "A boolean"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`std::nullptr_t` is the distinct type of `nullptr`, allowing clean overload resolution."
          },
          {
            "q": "What is a memory leak and how do smart pointers solve it?",
            "o": [
              "Memory allocated but never freed; smart pointers automatically deallocate memory via RAII when destroyed",
              "Buffer overflow",
              "Stack corruption",
              "CPU throttling"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Smart pointers ensure that `delete` is called deterministically when objects leave scope."
          },
          {
            "q": "What does `dynamic_cast<T*>` do in C++?",
            "o": [
              "Performs runtime polymorphic downcasting, returning `nullptr` if the cast is invalid",
              "Fast compile-time cast",
              "Casts numbers to pointers",
              "Reinterprets raw bytes"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`dynamic_cast` safely casts pointers in an inheritance hierarchy by inspecting RTTI."
          },
          {
            "q": "What does `reinterpret_cast<T*>` do?",
            "o": [
              "Reinterprets raw bit patterns between unrelated pointer types without type safety checks",
              "Safely casts base to derived",
              "Removes const qualifier",
              "Converts to string"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`reinterpret_cast` converts any pointer type to any other pointer type blindly at the bit level."
          }
        ]
      }
    }
  },
  "html": {
    "id": "html",
    "name": "HTML",
    "icon": "🌐",
    "category": "web",
    "description": "HyperText Markup Language, the standard structure and backbone of web documents.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Basics & Structure",
        "icon": "🔰",
        "desc": "Doctype, head, body, meta tags, and element attributes.",
        "questions": [
          {
            "q": "What does HTML stand for?",
            "o": [
              "Hyper Trainer Marking Language",
              "HyperText Markup Language",
              "Hyper Tool Multi Language",
              "Home Tool Markup Language"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "HTML stands for HyperText Markup Language."
          },
          {
            "q": "Which tag declares the document type for HTML5?",
            "o": [
              "<!DOCTYPE html>",
              "<html5>",
              "<!DOCTYPE HTML5>",
              "<doctype>"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<!DOCTYPE html>` is the standard declaration for HTML5."
          },
          {
            "q": "Which attribute specifies an alternative text for an image if the image cannot be displayed?",
            "o": [
              "title",
              "alt",
              "src",
              "desc"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `alt` attribute provides fallback text and accessibility support for screen readers."
          },
          {
            "q": "Which tag is used to create an interactive hyperlink in HTML?",
            "o": [
              "<link>",
              "<a>",
              "<href>",
              "<url>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The anchor tag `<a>` defines a hyperlink using its `href` attribute."
          },
          {
            "q": "What is the purpose of the `<meta charset=\"UTF-8\">` tag in HTML head?",
            "o": [
              "Sets page background",
              "Declares the character encoding for the HTML document",
              "Links stylesheets",
              "Sets page title"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<meta charset=\"UTF-8\">` ensures characters from all human languages are decoded correctly."
          },
          {
            "q": "What does the `target=\"_blank\"` attribute on an anchor tag do?",
            "o": [
              "Opens the linked document in a new tab or window",
              "Opens link in the same frame",
              "Downloads the file",
              "Blocks popups"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`target=\"_blank\"` directs the browser to open the hyperlink in a fresh tab or window."
          },
          {
            "q": "Why should `rel=\"noopener noreferrer\"` accompany `target=\"_blank\"`?",
            "o": [
              "Improves CSS styling",
              "Security protection against tab-nabbing vulnerabilities via `window.opener`",
              "Speeds up download",
              "Required by HTML5 validator"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`rel=\"noopener\"` prevents the target page from accessing the originating page via `window.opener`."
          },
          {
            "q": "Which HTML tag is used to define an unordered (bulleted) list?",
            "o": [
              "<ol>",
              "<ul>",
              "<li>",
              "<list>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<ul>` creates an unordered list; `<ol>` creates an ordered numbered list."
          },
          {
            "q": "What is the correct tag for the largest, highest-level heading in HTML?",
            "o": [
              "<heading>",
              "<h6>",
              "<h1>",
              "<head>"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`<h1>` represents the top-level main heading on a webpage."
          },
          {
            "q": "What tag specifies a line break in text without creating a new paragraph?",
            "o": [
              "<lb>",
              "<break>",
              "<br>",
              "<hr>"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`<br>` inserts a single carriage line break within text blocks."
          },
          {
            "q": "What tag renders a thematic break or horizontal rule across a webpage?",
            "o": [
              "<hr>",
              "<line>",
              "<divider>",
              "<br>"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<hr>` represents a thematic break between paragraphs of an HTML page."
          },
          {
            "q": "What does the `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` tag do?",
            "o": [
              "Configures viewport scaling for responsive mobile displays",
              "Enables camera",
              "Scales images to 4K",
              "Loads CSS"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The viewport meta tag matches screen width and prevents initial zoom distortion on mobile devices."
          },
          {
            "q": "Which element is used to embed audio files in HTML5?",
            "o": [
              "<sound>",
              "<audio>",
              "<media>",
              "<music>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<audio controls src=\"...\">` embeds playable audio files natively."
          },
          {
            "q": "Which element embeds vector graphics directly in HTML documents?",
            "o": [
              "<canvas>",
              "<svg>",
              "<img>",
              "<graphic>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<svg>` embeds Scalable Vector Graphics directly in HTML with DOM access."
          },
          {
            "q": "What is the difference between `<script defer>` and `<script async>`?",
            "o": [
              "`defer` executes scripts in order after DOM parsing finishes; `async` executes immediately once downloaded",
              "No difference",
              "async is for CSS",
              "defer blocks DOM"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`defer` preserves script execution order and waits for DOM readiness; `async` runs as soon as downloaded."
          },
          {
            "q": "What does the `disabled` attribute do when placed on a button?",
            "o": [
              "Hides the button",
              "Prevents user clicks and interactions",
              "Turns button red",
              "Animates button"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`disabled` deactivates form controls and buttons, blocking user interaction."
          }
        ]
      },
      "forms": {
        "id": "forms",
        "name": "Forms & Inputs",
        "icon": "📝",
        "desc": "Form tag, inputs, labels, buttons, validation, and submission.",
        "questions": [
          {
            "q": "Which input type creates a password field that hides user input?",
            "o": [
              "type='secret'",
              "type='password'",
              "type='hidden'",
              "type='secure'"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<input type='password'>` masks input characters."
          },
          {
            "q": "Which attribute specifies where to send form-data when a form is submitted?",
            "o": [
              "method",
              "action",
              "target",
              "href"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `action` attribute specifies the URL processing the form data."
          },
          {
            "q": "Which input attribute specifies placeholder text inside an input field before the user enters a value?",
            "o": [
              "hint",
              "placeholder",
              "label",
              "value"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`placeholder=\"Enter text...\"` displays temporary ghost text."
          },
          {
            "q": "Which attribute marks an input field as mandatory before form submission?",
            "o": [
              "validate",
              "required",
              "mandatory",
              "check"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `required` attribute triggers browser form validation if left empty."
          },
          {
            "q": "What HTTP method should be used for sensitive data (like passwords) in form submission?",
            "o": [
              "GET",
              "POST",
              "HEAD",
              "OPTIONS"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`method=\"POST\"` sends data in the HTTP request body rather than visible in URL query strings."
          },
          {
            "q": "Which element creates a drop-down selection list in an HTML form?",
            "o": [
              "<dropdown>",
              "<select>",
              "<list>",
              "<input type=\"menu\">"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<select>` contains `<option>` elements to construct drop-down pickers."
          },
          {
            "q": "What is the purpose of the `<label for=\"inputId\">` tag?",
            "o": [
              "Styles the text in bold",
              "Associates text label with an input, expanding clickable hit area for accessibility",
              "Validates input",
              "Submits the form"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Clicking a `<label>` linked via `for` focuses or toggles the associated input control."
          },
          {
            "q": "Which input type allows selecting multiple options simultaneously from a group?",
            "o": [
              "type=\"radio\"",
              "type=\"checkbox\"",
              "type=\"select\"",
              "type=\"multi\""
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Checkboxes permit multiple independent selections; radio buttons allow only one per group."
          },
          {
            "q": "What attribute restricts the type of files that can be uploaded via `<input type=\"file\">`?",
            "o": [
              "filter",
              "accept",
              "filetype",
              "allow"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`accept=\"image/png, .pdf\"` restricts file picker selections to matching MIME types or extensions."
          },
          {
            "q": "What does `novalidate` attribute on a `<form>` tag do?",
            "o": [
              "Submits form without server validation",
              "Disables native browser constraint validation on submit",
              "Encrypts inputs",
              "Blocks submission"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`novalidate` prevents the browser's default validation tooltips from firing, allowing custom JS validation."
          },
          {
            "q": "What input type creates a numeric stepper control?",
            "o": [
              "type=\"number\"",
              "type=\"digits\"",
              "type=\"integer\"",
              "type=\"calc\""
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<input type=\"number\" min=\"1\" max=\"100\" step=\"1\">` provides numeric inputs."
          },
          {
            "q": "What element provides multi-line text input in an HTML form?",
            "o": [
              "<input type=\"multiline\">",
              "<textarea>",
              "<textbox>",
              "<text>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<textarea rows=\"4\" cols=\"50\"></textarea>` allows multi-line plain text editing."
          },
          {
            "q": "What is `<fieldset>` used for in HTML forms?",
            "o": [
              "Grouping related form controls and labels together",
              "Submitting form",
              "Creating passwords",
              "Adding background colors"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<fieldset>` groups related form fields and is commonly paired with a `<legend>` caption."
          },
          {
            "q": "What input attribute specifies a regular expression pattern for client-side validation?",
            "o": [
              "regex",
              "pattern",
              "rule",
              "validate"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`pattern=\"[0-9]{5}\"` enforces regex matching during browser form validation."
          },
          {
            "q": "What does `autocomplete=\"off\"` do?",
            "o": [
              "Disables JavaScript",
              "Instructs the browser not to suggest or auto-fill previously stored values for the input",
              "Clears cache",
              "Hides input"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`autocomplete=\"off\"` requests that browsers do not provide auto-fill suggestions."
          },
          {
            "q": "What enctype attribute value is required on a `<form>` when uploading binary files?",
            "o": [
              "application/x-www-form-urlencoded",
              "multipart/form-data",
              "text/plain",
              "application/json"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`enctype=\"multipart/form-data\"` encodes file uploads as separate MIME message parts."
          }
        ]
      },
      "semantic": {
        "id": "semantic",
        "name": "Semantic HTML",
        "icon": "🏷️",
        "desc": "header, nav, article, section, aside, footer, and accessibility.",
        "questions": [
          {
            "q": "Which semantic tag represents navigation links in HTML5?",
            "o": [
              "<menu>",
              "<nav>",
              "<links>",
              "<navigate>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<nav>` is the semantic container for primary navigation links."
          },
          {
            "q": "Which HTML5 tag is designed for self-contained, syndicate-ready content?",
            "o": [
              "<div>",
              "<section>",
              "<article>",
              "<aside>"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "`<article>` defines independent, reusable pieces of content."
          },
          {
            "q": "Which semantic tag represents tangential or side content related to surrounding content?",
            "o": [
              "<sidebar>",
              "<aside>",
              "<section>",
              "<div>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<aside>` represents content indirectly related to main content (sidebars, callouts)."
          },
          {
            "q": "Which tag represents the primary introductory content or navigational banner of a document or section?",
            "o": [
              "<head>",
              "<header>",
              "<banner>",
              "<top>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<header>` contains introductory headings, logos, and search bars for a page or section."
          },
          {
            "q": "Which semantic element designates the footer of a document or section?",
            "o": [
              "<bottom>",
              "<footer>",
              "<end>",
              "<base>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<footer>` typically contains copyright notices, author information, and legal links."
          },
          {
            "q": "Which tag specifies independent, self-contained content with an optional caption?",
            "o": [
              "<figure> and <figcaption>",
              "<picture>",
              "<image>",
              "<content>"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<figure>` groups media elements with an associated `<figcaption>` title."
          },
          {
            "q": "What is the primary benefit of semantic HTML over using generic `<div>` tags?",
            "o": [
              "Code runs 10x faster",
              "Improves accessibility for screen readers and search engine SEO comprehension",
              "Reduces file size by 90%",
              "Enables WebGL"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Semantic tags describe meaning to both browsers, search bots, and assistive screen reader technology."
          },
          {
            "q": "Which element designates the main, dominant content unique to the document body?",
            "o": [
              "<content>",
              "<main>",
              "<body>",
              "<section>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<main>` encloses the primary central topic of the page, excluding shared headers and footers."
          },
          {
            "q": "Which tag is used for highlighting or marking text of relevance?",
            "o": [
              "<highlight>",
              "<mark>",
              "<bold>",
              "<em>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<mark>` formats text with a yellow highlight representing marked relevance."
          },
          {
            "q": "What is the difference between `<strong>` and `<b>` in modern HTML?",
            "o": [
              "`<strong>` conveys semantic strong importance or urgency; `<b>` draws attention without conveying importance",
              "No difference",
              "<b> is invalid in HTML5",
              "strong is italicized"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`<strong>` has semantic importance for screen readers; `<b>` is purely stylistically bold."
          },
          {
            "q": "What is the difference between `<em>` and `<i>` in modern HTML?",
            "o": [
              "`<em>` conveys semantic verbal emphasis; `<i>` represents alternative voice or technical term without emphasis",
              "No difference",
              "<em> is deprecated",
              "<i> is underlined"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`<em>` changes vocal inflection on screen readers; `<i>` represents offset text like taxonomic names or foreign terms."
          },
          {
            "q": "Which element represents machine-readable date/time in HTML5?",
            "o": [
              "<date>",
              "<time>",
              "<timestamp>",
              "<calendar>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<time datetime=\"2026-10-23\">` provides a machine-readable date."
          },
          {
            "q": "Which element creates an expandable disclosure widget that toggles open and closed without JavaScript?",
            "o": [
              "<accordion>",
              "<details> and <summary>",
              "<toggle>",
              "<expand>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<details>` creates a native collapsible widget with `<summary>` as the clickable heading."
          },
          {
            "q": "What element represents sample output from a computer program in HTML?",
            "o": [
              "<terminal>",
              "<samp>",
              "<code>",
              "<pre>"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`<samp>` semantically marks output text from a computer program or system."
          },
          {
            "q": "What are ARIA attributes in HTML used for?",
            "o": [
              "CSS animations",
              "Accessible Rich Internet Applications attributes for enhancing accessibility for users with disabilities",
              "Area calculations",
              "Audio streaming"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "ARIA attributes (`aria-label`, `aria-expanded`, `role`) bridge accessibility gaps in dynamic web widgets."
          },
          {
            "q": "Which element defines dialog boxes or interactive sub-windows natively in HTML5?",
            "o": [
              "<popup>",
              "<dialog>",
              "<modal>",
              "<window>"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`<dialog>` provides native modal windows via `.showModal()` and `.close()`."
          }
        ]
      }
    }
  },
  "css": {
    "id": "css",
    "name": "CSS",
    "icon": "🎨",
    "category": "web",
    "description": "Cascading Style Sheets for layout, modern typography, animations, and responsive design.",
    "topics": {
      "box_model": {
        "id": "box_model",
        "name": "Selectors & Box Model",
        "icon": "📦",
        "desc": "Margin, border, padding, content, and box-sizing.",
        "questions": [
          {
            "q": "What components make up the CSS Box Model from inside out?",
            "o": [
              "Content, Margin, Padding, Border",
              "Content, Padding, Border, Margin",
              "Padding, Content, Border, Margin",
              "Border, Content, Padding, Margin"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "From inside out: Content -> Padding -> Border -> Margin."
          },
          {
            "q": "What CSS property ensures padding and border are included in an element's total width and height?",
            "o": [
              "box-sizing: border-box;",
              "box-sizing: content-box;",
              "box-model: include;",
              "display: border-box;"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`box-sizing: border-box` makes width calculate including padding and border."
          },
          {
            "q": "What is the default value of the `box-sizing` property in CSS?",
            "o": [
              "border-box",
              "content-box",
              "padding-box",
              "margin-box"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The CSS specification defaults to `content-box`, where width and height apply only to content."
          },
          {
            "q": "What is margin collapsing in CSS?",
            "o": [
              "Margins cancel each other out",
              "Adjacent vertical margins of block elements merge into a single margin equal to the largest one",
              "Margins become 0 on mobile",
              "Negative margins"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Vertical margins collapse into a single combined margin spacing."
          },
          {
            "q": "Do horizontal margins ever collapse in standard CSS layout?",
            "o": [
              "Yes, always",
              "No, horizontal margins never collapse",
              "Only inside flexbox",
              "Only in tables"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Margin collapsing occurs strictly on vertical margins between block elements."
          },
          {
            "q": "What does `outline` differ from `border` in CSS?",
            "o": [
              "Outline does not take up layout space and does not affect element dimensions",
              "Outline cannot be colored",
              "Border is always dotted",
              "No difference"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Outlines are drawn outside the border edge without affecting document layout or element dimensions."
          },
          {
            "q": "Which CSS property specifies how content that overflows an element's box is handled?",
            "o": [
              "clip",
              "overflow",
              "scroll-behavior",
              "wrap"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`overflow: hidden | scroll | auto | visible` controls overflow handling."
          },
          {
            "q": "What does `display: none` do compared to `visibility: hidden`?",
            "o": [
              "`display: none` removes the element from document flow entirely; `visibility: hidden` hides it while preserving its layout space",
              "No difference",
              "visibility: hidden removes element",
              "display: none is transparent only"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`display: none` frees layout space completely; `visibility: hidden` keeps the empty space."
          },
          {
            "q": "What unit in CSS is relative to the font-size of the root `<html>` element?",
            "o": [
              "em",
              "rem",
              "vh",
              "px"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`rem` (root em) scales relative to the root `<html>` element's font-size."
          },
          {
            "q": "What does `em` unit scale relative to when used for padding or margin?",
            "o": [
              "Root font size",
              "The font-size of the element itself",
              "Viewport width",
              "Parent height"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "When used on padding/margin, `1em` equals the computed `font-size` of that specific element."
          },
          {
            "q": "What is the CSS specificity hierarchy order from highest to lowest?",
            "o": [
              "Inline styles > IDs > Classes/Attributes/Pseudo-classes > Elements/Pseudo-elements",
              "IDs > Inline > Elements",
              "Classes > IDs > Inline",
              "Elements > IDs > Classes"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Inline styles (1,0,0,0) override IDs (0,1,0,0), which override classes (0,0,1,0), which override tag elements (0,0,0,1)."
          },
          {
            "q": "What does `!important` do in a CSS declaration?",
            "o": [
              "Animates property",
              "Overrides standard specificity rules, giving the declaration highest priority",
              "Makes property read-only",
              "Removes style on mobile"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`!important` overrides normal specificity cascades."
          },
          {
            "q": "What is an element's Block Formatting Context (BFC) triggered by?",
            "o": [
              "`overflow: hidden`, `display: flow-root`, or `float: left`",
              "Only display: block",
              "Only margins",
              "Only font changes"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "A BFC isolates its internal layout, clears floats, and prevents margin collapsing with outer elements."
          },
          {
            "q": "What does the `clamp(min, preferred, max)` CSS function do?",
            "o": [
              "Clamps values to integers",
              "Constrains a value between an allowable lower minimum and upper maximum bound",
              "Calculates aspect ratio",
              "Animates size"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`clamp(1rem, 2.5vw, 2rem)` enables fluid typography that stays within defined bounds."
          },
          {
            "q": "What CSS property creates rounded borders on an element box?",
            "o": [
              "corner-style",
              "border-radius",
              "box-round",
              "curve"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`border-radius: 12px;` rounds box corners."
          },
          {
            "q": "What does `z-index` control on positioned elements in CSS?",
            "o": [
              "Horizontal alignment",
              "The stack level of overlapping elements along the virtual Z-axis (depth)",
              "Zoom magnification",
              "Text indentation"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`z-index` specifies the 3D depth layering order of positioned elements."
          }
        ]
      },
      "flexbox": {
        "id": "flexbox",
        "name": "Flexbox Layout",
        "icon": "📐",
        "desc": "justify-content, align-items, flex-direction, and flex-grow.",
        "questions": [
          {
            "q": "Which property aligns flex items along the main axis?",
            "o": [
              "align-items",
              "justify-content",
              "align-content",
              "text-align"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`justify-content` aligns items along the flex container's main axis."
          },
          {
            "q": "What value of `flex-direction` arranges items vertically?",
            "o": [
              "row",
              "column",
              "vertical",
              "stack"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`flex-direction: column` lays out items top-to-bottom."
          },
          {
            "q": "Which property controls whether flex items wrap onto multiple lines?",
            "o": [
              "flex-wrap",
              "flex-flow",
              "flex-direction",
              "wrap-items"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`flex-wrap: wrap | nowrap | wrap-reverse` controls multiline wrapping."
          },
          {
            "q": "What does the `flex: 1` shorthand property expand to?",
            "o": [
              "flex: 1 1 0%",
              "flex: 1 0 auto",
              "flex: 0 1 auto",
              "flex: 1 0 100%"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`flex: 1` is shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`."
          },
          {
            "q": "Which property aligns flex items along the cross axis inside a flex container?",
            "o": [
              "justify-content",
              "align-items",
              "align-content",
              "text-align"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`align-items` aligns items along the perpendicular cross axis."
          },
          {
            "q": "What is the difference between `align-items` and `align-content` in Flexbox?",
            "o": [
              "`align-items` aligns items within each flex line; `align-content` aligns multi-line flex rows across the container",
              "No difference",
              "align-content is for grid only",
              "align-items is deprecated"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`align-content` distributes space between wrapped rows when there is extra space on the cross axis."
          },
          {
            "q": "What does `justify-content: space-between` do?",
            "o": [
              "Distributes items evenly with first item flush at the start and last item flush at the end",
              "Centers items",
              "Equal space around all items",
              "Spaces only on hover"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`space-between` distributes remaining space evenly between items, with outer items touching the container edges."
          },
          {
            "q": "What does `justify-content: space-around` do compared to `space-evenly`?",
            "o": [
              "`space-around` gives each item equal space on both sides (edge spaces are half); `space-evenly` makes all gaps identical",
              "No difference",
              "space-evenly is for Grid only",
              "space-around shrinks items"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`space-evenly` ensures gaps between items and container edges are exactly equal."
          },
          {
            "q": "Which property allows an individual flex item to override the container's `align-items` value?",
            "o": [
              "align-self",
              "justify-self",
              "flex-align",
              "item-align"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`align-self` overrides `align-items` for a specific child element."
          },
          {
            "q": "What does `flex-grow: 0` indicate?",
            "o": [
              "Item takes zero space",
              "Item will not grow to absorb available positive free space in the container",
              "Item is hidden",
              "Item shrinks to minimum"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`flex-grow: 0` (the default) prevents the flex item from expanding beyond its basis size."
          },
          {
            "q": "What does `flex-shrink: 0` prevent in a flex container?",
            "o": [
              "Prevents item from growing",
              "Prevents item from shrinking below its content/basis size when container space is tight",
              "Hides scrollbars",
              "Forces wrapping"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`flex-shrink: 0` stops items from compressing when container space is constrained."
          },
          {
            "q": "What property changes the visual display order of flex items without modifying HTML markup?",
            "o": [
              "z-index",
              "order",
              "flex-order",
              "position"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `order: <integer>` property rearranges visual positioning without altering DOM order."
          },
          {
            "q": "What does `gap: 20px` do in a modern flex container?",
            "o": [
              "Sets outer margin",
              "Sets spacing between flex items without needing margin hacks",
              "Sets padding inside items",
              "Sets border width"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`gap` establishes spacing gutters between adjacent flex items directly."
          },
          {
            "q": "What happens to the main axis when `flex-direction: column` is set?",
            "o": [
              "Main axis runs vertically (top-to-bottom); cross axis runs horizontally",
              "Main axis is disabled",
              "Cross axis becomes vertical",
              "No change"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`flex-direction: column` rotates the main axis to run top-to-bottom."
          },
          {
            "q": "What does `flex-basis: auto` mean?",
            "o": [
              "Basis is 0px",
              "Basis is determined by the item's width/height property or its intrinsic content size",
              "Full width always",
              "Dynamic scaling"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`auto` checks the element's explicit width/height; if unset, it falls back to content size."
          },
          {
            "q": "Can `margin: auto` center an item horizontally and vertically inside a flex container?",
            "o": [
              "No, only horizontally",
              "Yes, `margin: auto` on a flex item automatically absorbs all free space in both axes",
              "Only with grid",
              "Only in absolute positioning"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`margin: auto` on a flex child absorbs remaining space across both main and cross axes, centering it perfectly."
          }
        ]
      },
      "grid": {
        "id": "grid",
        "name": "CSS Grid",
        "icon": "▦",
        "desc": "grid-template-columns, gap, fr units, and grid areas.",
        "questions": [
          {
            "q": "What unit represents a fraction of available space in CSS Grid?",
            "o": [
              "px",
              "%",
              "fr",
              "em"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "`fr` represents a fractional unit of the free grid container space."
          },
          {
            "q": "Which shorthand property sets spacing between rows and columns in CSS Grid?",
            "o": [
              "margin",
              "gap",
              "spacing",
              "grid-padding"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `gap` property defines the gutter size between rows and columns."
          },
          {
            "q": "Which CSS property defines the column sizing tracks of a Grid container?",
            "o": [
              "grid-template-columns",
              "grid-columns",
              "grid-tracks",
              "grid-auto-columns"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`grid-template-columns: 200px 1fr 2fr;` defines explicit column tracks."
          },
          {
            "q": "What does `repeat(3, 1fr)` represent in `grid-template-columns`?",
            "o": [
              "3 columns each taking 1/3 of available space",
              "1 column repeated 3 times",
              "3 rows of 1fr",
              "3 pixels"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`repeat(3, 1fr)` is equivalent to `1fr 1fr 1fr`."
          },
          {
            "q": "What does `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` achieve?",
            "o": [
              "Fixed 200px layout",
              "Responsive column wrapping without media queries, expanding items to fill empty row space",
              "Stretches images",
              "Creates 200 columns"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`auto-fit` with `minmax()` automatically wraps items as the container shrinks and stretches them when space allows."
          },
          {
            "q": "What is the difference between `auto-fill` and `auto-fit` in CSS Grid?",
            "o": [
              "`auto-fill` keeps empty tracks in the grid; `auto-fit` collapses empty tracks to 0px allowing filled items to stretch",
              "No difference",
              "auto-fit is for rows only",
              "auto-fill is deprecated"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`auto-fit` collapses unoccupied tracks so existing items expand across the row."
          },
          {
            "q": "Which CSS Grid property defines named layout areas like 'header header' / 'sidebar main'?",
            "o": [
              "grid-template-areas",
              "grid-areas",
              "grid-layout",
              "grid-names"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`grid-template-areas: \"header header\" \"sidebar main\";` defines named ASCII-like layout templates."
          },
          {
            "q": "How do you place an element inside a named grid area?",
            "o": [
              "area: \"header\"",
              "grid-area: header",
              "grid-column: header",
              "position: header"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`grid-area: header;` places the grid item into the designated named template area."
          },
          {
            "q": "What does `grid-column: 1 / -1` do?",
            "o": [
              "Makes element invisible",
              "Spans the element across all columns from the first line to the last line",
              "Moves element to column 1",
              "Creates invalid grid line"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Line `-1` designates the last explicit grid line; `1 / -1` spans the full width of the grid."
          },
          {
            "q": "What does `grid-column: span 2` do on a grid item?",
            "o": [
              "Item spans 2 column tracks from its current placement",
              "Item spans 2 pixels",
              "Item moves 2 columns right",
              "Item duplicates"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`span 2` specifies that the item spans across 2 grid tracks."
          },
          {
            "q": "What does `grid-auto-flow: dense` do?",
            "o": [
              "Compacts text fonts",
              "Fills holes earlier in the grid if smaller items appear later in the DOM order",
              "Disables grid gaps",
              "Slows layout"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`dense` instructs the auto-placement algorithm to backfill empty spaces with smaller subsequent items."
          },
          {
            "q": "What is the primary difference between CSS Flexbox and CSS Grid?",
            "o": [
              "Flexbox is 1-dimensional (row OR column); CSS Grid is 2-dimensional (rows AND columns simultaneously)",
              "Flexbox is for text only",
              "CSS Grid cannot center items",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Flexbox manages layout along one axis at a time; Grid coordinates rows and columns simultaneously."
          },
          {
            "q": "What does `minmax(100px, auto)` do in track sizing?",
            "o": [
              "Track size is at least 100px, but expands automatically to fit larger content",
              "Track size is exactly 100px",
              "Track size cannot exceed 100px",
              "Syntax error"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`minmax(min, max)` establishes minimum and maximum size boundaries for a track."
          },
          {
            "q": "What is the `subgrid` value in CSS Grid Level 2?",
            "o": [
              "A separate table",
              "Allows a nested grid item to inherit and align directly with its parent grid's tracks",
              "An iframe grid",
              "Deprecated layout"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`grid-template-columns: subgrid;` enables children to align directly with the grandparent grid tracks."
          },
          {
            "q": "Can grid items overlap in CSS Grid?",
            "o": [
              "No, grid forbids overlapping",
              "Yes, grid items placed on overlapping tracks stack on top of each other using z-index",
              "Only with absolute positioning",
              "Only if opacity < 1"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Multiple grid items assigned to overlapping row and column coordinates stack neatly."
          },
          {
            "q": "What does `justify-items: center` do in a CSS Grid container?",
            "o": [
              "Centers the entire grid in the page",
              "Centers all grid items along the inline (horizontal) axis within their individual grid cells",
              "Centers text only",
              "Centers rows vertically"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`justify-items` aligns contents within each grid cell horizontally along the inline axis."
          }
        ]
      }
    }
  },
  "sql": {
    "id": "sql",
    "name": "SQL",
    "icon": "🗄️",
    "category": "database",
    "description": "Structured Query Language for relational database querying, design, and management.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Basic Queries",
        "icon": "🔍",
        "desc": "SELECT, WHERE, DISTINCT, ORDER BY, and LIMIT.",
        "questions": [
          {
            "q": "Which SQL clause filters records based on specific criteria?",
            "o": [
              "FILTER",
              "WHERE",
              "ORDER BY",
              "HAVING"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `WHERE` clause specifies search conditions to filter rows."
          },
          {
            "q": "Which SQL keyword sorts the result set in ascending or descending order?",
            "o": [
              "SORT BY",
              "ORDER BY",
              "GROUP BY",
              "ARRANGE"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`ORDER BY column [ASC|DESC]` sorts the returned rows."
          },
          {
            "q": "Which SQL command is used to retrieve data from a database table?",
            "o": [
              "GET",
              "FETCH",
              "SELECT",
              "PULL"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "The `SELECT` statement is the primary SQL command used to query data from tables."
          },
          {
            "q": "Which clause eliminates duplicate rows from a query result set?",
            "o": [
              "UNIQUE",
              "DISTINCT",
              "DIFFERENT",
              "FILTER"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`SELECT DISTINCT column FROM table;` returns only unique values."
          },
          {
            "q": "How do you select all columns from a table named `Employees`?",
            "o": [
              "SELECT all FROM Employees;",
              "SELECT * FROM Employees;",
              "SELECT Employees;",
              "FETCH * FROM Employees;"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The asterisk `*` wildcard selects all columns from the specified table."
          },
          {
            "q": "Which SQL keyword specifies a limit on the number of returned records?",
            "o": [
              "TOP or LIMIT",
              "MAX",
              "CAP",
              "BOUND"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`LIMIT 10` (PostgreSQL/MySQL/SQLite) or `TOP 10` (SQL Server) restricts result row counts."
          },
          {
            "q": "What operator tests if a column value matches a wildcard pattern in SQL?",
            "o": [
              "MATCH",
              "LIKE",
              "EQUALS",
              "CONTAINS"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`LIKE` matches patterns using wildcards `%` (any characters) and `_` (single character)."
          },
          {
            "q": "What does the wildcard `%` represent in a `LIKE` pattern?",
            "o": [
              "Exactly one character",
              "Zero, one, or multiple characters",
              "A number",
              "An escape character"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`'A%'` matches any string starting with 'A' of any length."
          },
          {
            "q": "What operator checks whether a value falls within a specified inclusive range in SQL?",
            "o": [
              "WITHIN",
              "BETWEEN ... AND ...",
              "RANGE",
              "INSIDE"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`WHERE age BETWEEN 18 AND 30` filters values in the inclusive range [18, 30]."
          },
          {
            "q": "How do you test for a NULL value in an SQL query?",
            "o": [
              "WHERE col = NULL",
              "WHERE col IS NULL",
              "WHERE col == NULL",
              "WHERE col IS EMPTY"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In SQL, NULL represents unknown; comparisons must use `IS NULL` or `IS NOT NULL` (not `= NULL`)."
          },
          {
            "q": "Which SQL clause specifies sort direction from largest to smallest?",
            "o": [
              "ASC",
              "DESC",
              "REVERSE",
              "DOWN"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`ORDER BY salary DESC` sorts records in descending order."
          },
          {
            "q": "What command creates a new table in an SQL database?",
            "o": [
              "MAKE TABLE",
              "CREATE TABLE",
              "NEW TABLE",
              "BUILD TABLE"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`CREATE TABLE table_name (col1 type, ...);` defines new relational tables."
          },
          {
            "q": "What command inserts new records into a table?",
            "o": [
              "INSERT INTO",
              "ADD ROW",
              "APPEND",
              "PUT"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`INSERT INTO table (columns) VALUES (values);` inserts new rows."
          },
          {
            "q": "What command modifies existing records in a table?",
            "o": [
              "MODIFY",
              "UPDATE",
              "CHANGE",
              "ALTER"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`UPDATE table SET col = val WHERE condition;` modifies table data."
          },
          {
            "q": "What happens if an `UPDATE` or `DELETE` statement omits the `WHERE` clause?",
            "o": [
              "Throws a syntax error",
              "Modifies or deletes ALL rows in the table",
              "Operates only on the first row",
              "Does nothing"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Omitting the `WHERE` clause applies the update or deletion to every single row in the table."
          },
          {
            "q": "What command removes all rows from a table rapidly without logging individual row deletions?",
            "o": [
              "DELETE ALL",
              "TRUNCATE TABLE",
              "DROP TABLE",
              "REMOVE TABLE"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`TRUNCATE TABLE` resets the table quickly by deallocating pages rather than logging row deletions."
          }
        ]
      },
      "joins": {
        "id": "joins",
        "name": "SQL Joins",
        "icon": "🔗",
        "desc": "INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.",
        "questions": [
          {
            "q": "Which JOIN returns all rows from the left table and matching rows from the right table?",
            "o": [
              "INNER JOIN",
              "LEFT JOIN",
              "RIGHT JOIN",
              "CROSS JOIN"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`LEFT JOIN` returns all left table records with nulls for non-matching right records."
          },
          {
            "q": "What does an `INNER JOIN` return?",
            "o": [
              "All records from both tables",
              "Only rows that have matching values in both tables",
              "All unmatched rows",
              "Cartesian product only"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`INNER JOIN` selects rows that have matching values in both tables."
          },
          {
            "q": "What is a CROSS JOIN in SQL?",
            "o": [
              "A join between foreign keys",
              "A Cartesian product combining each row of the first table with every row of the second table",
              "A join on matching IDs",
              "A self-join only"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A `CROSS JOIN` produces M * N rows by pairing every row of table 1 with every row of table 2."
          },
          {
            "q": "What does a `FULL OUTER JOIN` return?",
            "o": [
              "All matching rows only",
              "All rows from both tables, filling with NULL where matches do not exist",
              "Only unmatched rows",
              "Left table rows only"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`FULL OUTER JOIN` combines the results of both LEFT and RIGHT outer joins."
          },
          {
            "q": "What is a Self-Join in SQL?",
            "o": [
              "Joining a database with itself",
              "A table joined with itself using table aliases to compare rows within the same table",
              "A join without ON clause",
              "A circular foreign key"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "A self-join joins a table to itself (e.g. `Employees e JOIN Employees m ON e.manager_id = m.id`)."
          },
          {
            "q": "What does the `ON` clause do in an SQL JOIN?",
            "o": [
              "Filters grouped results",
              "Specifies the join condition (matching column criteria) between the joined tables",
              "Orders rows",
              "Creates primary keys"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`JOIN table2 ON table1.id = table2.user_id` defines the relational join predicate."
          },
          {
            "q": "What does `NATURAL JOIN` do in SQL?",
            "o": [
              "Joins tables based on natural foreign keys",
              "Automatically joins tables using all columns with matching names in both tables",
              "Fast binary join",
              "Joins tables without NULLs"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`NATURAL JOIN` implicitly matches all columns that share identical names across both tables."
          },
          {
            "q": "What happens if a row in the left table has no matching row in the right table during a `LEFT JOIN`?",
            "o": [
              "The left row is excluded",
              "The left row is included, and right table columns contain NULL values",
              "Query fails",
              "Right row defaults to 0"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "LEFT JOIN preserves all rows from the left table, populating missing right attributes with NULL."
          },
          {
            "q": "What is a Foreign Key constraint in relational databases?",
            "o": [
              "An encryption key",
              "A column or group of columns that refers to the Primary Key of another table, enforcing referential integrity",
              "A backup key",
              "A unique index"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Foreign keys enforce referential relationships between parent and child tables."
          },
          {
            "q": "What does `USING (column_name)` do in a join?",
            "o": [
              "Shorthand for `ON table1.column_name = table2.column_name` when column names are identical",
              "Uses index",
              "Forces hash join",
              "Sorts by column"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`JOIN table2 USING (user_id)` is clean shorthand when joining on identically named columns."
          },
          {
            "q": "How do you find rows in Table A that have NO corresponding match in Table B using a JOIN?",
            "o": [
              "`SELECT * FROM A LEFT JOIN B ON A.id = B.a_id WHERE B.a_id IS NULL;`",
              "`SELECT * FROM A INNER JOIN B;`",
              "`SELECT * FROM A FULL JOIN B;`",
              "`SELECT * FROM A JOIN B ON A.id != B.id;`"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "An anti-join uses a `LEFT JOIN` filtered by `WHERE right.id IS NULL` to locate unmatched records."
          },
          {
            "q": "Can more than two tables be joined in a single SQL query?",
            "o": [
              "No, maximum 2 tables",
              "Yes, multiple JOIN clauses can link many tables sequentially",
              "Only up to 3 tables",
              "Only with subqueries"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "SQL queries can join numerous tables together across relational foreign key links."
          },
          {
            "q": "What is the difference between `UNION` and `UNION ALL`?",
            "o": [
              "`UNION` removes duplicate rows; `UNION ALL` retains all rows including duplicates (and is faster)",
              "UNION ALL removes duplicates",
              "UNION is for numbers only",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`UNION ALL` concatenates result sets without the performance overhead of sorting to eliminate duplicates."
          },
          {
            "q": "What is a semi-join in relational database query optimization?",
            "o": [
              "A join returning half the columns",
              "An operation that returns rows from table A that have at least one match in table B without duplicating rows (e.g. `EXISTS`)",
              "A partial join",
              "A view join"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "A semi-join tests for existence without multiplying rows when multiple matches exist in table B."
          },
          {
            "q": "What does `INTERSECT` do in SQL set operations?",
            "o": [
              "Combines all rows",
              "Returns only distinct rows that are present in both query result sets",
              "Deletes common rows",
              "Subtracts rows"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`INTERSECT` outputs rows that appear in both query result sets."
          },
          {
            "q": "What does `EXCEPT` (or `MINUS` in Oracle) do in SQL?",
            "o": [
              "Returns rows from the first query that do not appear in the second query",
              "Calculates difference between numbers",
              "Throws exceptions",
              "Merges tables"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`EXCEPT` returns rows exclusive to the first query result set."
          }
        ]
      },
      "aggregates": {
        "id": "aggregates",
        "name": "Aggregate Functions & GROUP BY",
        "icon": "📈",
        "desc": "COUNT, SUM, AVG, MIN, MAX, GROUP BY, and HAVING.",
        "questions": [
          {
            "q": "Which clause filters groups created by the `GROUP BY` statement?",
            "o": [
              "WHERE",
              "HAVING",
              "FILTER",
              "LIMIT"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`HAVING` filters aggregated groups; `WHERE` filters individual rows before grouping."
          },
          {
            "q": "Which function calculates the total number of rows matching a query?",
            "o": [
              "TOTAL()",
              "COUNT()",
              "SUM()",
              "ROWS()"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`COUNT()` counts records matching specified conditions."
          },
          {
            "q": "What does `COUNT(*)` count compared to `COUNT(column)` in SQL?",
            "o": [
              "`COUNT(*)` counts all rows including NULLs; `COUNT(column)` counts only rows where the specified column is NOT NULL",
              "No difference",
              "COUNT(*) counts distinct only",
              "COUNT(column) is faster"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`COUNT(*)` counts total rows regardless of contents; `COUNT(col)` ignores NULL values in `col`."
          },
          {
            "q": "What does the `AVG()` aggregate function do when encountering NULL values in a column?",
            "o": [
              "Treats NULL as 0",
              "Ignores NULL values entirely and computes the mean of non-null values",
              "Throws a runtime error",
              "Returns NULL"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Aggregate functions (AVG, SUM, MIN, MAX) automatically ignore NULL rows."
          },
          {
            "q": "What is the difference between `WHERE` and `HAVING` in an SQL query?",
            "o": [
              "`WHERE` filters rows before aggregation; `HAVING` filters aggregated groups after `GROUP BY`",
              "No difference",
              "HAVING cannot use functions",
              "WHERE is only for numbers"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`WHERE` filters individual rows before grouping; `HAVING` filters grouped summaries (e.g. `HAVING COUNT(*) > 5`)."
          },
          {
            "q": "Can non-aggregated columns be included in the `SELECT` list of a `GROUP BY` query in standard SQL?",
            "o": [
              "Yes, any column",
              "No, every non-aggregated column in `SELECT` must appear in the `GROUP BY` clause",
              "Only string columns",
              "Only primary keys"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Standard SQL requires all non-aggregate columns in SELECT to be explicitly declared in `GROUP BY`."
          },
          {
            "q": "What does `SUM(DISTINCT salary)` calculate?",
            "o": [
              "Sums all salaries",
              "Sums only unique salary values, ignoring duplicates",
              "Calculates average salary",
              "Finds maximum salary"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`DISTINCT` inside an aggregate processes only unique values."
          },
          {
            "q": "What are SQL Window Functions (e.g. `ROW_NUMBER() OVER (...)`)?",
            "o": [
              "Functions that resize database windows",
              "Functions that perform calculations across a set of table rows related to the current row without collapsing rows",
              "Functions for GUI apps",
              "Subqueries in FROM"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Window functions calculate running totals, ranks, and moving averages while preserving individual row identity."
          },
          {
            "q": "What does `ROW_NUMBER() OVER (ORDER BY salary DESC)` assign to each row?",
            "o": [
              "Salary rank with ties",
              "A unique, sequential integer starting at 1 based on salary order",
              "Random row ID",
              "Total count"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`ROW_NUMBER()` provides consecutive 1-based numbering without gaps or tie sharing."
          },
          {
            "q": "What is the difference between `RANK()` and `DENSE_RANK()` in window functions?",
            "o": [
              "`RANK()` leaves gaps in numbering after ties (1, 2, 2, 4); `DENSE_RANK()` does not leave gaps (1, 2, 2, 3)",
              "No difference",
              "DENSE_RANK is for strings",
              "RANK is deprecated"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`RANK()` skips numbers following tied ranks; `DENSE_RANK()` maintains strictly contiguous ranking numbers."
          },
          {
            "q": "What does `GROUP BY ROLLUP(country, city)` produce?",
            "o": [
              "Subtotals and grand totals across hierarchical group combinations",
              "A simple join",
              "A temporary table",
              "A sorted list"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`ROLLUP` generates hierarchical groupings for subtotals and an overall grand total."
          },
          {
            "q": "What does `MIN(col)` and `MAX(col)` return for string columns?",
            "o": [
              "Character count min/max",
              "The first and last string according to lexicographical/alphabetical collation order",
              "Error: only numbers allowed",
              "NULL"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "On string columns, `MIN` and `MAX` return the alphabetical boundary values."
          },
          {
            "q": "What does `COALESCE(val1, val2, val3)` do in SQL?",
            "o": [
              "Concatenates strings",
              "Returns the first non-NULL value from the argument list",
              "Sums numbers",
              "Converts type"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`COALESCE()` evaluates arguments in order and returns the first value that is not NULL."
          },
          {
            "q": "What is the function of `GROUP_CONCAT()` (or `STRING_AGG()` in PostgreSQL)?",
            "o": [
              "Concatenates strings across grouped rows into a single delimited string",
              "Sums lengths",
              "Counts strings",
              "Splits strings"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Aggregate string concatenation combines multiple row values from a group into a comma-separated list."
          },
          {
            "q": "What does the `OVER (PARTITION BY department_id)` clause do in a window function?",
            "o": [
              "Filters departments",
              "Divides query rows into separate groups (partitions) where the window function evaluates independently",
              "Creates a table partition",
              "Sorts departments"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`PARTITION BY` breaks rows into independent calculation windows for window functions."
          },
          {
            "q": "What does `CASE WHEN ... THEN ... ELSE ... END` represent in SQL?",
            "o": [
              "Conditional branching logic within SQL queries",
              "A loop in SQL",
              "A transaction block",
              "A stored procedure"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The `CASE` statement implements conditional if-then-else logic directly in queries."
          }
        ]
      }
    }
  },
  "dart": {
    "id": "dart",
    "name": "Dart",
    "icon": "🎯",
    "category": "scripting",
    "description": "Client-optimized programming language power-driving Flutter apps and fast cross-platform UIs.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Dart Basics",
        "icon": "🔰",
        "desc": "Main function, sound null safety, and basic types.",
        "questions": [
          {
            "q": "Which framework was Dart primarily designed to power for mobile and cross-platform apps?",
            "o": [
              "React Native",
              "Flutter",
              "Ionic",
              "Xamarin"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Dart is the primary programming language behind Google's Flutter framework."
          },
          {
            "q": "How do you declare a nullable integer variable in modern sound-null-safe Dart?",
            "o": [
              "int? x;",
              "nullable int x;",
              "int x = null;",
              "optional<int> x;"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "A question mark `?` denotes nullable types in Dart (e.g., `int?`)."
          },
          {
            "q": "What is Sound Null Safety in Dart?",
            "o": [
              "Detects nulls at runtime",
              "Guarantees at compile time that non-nullable types cannot hold null, preventing null dereference errors",
              "Disables all nulls",
              "A linter rule only"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Sound null safety guarantees non-nullable variables can never be null, eliminating runtime null pointer crashes."
          },
          {
            "q": "What does the null assertion operator `!` do in Dart?",
            "o": [
              "Logical NOT",
              "Asserts that an expression is non-null, throwing an exception if it is null at runtime",
              "Makes variable nullable",
              "Deletes variable"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The `!` operator tells the compiler 'this expression is definitely not null'."
          },
          {
            "q": "What is the difference between `final` and `const` in Dart?",
            "o": [
              "`const` is compile-time constant; `final` is a single-assignment runtime constant",
              "No difference",
              "final cannot be used in classes",
              "const is deprecated"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`const` values are known at compile time and deeply immutable; `final` can be initialized at runtime once."
          },
          {
            "q": "What does the `late` keyword do in Dart?",
            "o": [
              "Defers code execution by 1 second",
              "Declares a non-nullable variable that will be initialized after declaration before first read",
              "Makes variable optional",
              "Deprecated keyword"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`late` permits initializing non-nullable variables lazily or after class construction."
          },
          {
            "q": "What does the null-aware coalesce operator `??` do in Dart?",
            "o": [
              "Returns left operand if non-null; otherwise evaluates and returns right operand",
              "Logical OR",
              "Null assignment",
              "Compares null"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`expr1 ?? expr2` falls back to `expr2` if `expr1` is null."
          },
          {
            "q": "What is string interpolation syntax in Dart?",
            "o": [
              "`'Hello $name or ${user.name}'`",
              "`'Hello {name}'`",
              "`'Hello %s' % name`",
              "`'Hello @name'`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Dart uses `$variable` and `${expression}` inside string literals."
          },
          {
            "q": "What does `dynamic` vs `Object?` mean in Dart?",
            "o": [
              "`dynamic` disables static type checks at compile time; `Object?` enforces type-safe operations",
              "No difference",
              "Object? is for widgets only",
              "dynamic is deprecated"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`dynamic` bypasses compile-time checks; `Object?` requires casting or type tests (`is`) before invoking methods."
          },
          {
            "q": "What does the `is` and `is!` operator test in Dart?",
            "o": [
              "Tests whether an object is of a specific type (with automatic type promotion)",
              "Checks memory address",
              "Compares values",
              "Tests null"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`if (obj is String)` tests type and automatically smart-casts `obj` to `String`."
          },
          {
            "q": "What is a raw string in Dart?",
            "o": [
              "A string prefixed with `r` (e.g. `r'\\n'`) that ignores escape sequences",
              "A byte array",
              "An encrypted string",
              "An unformatted string"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Prefixing a string with `r` disables escape character processing."
          },
          {
            "q": "What does the null-aware assignment operator `??=` do in Dart?",
            "o": [
              "Assigns value only if current variable is null",
              "Replaces variable",
              "Checks equality",
              "Creates nullable type"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`b ??= value;` assigns `value` to `b` only if `b` is currently null."
          },
          {
            "q": "What is collection `if` and collection `for` in Dart?",
            "o": [
              "Syntax to conditionally include elements or generate items directly inside list/set/map literals",
              "A loop utility",
              "Compiler error",
              "Stream syntax"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Dart permits `[1, if (showExtra) 2, for (var i in items) i]` inside collection literals."
          },
          {
            "q": "What does the spread operator `...` and null-aware spread `...?` do in Dart?",
            "o": [
              "Expands elements of an iterable into another collection",
              "Multiplies numbers",
              "Destructures variables",
              "Deletes elements"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`[...list1, ...?maybeList]` unpacks collection elements into another collection."
          },
          {
            "q": "What is the return type of the `main()` entry function in Dart?",
            "o": [
              "void (or Future<void> in async main)",
              "int",
              "bool",
              "Object"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "The standard entry point is `void main()` or `Future<void> main() async`."
          },
          {
            "q": "What is the default value of all uninitialized nullable variables in Dart?",
            "o": [
              "0",
              "null",
              "false",
              "undefined"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "All nullable variables in Dart default to `null`."
          }
        ]
      },
      "oop": {
        "id": "oop",
        "name": "OOP & Classes",
        "icon": "🧩",
        "desc": "Constructors, mixins, factory constructors, and cascade operators.",
        "questions": [
          {
            "q": "Which keyword allows reusing a class's code in multiple class hierarchies without inheritance in Dart?",
            "o": [
              "extends",
              "implements",
              "mixin / with",
              "include"
            ],
            "a": 2,
            "difficulty": "medium",
            "explanation": "Mixins (applied using the `with` keyword) provide code reuse across multiple class trees."
          },
          {
            "q": "What is the cascade operator `..` used for in Dart?",
            "o": [
              "Concatenating strings",
              "Performing a sequence of operations on the same object",
              "Exponentiation",
              "Bitwise comparison"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "The cascade operator `..` (or `?..`) chains multiple method calls or property assignments on the same object."
          },
          {
            "q": "What are factory constructors in Dart?",
            "o": [
              "Constructors that don't always create a new instance of their class (may return cached instances or subtypes)",
              "Static methods only",
              "Constructors in factory classes",
              "Deprecated constructors"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`factory ClassName(...)` can return instances from a cache or return a subclass instance."
          },
          {
            "q": "What are named constructors in Dart?",
            "o": [
              "Constructors with explicit names like `Point.origin()` to provide multiple constructors with clear purpose",
              "Anonymous constructors",
              "Constructors in records",
              "Private constructors only"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Dart supports named constructors (`Class.named()`) because it does not support method overloading."
          },
          {
            "q": "How are private members declared in Dart?",
            "o": [
              "Using the `private` keyword",
              "Prefixing the identifier with an underscore `_` (library-private scope)",
              "Using `#` prefix",
              "In private blocks"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In Dart, privacy is scoped to the library/file and designated by a leading underscore `_`."
          },
          {
            "q": "What does the `covariant` keyword do in Dart method parameters?",
            "o": [
              "Allows tightening a parameter type in a subclass override",
              "Prevents overriding",
              "Makes parameter nullable",
              "Inlines parameter"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`covariant` overrides the static type checker to allow a subclass to accept a more specific subtype parameter."
          },
          {
            "q": "What is an extension method in Dart (introduced in Dart 2.7)?",
            "o": [
              "Subclassing",
              "Adding new methods to existing libraries and classes without modifying their source code or inheriting",
              "A plugin system",
              "A macro"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Extension methods (`extension on String { ... }`) add custom utility methods to existing types."
          },
          {
            "q": "What is the difference between `implements` and `extends` in Dart?",
            "o": [
              "`extends` inherits implementation; `implements` treats the class as an interface and requires implementing all members",
              "No difference",
              "implements is for mixins only",
              "extends is for interfaces"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Every class in Dart defines an implicit interface; `implements` requires redefining every method and field."
          },
          {
            "q": "What is a `mixin` in Dart?",
            "o": [
              "A class containing code that can be shared across multiple class hierarchies using the `with` keyword",
              "An abstract class",
              "A generic interface",
              "A multi-thread task"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Mixins provide reusable chunks of methods and state applied with `class C extends B with MyMixin`."
          },
          {
            "q": "What is initializer list syntax in a Dart constructor?",
            "o": [
              "`ClassName() : field = value, super(...)` executed before the constructor body runs",
              "An array",
              "A JSON object",
              "A method list"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Initializer lists execute before the constructor body and superclass constructor."
          },
          {
            "q": "What does `const` constructor create when instantiated with constant arguments?",
            "o": [
              "A single canonical compile-time constant object instance in memory",
              "A new object every time",
              "A mutable object",
              "A thread-local copy"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Instantiating `const MyClass()` multiple times references the identical canonical memory instance."
          },
          {
            "q": "Can a class implement multiple interfaces in Dart?",
            "o": [
              "No, single interface only",
              "Yes, using commas: `class C implements A, B, C`",
              "Only up to 2",
              "Only with mixins"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Dart supports implementing an arbitrary number of interfaces."
          },
          {
            "q": "What is redirecting constructor in Dart?",
            "o": [
              "A constructor whose sole purpose is to forward calls to another constructor in the same class (`: this(...)`)",
              "A web redirect",
              "A proxy constructor",
              "A factory constructor"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Redirecting constructors delegate initialization to another constructor in the same class."
          },
          {
            "q": "What are Records introduced in Dart 3?",
            "o": [
              "Audio recordings",
              "Anonymous, immutable, aggregate types that bundle multiple values with positional or named fields",
              "Database rows",
              "Classes with getters only"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Dart 3 Records (`(int, String) r = (1, 'hi');`) provide lightweight multiple-value bundling."
          },
          {
            "q": "What does class modifier `base` mean in Dart 3?",
            "o": [
              "Enforces that the class can be extended but not implemented as an interface outside its library",
              "Base class in root",
              "Abstract class",
              "Final class"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "The `base` modifier prevents external packages from breaking class contracts via `implements`."
          },
          {
            "q": "What does class modifier `final` mean in Dart 3?",
            "o": [
              "Class cannot be extended, implemented, or mixed in outside its defining library",
              "Immutable fields only",
              "Cannot be instantiated",
              "Single instance"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "A `final` class closes the hierarchy outside the defining library."
          }
        ]
      },
      "async": {
        "id": "async",
        "name": "Asynchronous Dart",
        "icon": "⚡",
        "desc": "Future, Stream, async/await, and event loops.",
        "questions": [
          {
            "q": "Which object represents a potential value or error that will be available in the future in Dart?",
            "o": [
              "Promise",
              "Future",
              "Deferred",
              "Observable"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A `Future` represents an asynchronous computation result."
          },
          {
            "q": "What type provides a sequence of asynchronous events over time in Dart?",
            "o": [
              "Future",
              "Stream",
              "Sequence",
              "Emitter"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "A `Stream` represents an asynchronous sequence of data events."
          },
          {
            "q": "What is the difference between `Future` and `Stream` in Dart?",
            "o": [
              "A `Future` delivers a single value or error asynchronously; a `Stream` delivers a sequence of multiple asynchronous events over time",
              "Stream is synchronous",
              "Future is deprecated",
              "No difference"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Future` represents a one-shot async result; `Stream` represents continuous events (like clicks or packets)."
          },
          {
            "q": "What keyword is used to consume asynchronous values from a `Stream` sequentially in a loop?",
            "o": [
              "for...in",
              "await for (var item in stream)",
              "stream.loop()",
              "yield for"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`await for (var event in stream)` iterates over stream emissions until the stream closes."
          },
          {
            "q": "What is an `async*` generator function in Dart?",
            "o": [
              "A function that returns a Future",
              "A generator function that uses `yield` to output a sequence of values as a `Stream`",
              "A synchronous loop",
              "A multi-threaded function"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`Stream<int> count() async*` produces a Stream of yielded values over time."
          },
          {
            "q": "What is a `sync*` generator function in Dart?",
            "o": [
              "Returns a `Stream`",
              "A synchronous generator function that returns a lazy `Iterable`",
              "A web socket",
              "A future task"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Iterable<int> gen() sync*` produces items lazily on demand synchronously."
          },
          {
            "q": "What does `Completer` do in Dart?",
            "o": [
              "Completes a form",
              "Allows producing and controlling a `Future` manually from non-Future callbacks",
              "Terminates an isolate",
              "Finishes build"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`Completer<T>` produces a `future` and lets you resolve it via `.complete(val)` or `.completeError()`."
          },
          {
            "q": "What is an `Isolate` in Dart?",
            "o": [
              "A thread that shares memory with other isolates",
              "An independent worker with its own isolated memory heap and event loop, communicating only via message passing",
              "A Docker container",
              "A sandbox iframe"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "Dart uses Isolates instead of shared-memory threads, eliminating lock and race conditions."
          },
          {
            "q": "How do Isolates communicate with each other in Dart?",
            "o": [
              "Shared memory variables",
              "By passing messages through `SendPort` and `ReceivePort`",
              "Through local files",
              "Through HTTP"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "Isolates communicate strictly by passing messages through `ReceivePort` and `SendPort`."
          },
          {
            "q": "What is the difference between a single-subscription Stream and a broadcast Stream in Dart?",
            "o": [
              "Single-subscription streams can be listened to only once; broadcast streams allow multiple independent listeners",
              "Broadcast streams are slower",
              "No difference",
              "Single-subscription streams are synchronous"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "A single-subscription stream errors if listened to twice; `asBroadcastStream()` enables multiple subscribers."
          },
          {
            "q": "What does `Future.wait([f1, f2])` do in Dart?",
            "o": [
              "Waits for the fastest future",
              "Waits for all futures in the list to complete and returns a list of results",
              "Runs futures sequentially",
              "Cancels futures on timeout"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Future.wait()` resolves when all contained futures complete, equivalent to `Promise.all` in JS."
          },
          {
            "q": "What does `Future.delayed(Duration(seconds: 1))` do?",
            "o": [
              "Freezes UI thread for 1 second",
              "Creates a Future that completes after a non-blocking 1-second delay",
              "Sleeps the OS process",
              "Cancels task"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Future.delayed()` schedules completion without blocking the main event loop."
          },
          {
            "q": "What does `Isolate.run(callback)` provide in modern Dart?",
            "o": [
              "Spawns a short-lived background isolate, runs the heavy computation, returns the result, and tears down the isolate",
              "Runs on GPU",
              "Runs web worker",
              "Runs shell command"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`Isolate.run()` simplifies running CPU-heavy tasks on background isolates cleanly."
          },
          {
            "q": "What is the microtask queue in Dart's event loop?",
            "o": [
              "A queue of tasks that execute with higher priority before the next event loop iteration (timers, I/O)",
              "A background thread",
              "A GC task queue",
              "A stream queue"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "Microtasks scheduled via `scheduleMicrotask()` execute before the event loop pulls the next event."
          },
          {
            "q": "What does the `unawaited()` function from `dart:async` indicate?",
            "o": [
              "Throws error",
              "Explicitly indicates that a Future is intentionally not awaited, suppressing linter warnings",
              "Cancels future",
              "Forces synchronous run"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`unawaited(future)` documents that a future is intentionally fire-and-forget."
          },
          {
            "q": "What does `yield*` do in an `async*` generator function?",
            "o": [
              "Yields all events from another stream recursively",
              "Multiplies stream",
              "Terminates stream",
              "Closes stream"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`yield* subStream;` delegates stream emission to another Stream or Iterable."
          }
        ]
      }
    }
  },
  "typescript": {
    "id": "typescript",
    "name": "TypeScript",
    "icon": "🔷",
    "category": "web",
    "description": "Typed superset of JavaScript that compiles to plain JavaScript.",
    "topics": {
      "basics": {
        "id": "basics",
        "name": "Basics & Types",
        "icon": "🔰",
        "desc": "Static typing, interfaces, type aliases, and unions.",
        "questions": [
          {
            "q": "What is TypeScript?",
            "o": [
              "A separate runtime engine",
              "A typed syntactic superset of JavaScript",
              "A replacement for CSS",
              "A database query language"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "TypeScript extends JavaScript by adding static type definitions."
          },
          {
            "q": "Which keyword declares a custom type structure or object contract in TypeScript?",
            "o": [
              "struct",
              "interface",
              "protocol",
              "contract"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`interface` defines shape contracts for objects in TypeScript."
          },
          {
            "q": "What is the difference between `type` alias and `interface` in TypeScript?",
            "o": [
              "`interface` can be merged via declaration merging; `type` aliases cannot be re-opened for merging",
              "type is for primitives only",
              "interface is deprecated",
              "No difference"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Multiple `interface` declarations with the same name merge; `type` aliases are static once defined."
          },
          {
            "q": "What does the `unknown` type represent in TypeScript compared to `any`?",
            "o": [
              "`unknown` is a type-safe counterpart of `any` that requires type narrowing or casting before performing operations",
              "No difference",
              "unknown is for primitives only",
              "any is type-safe"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`unknown` forces developers to verify the type before accessing properties, unlike permissive `any`."
          },
          {
            "q": "What does the `never` type represent in TypeScript?",
            "o": [
              "Values that never occur (e.g. functions that throw an exception or infinite loops)",
              "null or undefined",
              "Any number",
              "Void return"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`never` represents the empty set of values, used for functions that never return and exhaustive type checks."
          },
          {
            "q": "What does the non-null assertion operator `!` do in TypeScript (e.g. `val!` )?",
            "o": [
              "Logical NOT",
              "Asserts to the compiler that the expression is neither null nor undefined at that point",
              "Throws runtime error",
              "Makes type optional"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "The postfix `!` tells the TypeScript type checker to exclude `null` and `undefined` from the type."
          },
          {
            "q": "What are Union Types in TypeScript (e.g. `string | number`)?",
            "o": [
              "Merging objects",
              "A type formed from two or more other types, representing values that can be any one of those types",
              "Array of types",
              "Tuple types"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Union types `A | B` accept values that conform to either type `A` or type `B`."
          },
          {
            "q": "What are Intersection Types in TypeScript (e.g. `TypeA & TypeB`)?",
            "o": [
              "A type that combines multiple types into one, containing all properties of both types",
              "Shared properties only",
              "Union of types",
              "Exclusion type"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "Intersection `A & B` creates a compound type containing all members of both constituent types."
          },
          {
            "q": "What is a Discriminated (Tagged) Union in TypeScript?",
            "o": [
              "A union of types containing a common literal property used as a discriminator for type narrowing",
              "A union of numbers",
              "An enum",
              "A generic type"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Discriminated unions use a common literal tag (e.g. `kind: 'circle' | 'square'`) for exhaustive narrowing."
          },
          {
            "q": "What does `readonly` modifier do on array types `readonly number[]`?",
            "o": [
              "Prevents mutating methods like `push()`, `pop()`, or index reassignment",
              "Makes array faster",
              "Freezes array in runtime memory",
              "Hides array"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`readonly number[]` removes all mutating methods at compile-time."
          },
          {
            "q": "What is literal type narrowing in TypeScript?",
            "o": [
              "Shortening code",
              "Narrowing a broad primitive type (like string) to an exact value like `'success' | 'error'`",
              "Minifying code",
              "Casting to number"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "Literal types constrain values to specific exact strings, booleans, or numbers."
          },
          {
            "q": "What is a Type Guard function in TypeScript?",
            "o": [
              "A security filter",
              "A function whose return type is a type predicate `arg is Type` that narrows types in conditional blocks",
              "A try catch block",
              "An assertion"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`function isFish(pet: Pet): pet is Fish` narrows the type inside `if` branches."
          },
          {
            "q": "What does `keyof T` produce in TypeScript?",
            "o": [
              "An array of keys",
              "A union type of all public property names (keys) of type `T`",
              "Object values",
              "Length of type"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`keyof User` produces a union of string/number literal property names of `User`."
          },
          {
            "q": "What does `typeof variable` produce when used in a TypeScript type position?",
            "o": [
              "'string' or 'number'",
              "Captures the TypeScript type of the given variable or property",
              "Object class",
              "Runtime type tag"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "In type context, `type T = typeof config;` captures the inferred static type of `config`."
          },
          {
            "q": "What does `as const` (const assertion) do in TypeScript?",
            "o": [
              "Freezes object at runtime",
              "Instructs compiler to infer the most specific literal types and make all properties readonly",
              "Declares a constant variable",
              "Converts to JSON"
            ],
            "a": 1,
            "difficulty": "medium",
            "explanation": "`const colors = ['red', 'blue'] as const;` infers a readonly tuple of exact string literals."
          },
          {
            "q": "What does the `satisfies` operator introduced in TypeScript 4.9 do?",
            "o": [
              "Validates that an expression matches a type contract without changing or widening the inferred type of the expression",
              "Casts type forcefully",
              "Freezes object",
              "Creates an interface"
            ],
            "a": 0,
            "difficulty": "hard",
            "explanation": "`satisfies` checks type compatibility while preserving exact literal inferred types for properties."
          }
        ]
      },
      "generics": {
        "id": "generics",
        "name": "Generics",
        "icon": "🧬",
        "desc": "Generic functions, classes, and constraints.",
        "questions": [
          {
            "q": "What syntax represents generic type arguments in TypeScript?",
            "o": [
              "(T)",
              "[T]",
              "<T>",
              "{T}"
            ],
            "a": 2,
            "difficulty": "easy",
            "explanation": "Angle brackets `<T>` define generic type parameters."
          },
          {
            "q": "What is a generic constraint in TypeScript syntax?",
            "o": [
              "`<T extends BaseType>` to enforce that type parameter T must satisfy a specific shape or type",
              "`<T : BaseType>`",
              "`<T implements BaseType>`",
              "`<T with BaseType>`"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`<T extends { length: number }>` restricts `T` to types having a `length` property."
          },
          {
            "q": "What does utility type `Partial<T>` do in TypeScript?",
            "o": [
              "Returns half the properties",
              "Constructs a type with all properties of `T` set to optional (`?`)",
              "Makes all properties required",
              "Freezes properties"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Partial<User>` makes every field in `User` optional."
          },
          {
            "q": "What does utility type `Required<T>` do?",
            "o": [
              "Makes all properties required, removing any optional `?` flags",
              "Makes properties readonly",
              "Deletes optional keys",
              "Validates input"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Required<T>` converts all optional properties into mandatory properties."
          },
          {
            "q": "What does utility type `Readonly<T>` do in TypeScript?",
            "o": [
              "Freezes object at runtime",
              "Constructs a compile-time type with all properties of `T` marked as `readonly`",
              "Deletes setters",
              "Hides properties"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Readonly<T>` prevents reassignment to any property of `T` at compile time."
          },
          {
            "q": "What does `Record<K, T>` do in TypeScript?",
            "o": [
              "Creates an audio record",
              "Constructs an object type whose property keys are `K` and property values are `T`",
              "A database record",
              "A tuple type"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Record<string, number>` types an object mapping string keys to numeric values."
          },
          {
            "q": "What does `Pick<T, K>` do in TypeScript?",
            "o": [
              "Constructs a type by picking a subset of property keys `K` from type `T`",
              "Removes keys K from T",
              "Selects random item",
              "Picks first property"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Pick<User, 'id' | 'email'>` extracts only the specified keys from `User`."
          },
          {
            "q": "What does `Omit<T, K>` do in TypeScript?",
            "o": [
              "Picks keys K",
              "Constructs a type with all properties of `T` except the omitted keys `K`",
              "Removes null values",
              "Deletes object"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`Omit<User, 'password'>` creates a type with `password` removed from `User`."
          },
          {
            "q": "What does `Exclude<UnionType, ExcludedMembers>` do?",
            "o": [
              "Excludes types from a union that are assignable to ExcludedMembers",
              "Removes object properties",
              "Throws error",
              "Filters arrays"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`Exclude<'a' | 'b' | 'c', 'a'>` yields `'b' | 'c'`."
          },
          {
            "q": "What does `Extract<Type, Union>` do in TypeScript?",
            "o": [
              "Extracts members from Type that are assignable to Union",
              "Picks object properties",
              "Deletes union",
              "Extracts strings"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "`Extract` retains only the overlapping assignable types between two unions."
          },
          {
            "q": "What does `ReturnType<T>` do when applied to a function type?",
            "o": [
              "Calls the function",
              "Extracts the return type of the function type `T`",
              "Returns function signature",
              "Returns boolean"
            ],
            "a": 1,
            "difficulty": "easy",
            "explanation": "`ReturnType<typeof fetch>` extracts the Promise return type of the `fetch` function."
          },
          {
            "q": "What is a Conditional Type in TypeScript?",
            "o": [
              "`T extends U ? TrueType : FalseType`",
              "An if-else statement",
              "A switch type",
              "A runtime check"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Conditional types evaluate type relationships and choose a type branch based on `extends`."
          },
          {
            "q": "What does the `infer` keyword do inside a conditional type?",
            "o": [
              "Deduces variable value",
              "Introduces a type variable to be deduced within the true branch of a conditional type",
              "Infers type from server",
              "Suppresses error"
            ],
            "a": 1,
            "difficulty": "hard",
            "explanation": "`T extends (infer U)[] ? U : never` extracts the element type `U` from an array type."
          },
          {
            "q": "What is a Mapped Type in TypeScript?",
            "o": [
              "`{ [P in K]: T }` allowing transformation of properties of an existing type into a new type",
              "A Map data structure",
              "A geographic map",
              "A loop in code"
            ],
            "a": 0,
            "difficulty": "medium",
            "explanation": "Mapped types iterate over keys to produce transformed object structures."
          },
          {
            "q": "What does `Parameters<T>` extract from a function type?",
            "o": [
              "A tuple type of all argument parameter types of function type `T`",
              "Count of parameters",
              "Function name",
              "Return type"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`Parameters<typeof fn>` captures parameter types as a tuple."
          },
          {
            "q": "What does utility type `NonNullable<T>` do?",
            "o": [
              "Constructs a type by excluding `null` and `undefined` from `T`",
              "Makes type required",
              "Throws on null",
              "Initializes to empty object"
            ],
            "a": 0,
            "difficulty": "easy",
            "explanation": "`NonNullable<string | null | undefined>` yields `string`."
          }
        ]
      }
    }
  }
};
