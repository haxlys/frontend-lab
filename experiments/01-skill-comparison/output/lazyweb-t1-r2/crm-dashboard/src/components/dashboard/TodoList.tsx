import { type FC, useState } from "react";
import { Card } from "../ui/Card";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: "㈜아이노베이션 제안서 리뷰 및 발송", done: false },
  { id: 2, text: "신규 리드 12건 CRM 등록 확인", done: false },
  { id: 3, text: "Q3 영업 전략 문서 초안 작성", done: true },
  { id: 4, text: "박민수 대표님 팔로업 이메일 발송", done: false },
  { id: 5, text: "팀 위클리 리포트 취합 제출", done: true },
];

export const TodoList: FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggle = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-semibold text-navy-800">오늘의 할 일</h3>
        <span className="text-[12px] text-navy-400">
          {todos.filter((t) => !t.done).length}건 남음
        </span>
      </div>

      <div className="space-y-0.5">
        {todos.map((todo) => (
          <label
            key={todo.id}
            className="flex items-start gap-3 px-2 py-2.5 -mx-2 rounded-md cursor-pointer hover:bg-navy-50 transition-colors group"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggle(todo.id)}
              className="mt-0.5 w-4 h-4 rounded border-navy-300 text-accent-600 focus:ring-accent-500 cursor-pointer"
            />
            <span
              className={`text-[13px] leading-snug flex-1 transition-colors ${
                todo.done ? "text-navy-300 line-through" : "text-navy-700"
              }`}
            >
              {todo.text}
            </span>
          </label>
        ))}
      </div>
    </Card>
  );
};
