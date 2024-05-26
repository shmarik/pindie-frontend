'use client'
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function TDS() {
    const tdsGames =  useGetDataByCategory(endpoints.games,"TDS");
    return (
        <main className="main-inner">
            {tdsGames ? <CardsListSection id="tds" title="TDS" data={tdsGames} /> : <Preloader />}
        </main>
    )
}