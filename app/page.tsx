// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="card">
          <h2>Kalkulator Hindcasting Gelombang</h2>
          <Link href="/calculators/hindcasting">
            <button className="btn">Mulai</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
