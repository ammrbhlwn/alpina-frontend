import { HomeView } from '@/sections/home';
import { getCategories, getPopularVehicles, getVehicles } from '@/actions';

export const metadata = {
  title: 'Home | Alpina',
  description: 'Browse the best vehicles and categories',
};

export default async function HomePage() {
  const categories = await getCategories();
  const popularVehicles = await getPopularVehicles();
  const vehicles = await getVehicles();

  return (
    <>
      <HomeView
        categories={categories}
        vehicles={vehicles}
        popularVehicles={popularVehicles}
      />
    </>
  );
}
