import { type FC } from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Avatar } from "../ui/Avatar";

interface Customer {
  company: string;
  contact: string;
  email: string;
  dealValue: string;
  stage: string;
  stageVariant: "default" | "success" | "warning" | "neutral";
}

const customers: Customer[] = [
  {
    company: "㈜아이노베이션",
    contact: "박민수",
    email: "m.park@innovation.co.kr",
    dealValue: "₩1.5억",
    stage: "협상",
    stageVariant: "success",
  },
  {
    company: "㈜테크브릿지",
    contact: "이서연",
    email: "sy.lee@techbridge.kr",
    dealValue: "₩8,200만",
    stage: "제안",
    stageVariant: "default",
  },
  {
    company: "㈜데이터허브",
    contact: "최재민",
    email: "jm.choi@datahub.kr",
    dealValue: "₩3,400만",
    stage: "미팅",
    stageVariant: "warning",
  },
  {
    company: "㈜클라우드웍스",
    contact: "정다은",
    email: "de.jeong@cloudworks.kr",
    dealValue: "₩2.1억",
    stage: "리드",
    stageVariant: "neutral",
  },
  {
    company: "㈜넥스트랩",
    contact: "황수진",
    email: "sj.hwang@nextlab.kr",
    dealValue: "₩4,500만",
    stage: "계약",
    stageVariant: "success",
  },
  {
    company: "㈜핀테크솔루션",
    contact: "윤태호",
    email: "th.yoon@fintech.kr",
    dealValue: "₩6,100만",
    stage: "제안",
    stageVariant: "default",
  },
];

export const CustomerTable: FC = () => (
  <Card className="overflow-hidden p-0">
    <div className="px-5 py-4 border-b border-navy-100">
      <h3 className="text-[15px] font-semibold text-navy-800">최근 업데이트 고객</h3>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-navy-100">
            <th className="text-left text-[11px] font-semibold text-navy-400 uppercase tracking-wider px-5 py-3">
              회사명
            </th>
            <th className="text-left text-[11px] font-semibold text-navy-400 uppercase tracking-wider px-5 py-3">
              담당자
            </th>
            <th className="text-left text-[11px] font-semibold text-navy-400 uppercase tracking-wider py-3 hidden lg:table-cell">
              이메일
            </th>
            <th className="text-right text-[11px] font-semibold text-navy-400 uppercase tracking-wider px-5 py-3">
              딜 금액
            </th>
            <th className="text-right text-[11px] font-semibold text-navy-400 uppercase tracking-wider px-5 py-3">
              진행 단계
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr
              key={c.company}
              className="border-b border-navy-50 hover:bg-navy-50/70 transition-colors"
            >
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <Avatar initials={c.contact.slice(0, 1)} size="sm" />
                  <span className="text-[13px] font-medium text-navy-800">{c.company}</span>
                </div>
              </td>
              <td className="px-5 py-3.5">
                <span className="text-[13px] text-navy-600">{c.contact}</span>
              </td>
              <td className="py-3.5 hidden lg:table-cell">
                <span className="text-[13px] text-navy-400">{c.email}</span>
              </td>
              <td className="px-5 py-3.5 text-right">
                <span className="text-[13px] font-medium text-navy-700">{c.dealValue}</span>
              </td>
              <td className="px-5 py-3.5 text-right">
                <Badge label={c.stage} variant={c.stageVariant} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="px-5 py-3 border-t border-navy-100 flex items-center justify-between">
      <span className="text-[12px] text-navy-400">6건 중 1-6 표시</span>
      <div className="flex items-center gap-1">
        <button className="w-7 h-7 rounded-md flex items-center justify-center text-navy-300 cursor-default">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 5l-5 5 5 5" />
          </svg>
        </button>
        <button className="w-7 h-7 rounded-md flex items-center justify-center text-accent-600 font-medium text-[13px] bg-accent-50">
          1
        </button>
        <button className="w-7 h-7 rounded-md flex items-center justify-center text-navy-500 hover:text-navy-700 hover:bg-navy-50 text-[13px] transition-colors">
          2
        </button>
        <button className="w-7 h-7 rounded-md flex items-center justify-center text-navy-500 hover:text-navy-700 hover:bg-navy-50 text-[13px] transition-colors">
          3
        </button>
        <button className="w-7 h-7 rounded-md flex items-center justify-center text-navy-500 hover:text-navy-700 hover:bg-navy-50 transition-colors">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M8 5l5 5-5 5" />
          </svg>
        </button>
      </div>
    </div>
  </Card>
);
