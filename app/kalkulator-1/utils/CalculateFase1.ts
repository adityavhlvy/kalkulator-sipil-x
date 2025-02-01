export const CalculateFase1 = (data: any[], feff: number) => {
    if (data.length === 0) {
        throw new Error("Data input tidak valid atau kosong.");
    }

    if (feff <= 0) {
        throw new Error("Nilai Feff harus lebih besar dari 0.");
    }

    return data.map((row) => {
        const { year, month, u10 } = row;

        if (typeof u10 !== "number" || u10 <= 0) {
            console.warn(`Data u10 tidak valid pada baris ${year}-${month}:`, row);
            return { ...row, error: "u10 tidak valid" };
        }

        // Fase 1 calculations
        const tf = 1609 / u10;
        const c = tf < 3600
            ? 1.277 + (0.296 * (Math.tanh(0.9 * Math.log10(45 / tf))))
            : -0.15 * Math.log(tf) + 1.5334;

        const u3600 = u10 / c;
        const Rl = 1.9467 * Math.pow(u3600, -0.233);
        const uw = Rl * u3600;
        const uc = 1.1 * uw;
        const ua = 0.71 * Math.pow(uc, 1.23);
        const H = 1.616 * Math.pow(10, -2) * ua * Math.sqrt(feff);
        const Tm = 6.238 * Math.pow(10, -1) * Math.cbrt(ua * feff);

        return {
            year,
            month,
            u10,
            tf: tf.toFixed(4),
            c: c.toFixed(4),
            u3600: u3600.toFixed(4),
            Rl: Rl.toFixed(4),
            uw: uw.toFixed(4),
            uc: uc.toFixed(4),
            ua: ua.toFixed(4),
            H: H.toFixed(4),
            Tm: Tm.toFixed(4),
        };
    });
};
