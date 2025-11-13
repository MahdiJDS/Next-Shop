'use server';

import axios from "axios";

export async function sendBuyData(
  prevState: { success: boolean | null ; message: string },
  formData: FormData
) {
  try {
    const rawData = formData.get("data");
    if (!rawData) throw new Error("No data provided");
    
    const res = await axios.post("http://localhost:8000/Buylist", rawData);

    console.log("✅ Server action sent:", res.data);
    
    return { success: true, message: "Buylist submitted successfully!" };
  } catch (err) {
    console.error("❌ Error in server action:", err);
    return { success: false, message: "Failed to submit buylist." };
  }
}
