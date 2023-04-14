import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
export const registerChart = () => {
  return ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
  )
}
