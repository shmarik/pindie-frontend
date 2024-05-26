'use client'
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, 'new')
    return (
        <main className="main-inner">
            {newGames ? <CardsListSection id="new" title="Новые" data={newGames} /> : <Preloader />}
        </main>
    )
}