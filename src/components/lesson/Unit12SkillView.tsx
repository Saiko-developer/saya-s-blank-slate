/**
 * Renders Unit 12 (Urbanization) skills using the REAL textbook data in
 * `src/data/textbookUnit12.json` + `src/data/unit12Supplement.ts` +
 * `src/data/grammar/unit12.ts`, reusing the shared ExerciseKit presentation.
 * Fully sandboxed: nothing here reads or changes Unit 1–11 data.
 */
import { useState } from "react";
import { BookOpen, Languages, ListChecks } from "lucide-react";

import { LessonAudioPlayer } from "@/components/LessonAudioPlayer";
import {
  ExerciseGroup,
  OwlBadge,
  ParagraphBlock,
  ToggleReveal,
  VocabCard,
} from "@/components/lesson/ExerciseKit";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GrammarScriptView } from "@/components/lesson/GrammarScriptView";
import { UNIT12_GRAMMAR } from "@/data/grammar/unit12";
import unit12 from "@/data/textbookUnit12.json";
import {
  partA12A_translations,
  partB12A_translations,
  partC12A_translations,
  grammar12C,
  vocab12B,
} from "@/data/unit12Supplement";
import { getUnitAudio } from "@/lib/localData";
import type { PracticeSkill } from "@/lib/practice";

/* eslint-disable @typescript-eslint/no-explicit-any */

const UNIT12 = unit12 as any;

function getUnit12Lesson(code: string) {
  const all = [...(UNIT12.lessons ?? []), ...(UNIT12.sections ?? [])];
  return all.find((l: any) => l?.code === code) ?? null;
}

function getUnit12Section(prefix: string) {
  return (
    (UNIT12.sections ?? []).find((s: any) => String(s?.lesson ?? "").startsWith(prefix)) ?? null
  );
}

export function Unit12SkillView({ skill }: { skill: PracticeSkill }) {
  if (skill === "reading") return <ReadingView12 />;
  if (skill === "vocabulary") return <VocabularyView12 />;
  if (skill === "grammar") return <GrammarView12 />;
  if (skill === "listening" || skill === "speaking")
    return <ListeningSpeakingView12 skill={skill} />;
  return <WritingView12 />;
}

/* ------------------------------ Reading (12A) ---------------------------- */

