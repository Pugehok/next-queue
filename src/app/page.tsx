"use client";
import { Button } from "./Components/Button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-row">
        <div className="m-auto">
          <div className="w-full h-ful space-y-4">
            <h1 className="text-white font-semibold italic text-2xl">
              Сервис автоматизации контроля очереди
            </h1>
            <span className="text-main-lightgray white italic whitespace-pre-line mt-12">
              {`Наше решение поможет вам обслуживать большее количество гостей \n в загруженное время.`}
            </span>
          </div>
          <Link href='/auth/register'><Button intent={'accept'} className="rounded-xl mt-4 w-48">Начать работу</Button></Link>
        </div>
        <div className="m-auto">
          <h1 className="text-white font-semibold italic text-3xl">[IMG]</h1>
        </div>
      </main>
    </>
  );
}
