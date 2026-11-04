import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProblemWorkspace } from "@/components/problem-workspace";
import { getProblem, problems } from "@/lib/data";

export const instant = false;

export function generateStaticParams() {
  return problems.map((problem) => ({ label: problem.label }));
}

export async function generateMetadata({
  params,
}: PageProps<"/arena/problems/[label]">): Promise<Metadata> {
  const { label } = await params;
  const problem = getProblem(label);
  if (!problem) return { title: "Problème introuvable" };
  return {
    title: `${problem.label} — ${problem.title}`,
    description: problem.statement[0],
  };
}

export default async function ProblemPage({
  params,
}: PageProps<"/arena/problems/[label]">) {
  const { label } = await params;
  const problem = getProblem(label);
  if (!problem) notFound();

  return <ProblemWorkspace problem={problem} />;
}