function ReadingView12() {
  const data = getUnit12Section("12A") as any;
  const lesson = getUnit12Lesson("12A") as any;
  const passage = data?.reading_passage;
  const comp = data?.comprehension;
  const [showFullMy, setShowFullMy] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <span className="rounded-full bg-primary/10 px-2.5 py-1">12A · Reading</span>
        </div>
        <h2 className="mt-2 text-2xl font-bold leading-tight">{data?.topic}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{passage?.title}</p>

        <Button
          size="sm"
          variant={showFullMy ? "default" : "outline"}
          className="mt-3 gap-1.5"
          onClick={() => setShowFullMy((v) => !v)}
        >
          <Languages className="h-3.5 w-3.5" />
          {showFullMy ? "Hide all Burmese" : "Translate Whole Passage to Burmese"}
        </Button>

        <div className="mt-4 space-y-5">
          {(passage?.paragraphs ?? []).map((p: any) => (
            <ParagraphBlock key={p.paragraph_id} block={p} forceShowMy={showFullMy} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <OwlBadge>
          <p className="font-semibold">မင်္ဂလာပါ! ဆရာ ဇီးကွက်ပါ 🦉</p>
          <p>
            ဘယ်ဘက်က မြို့ပြပြောင်းလဲမှု စာပိုဒ်ကို သေသေချာချာ ဖတ်ပါ။ ပြီးရင် လေ့ကျင့်ခန်း
            တစ်ခုချင်း ဖြေကြည့်ပါ။ <strong>အဖြေတွေကို မပြသေးပါဘူး</strong> — ကိုယ်တိုင် စဉ်းစားပြီး
            ကြိုးစားကြည့်ပါ။
          </p>
        </OwlBadge>

        {data?.pre_reading?.length ? (
          <section className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <ListChecks className="h-3.5 w-3.5" /> Pre-reading
            </div>
            <ol className="mt-3 space-y-3">
              {data.pre_reading.map((q: any) => (
                <li key={q.id} className="rounded-xl border border-border bg-background p-3">
                  <p className="text-sm font-medium leading-relaxed">
                    {q.id}. {q.question}
                  </p>
                  <ToggleReveal label="Show idea" tone="emerald">
                    {q.suggested_answer}
                  </ToggleReveal>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {comp?.part_A?.exercises?.length ? (
          <ExerciseGroup
            title="Exercise A — Fill the gaps with sentences A–E"
            titleMy="လေ့ကျင့်ခန်း A — ကွက်လပ်များတွင် ဝါကျ A–E ဖြည့်ပါ"
            instructions={comp.part_A.instructions}
            enableStructure={false}
            placeholder="A–E…"
            items={comp.part_A.exercises.map((e: any) => ({
              id: e.question_number,
              text: e.question ?? e.text,
              translation: partA12A_translations[e.question_number] ?? "",
              answer: e.answer ?? "",
            }))}
          />
        ) : null}

        {comp?.part_B?.exercises?.length ? (
          <ExerciseGroup
            title="Exercise B — Examples for each general expression"
            titleMy="လေ့ကျင့်ခန်း B — အထွေထွေ အသုံးအနှုန်းများ၏ ဥပမာများ"
            instructions={comp.part_B.instructions}
            enableStructure={false}
            placeholder="List the examples…"
            items={comp.part_B.exercises.map((e: any) => ({
              id: e.question_number,
              text: e.question ?? e.text,
              translation: partB12A_translations[e.question_number] ?? "",
              answer: e.answer ?? "",
            }))}
          />
        ) : null}

        {comp?.part_C?.exercises?.length ? (
          <ExerciseGroup
            title="Exercise C — Full-sentence answers"
            titleMy="လေ့ကျင့်ခန်း C — အဖြေအပြည့်အစုံ"
            instructions={comp.part_C.instructions}
            enableStructure={false}
            items={comp.part_C.exercises.map((e: any) => ({
              id: e.question_number,
              text: e.question ?? e.text,
              translation: partC12A_translations[e.question_number] ?? "",
              answer: e.answer ?? "",
            }))}
          />
        ) : null}

        {lesson?.questions?.length ? (
          <ExerciseGroup
            title="Comprehension check"
            titleMy="နားလည်မှု စစ်ဆေးခြင်း"
            instructions={lesson?.intro ?? ""}
            enableStructure={false}
            placeholder="Type your answer…"
            items={lesson.questions.map((q: any) => ({
              id: q.id,
              text: q.question,
              translation: "",
              answer: q.suggested_answer ?? q.answer ?? "",
            }))}
          />
        ) : null}
      </section>
    </div>
  );
}

/* ---------------------------- Vocabulary (12B) --------------------------- */

function VocabularyView12() {
  const lesson = getUnit12Lesson("12B") as any;
  const data = getUnit12Section("12B") as any;
  const partA = data?.part_A;
  const partB = data?.part_B;

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <span className="rounded-full bg-primary/10 px-2.5 py-1">12B · Vocabulary</span>
        </div>
        <h2 className="mt-2 text-2xl font-bold leading-tight">{lesson?.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{lesson?.titleMy}</p>
        <OwlBadge>
          {lesson?.introMy ?? "Compound nouns များကို လေ့လာပါမယ်။"}{" "}
          <strong>အဖြေတွေကို မပြသေးပါဘူး</strong> — ကိုယ်တိုင် စဉ်းစားပြီး ကြိုးစားကြည့်ပါ။
        </OwlBadge>
      </header>

      <section className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <BookOpen className="h-3.5 w-3.5" /> Vocabulary — Word · Pronunciation · မြန်မာ အဓိပ္ပာယ်
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {vocab12B.map((v) => (
            <VocabCard key={v.word} item={v} />
          ))}
        </div>
        <details className="mt-5">
          <summary className="cursor-pointer text-sm font-semibold text-primary">
            📋 Example sentences from the unit
          </summary>
          <ul className="mt-2 space-y-1.5 text-sm">
            {vocab12B
              .filter((v) => v.exampleEn)
              .map((v) => (
                <li key={v.word}>
                  <span className="font-semibold">{v.word}</span> — {v.exampleEn}
                </li>
              ))}
          </ul>
        </details>
      </section>

      {partA?.exercises?.length ? (
        <ExerciseGroup
          title="Exercise A — Compound nouns"
          titleMy="လေ့ကျင့်ခန်း A — ပေါင်းစပ် နာမ်များ"
          instructions={partA.instructions}
          enableStructure={false}
          placeholder="Type the compound noun…"
          items={partA.exercises.map((e: any) => ({
            id: e.question_number,
            text: e.question ?? e.text,
            translation: "",
            answer: e.answer ?? "",
          }))}
        />
      ) : null}

      {partB?.exercises?.length ? (
        <ExerciseGroup
          title="Exercise B — Complete the sentences"
          titleMy="လေ့ကျင့်ခန်း B — ဝါကျများ ဖြည့်စွက်ပါ"
          instructions={partB.instructions}
          enableStructure={false}
          placeholder="Type your answer…"
          items={partB.exercises.map((e: any) => ({
            id: e.question_number,
            text: e.question ?? e.text,
            translation: "",
            answer: e.answer ?? "",
          }))}
        />
      ) : null}
    </div>
  );
}

/* ------------------------------ Grammar (12C) ---------------------------- */

function GrammarView12() {
  const lesson = getUnit12Lesson("12C") as any;
  const data = getUnit12Section("12C") as any;

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <span className="rounded-full bg-primary/10 px-2.5 py-1">12C · Grammar</span>
        </div>
        <h2 className="mt-2 text-2xl font-bold leading-tight">{lesson?.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{lesson?.titleMy}</p>
      </header>

      <GrammarScriptView grammar={UNIT12_GRAMMAR} />

      <section className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <BookOpen className="h-3.5 w-3.5" /> ဂရမ်မာ ရှင်းလင်းချက်
        </div>
        <div className="mt-3 space-y-3 text-sm leading-relaxed">
          <p>{grammar12C.whatMy}</p>
          <p>{grammar12C.whenMy}</p>
          <p>{grammar12C.whyMy}</p>
        </div>
        {grammar12C.examples?.length ? (
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-semibold text-primary">
              📋 ဥပမာများ (Examples)
            </summary>
            <ul className="mt-2 space-y-1.5 text-sm">
              {grammar12C.examples.map((ex: any) => (
                <li key={ex.en}>
                  {ex.en}{" "}
                  {ex.phrase ? <span className="text-muted-foreground">— {ex.phrase}</span> : null}
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </section>

      {data?.part_A?.exercises?.length ? (
        <ExerciseGroup
          title="Exercise A — that / which"
          titleMy="လေ့ကျင့်ခန်း A — that / which ဖြည့်စွက်ပါ"
          instructions={data.part_A.instructions}
          enableStructure={false}
          placeholder="that or which…"
          items={data.part_A.exercises.map((e: any) => ({
            id: e.question_number,
            text: e.question ?? e.text,
            translation: "",
            answer: e.answer ?? "",
          }))}
        />
      ) : null}

      {data?.part_B?.exercises?.length ? (
        <ExerciseGroup
          title="Exercise B — as … as comparisons"
          titleMy="လေ့ကျင့်ခန်း B — as … as နှိုင်းယှဉ်ချက်များ"
          instructions={data.part_B.instructions}
          enableStructure={false}
          placeholder="Type the sentence…"
          items={data.part_B.exercises.map((e: any) => ({
            id: e.question_number,
            text: e.question ?? e.text,
            translation: "",
            answer: e.answer ?? "",
          }))}
        />
      ) : null}
    </div>
  );
}

/* ----------------------- Listening / Speaking (12D) ---------------------- */

function ListeningSpeakingView12({ skill }: { skill: PracticeSkill }) {
  const lesson = getUnit12Lesson("12D") as any;
  const data = getUnit12Section("12D") as any;
  const audio = getUnitAudio(12);

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <span className="rounded-full bg-primary/10 px-2.5 py-1">
            12D · {skill === "speaking" ? "Speaking" : "Listening"}
          </span>
        </div>
        <h2 className="mt-2 text-2xl font-bold leading-tight">{lesson?.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{lesson?.titleMy}</p>
        <OwlBadge>{lesson?.introMy ?? lesson?.intro}</OwlBadge>
      </header>

      <LessonAudioPlayer
        src={audio}
        script={lesson?.intro ?? ""}
        label={skill === "speaking" ? "Model pronunciation" : "Listening track"}
        hint={
          skill === "speaking"
            ? "နမူနာ အသံထွက်ကို နားထောင်ပြီး လိုက်ဆိုကြည့်ပါ။"
            : "နားထောင်ပြီး ကွက်လပ်တွေကို ဖြည့်ပါ။"
        }
      />

      {skill === "listening" && data?.part_A?.exercises?.length ? (
        <ExerciseGroup
          title="Exercise A — Listen and complete"
          titleMy="လေ့ကျင့်ခန်း A — နားထောင်ပြီး ဖြည့်စွက်ပါ"
          instructions={data.part_A.instructions}
          enableStructure={false}
          placeholder="Type what you hear…"
          items={data.part_A.exercises.map((e: any) => ({
            id: e.question_number,
            text: e.question ?? e.text,
            translation: "",
            answer: e.answer ?? "Listen to the talk to confirm your answer",
          }))}
        />
      ) : null}

      {skill === "speaking" && data?.part_B?.exercises?.length ? (
        <ExerciseGroup
          title="Exercise B — Making an appointment"
          titleMy="လေ့ကျင့်ခန်း B — ချိန်းဆိုမှု ပြုလုပ်ခြင်း"
          instructions={data.part_B.instructions}
          enableStructure={false}
          placeholder="Type the expression…"
          items={data.part_B.exercises.map((e: any) => ({
            id: e.question_number,
            text: e.question ?? e.text,
            translation: "",
            answer: e.answer ?? "",
          }))}
        />
      ) : null}

      <ExerciseGroup
        title={skill === "speaking" ? "Speak — practise aloud" : "Comprehension check"}
        titleMy={
          skill === "speaking" ? "လေ့ကျင့်ခန်း — အသံထွက် လေ့ကျင့်ပါ" : "နားထောင်ခြင်း မေးခွန်းများ"
        }
        instructions={lesson?.intro ?? ""}
        enableStructure={false}
        placeholder={skill === "speaking" ? "Type what you would say…" : "Type your answer…"}
        items={(skill === "speaking"
          ? (lesson?.bonusQuestions ?? lesson?.questions ?? [])
          : (lesson?.questions ?? [])
        ).map((q: any) => ({
          id: q.id,
          text: q.question,
          translation: "",
          answer: q.suggested_answer ?? q.answer ?? "",
        }))}
      />
    </div>
  );
}

/* ------------------------------ Writing (12E) ---------------------------- */

function WritingView12() {
  const lesson = getUnit12Lesson("12E") as any;
  const data = getUnit12Section("12E") as any;
  const task = data?.writing_task;
  const [draft, setDraft] = useState("");

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <span className="rounded-full bg-primary/10 px-2.5 py-1">12E · Writing</span>
        </div>
        <h2 className="mt-2 text-2xl font-bold leading-tight">{lesson?.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{lesson?.titleMy}</p>
        <OwlBadge>{lesson?.introMy ?? lesson?.intro}</OwlBadge>
      </header>

      <section className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <ListChecks className="h-3.5 w-3.5" /> Writing task
        </div>
        <p className="mt-2 text-sm leading-relaxed">{task?.instructions ?? lesson?.intro}</p>
        {task?.opening ? (
          <div className="mt-3 rounded-lg border border-border bg-background p-3 text-sm leading-relaxed">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Opening
            </span>
            <p className="mt-1">{task.opening}</p>
          </div>
        ) : null}
        {lesson?.bonusQuestions?.length ? (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
            {lesson.bonusQuestions.map((q: any) => (
              <li key={q.id}>{q.question}</li>
            ))}
          </ul>
        ) : null}
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={10}
          placeholder="Start writing here… ဒီနေရာမှာ စရေးပါ။"
          className="mt-4 text-sm leading-relaxed"
        />
        <p className="mt-2 text-xs text-muted-foreground">
          {draft.trim() ? draft.trim().split(/\s+/).length : 0} words
        </p>
        {lesson?.bonusQuestions?.[0]?.suggested_answer ? (
          <ToggleReveal label="Show model answer" tone="emerald">
            {lesson.bonusQuestions[0].suggested_answer}
          </ToggleReveal>
        ) : null}
      </section>
    </div>
  );
}
