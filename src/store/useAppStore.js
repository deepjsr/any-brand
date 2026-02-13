import axios from "axios";

const EXCHANGE_API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;

export const useAppstore = create((set) => ({
  language: 'en',
  currency: 'USD',
  exchangeRates: { USD: 1 },
  setLanguage: (lang) => set({ language: lang }),
  setCurrency: async (curr) => {
    set({ currency: curr });

    // Fetch exchange rates when currency changes
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/USD`);
      const retes = response.data.conversion_rates;
      set({ exchangeRates: retes });
    } catch (error) {
      console.log("Currency API failed", error);
    }
  }

}));

