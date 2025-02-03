import React, { useEffect, useState } from "react";
import { noodleOptions, noodlesData } from "./Constant";

const NutritionTable = ({ noodles }) => {
  const [selectedNoodles, setSelectedNoodles] = useState(
    noodlesData?.find((noodle) => noodle.name === noodles)
  );

  useEffect(() => {
    const selected = noodlesData.find((noodle) => noodle.name === noodles);
    console.log(selected, "seledc");
    setSelectedNoodles(selected);
  }, [noodles]);

  console.log(selectedNoodles, "///");

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="bg-transparent overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="divide-y divide-gray-200">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                style={{
                  color: noodleOptions[noodles].titleColor,
                  backgroundColor: noodleOptions[noodles].color,
                }}
              >
                Nutritions
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                style={{
                  color: noodleOptions[noodles].titleColor,
                  backgroundColor: noodleOptions[noodles].color,
                }}
              >
                Per Pack
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                style={{
                  color: noodleOptions[noodles].titleColor,
                  backgroundColor: noodleOptions[noodles].color,
                }}
              >
                % RDA*
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Energy (Kcal)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.energy.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.energy.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Protein (g)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.protein.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.protein.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Carbohydrate (g)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.carbohydrate.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.carbohydrate.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Total Sugars (g)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.totalSugars.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.totalSugars.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Added Sugars (g)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.addedSugars.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.addedSugars.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Dietary Fibre (g)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.dietaryFibre.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.dietaryFibre.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Total Fat (g)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.totalFat.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.totalFat.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Saturated Fat (g)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.saturatedFat.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.saturatedFat.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Cholesterol (mg)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.cholesterol.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.cholesterol.rda}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                Sodium (mg)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.sodium.perPack}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {selectedNoodles.sodium.rda}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-xs text-gray-600">
            *Per score% RDA requirement for average adult per day (2000 kcal).
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionTable;
