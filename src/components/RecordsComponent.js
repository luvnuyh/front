import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { recordMeal, fetchMeals, deleteMeal } from "../api/mealApi";

function RecordsComponent(props) {
    const [date, setDate] = useState("");
    const [mealType, setMealType] = useState("아침");
    const [dishName, setDishName] = useState("");
    const [description, setDescription] = useState("");
    const [foodNames, setFoodNames] = useState([]);
    const [meals, setMeals] = useState([]);

    const handleDateChange = (e) => setDate(e.target.value);
    const handleMealChange = (e) => setMealType(e.target.value);
    const handleDishChange = (e) => setDishName(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleSubmit = async () => {
        const mealData = {
            meal_time: mealType,
            content: description,
            date: date,
            food_names: foodNames
        };

        try {
            const mealResponse = await recordMeal(mealData);
            alert("식사 기록이 저장되었습니다.");
        } catch (error) {
            alert("식사 기록 저장 또는 이미지 업로드에 실패했습니다.");
        }
    };



    return (
        <div className="relative w-full h-auto bg-white rounded-[10px] shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">식단 기록</h2>
            <div className="flex flex-col items-center mb-4">
                <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center">
                    <FaCamera className="text-4xl text-gray-500 cursor-pointer"/>
                </div>
                <p className="text-sm text-gray-600 mt-2">이미지 업로드</p>
            </div>
            <div className="mb-4 flex items-center justify-center space-x-4">
                <label className="block text-m font-semibold text-gray-700">날짜 선택</label>
                <input
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    className="mt-1 p-2 border rounded"
                />
                <label className="block text-m font-semibold text-gray-700">식사 유형</label>
                <select
                    value={mealType}
                    onChange={handleMealChange}
                    className="mt-1 p-2 border rounded"
                >
                    <option>아침</option>
                    <option>점심</option>
                    <option>저녁</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-m font-semibold text-gray-700">요리명</label>
                <input
                    type="text"
                    value={dishName}
                    onChange={handleDishChange}
                    className="mt-1 w-2/5 p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-m font-semibold text-gray-700">설명</label>
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    className="mt-1 w-2/5 p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-m font-semibold text-gray-700">음식 이름들 (쉼표로 구분)</label>
                <input
                    type="text"
                    value={foodNames.join(', ')}
                    onChange={handleFoodNamesChange}
                    className="mt-1 w-2/5 p-2 border rounded"
                />
            </div>
            <h3 className="text-lg font-semibold mb-2">기록된 음식</h3>
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Weight</th>
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Meal</th>
                    <th className="py-2 px-4 border-b">Menu</th>
                </tr>
                </thead>
                <tbody>
                {dummyData.map((item, index) => (
                    <tr key={index} className="text-center">
                        <td className="py-2 px-4 border-b">{item.name}</td>
                        <td className="py-2 px-4 border-b">{item.weight}</td>
                        <td className="py-2 px-4 border-b">{item.date}</td>
                        <td className="py-2 px-4 border-b">{item.calories}</td>
                {meals.map((meal) => (
                    <tr key={meal.mid} className="text-center">
                        <td className="py-2 px-4 border-b">
                            <input
                                type="checkbox"
                                checked={selectedMeals.includes(meal.mid)}
                                onChange={() => handleCheckboxChange(meal.mid)}
                            />
                        </td>
                        <td className="py-2 px-4 border-b cursor-pointer" onClick={() => handleTitleClick(meal)}>{meal.content}</td>
                        <td className="py-2 px-4 border-b">{meal.date}</td>
                        <td className="py-2 px-4 border-b">{meal.meal_time}</td>
                        <td className="py-2 px-4 border-b">{meal.foods.map(food => food.food_name).join(', ')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex content-center justify-center space-x-4 mt-4">
                <button className="border border-solid border-[#605bff1a] text-[#605bff] px-32 py-2 rounded-xl">삭제
                </button>
                <button className="bg-[#605bff] text-white px-32 py-2 rounded-xl">저장</button>
                <button onClick={handleSubmit} className="bg-[#605bff] text-white px-32 py-2 rounded-xl">저장</button>
            </div>
        </div>
    );
}

export default RecordsComponent;