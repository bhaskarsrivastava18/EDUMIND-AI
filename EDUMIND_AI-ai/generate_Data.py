import pandas as pd
import random

data = []

for _ in range(2000):
    hours = random.randint(2, 10)
    weak_score = random.randint(10, 80)
    strong_score = random.randint(60, 100)
    difficulty = random.randint(3, 10)
    consistency = random.randint(3, 10)
    mock_score = random.randint(40, 90)

    weakness_gap = strong_score - weak_score
    performance_index = (mock_score + consistency * 10) / 2

    weak_time = hours * (0.4 + (100 - weak_score)/200 + difficulty/20)
    strong_time = hours * (0.3 + strong_score/200)
    revision_time = hours - (weak_time + strong_time)

    if revision_time < 0:
        revision_time = hours * 0.2

    data.append([
        hours, weak_score, strong_score, difficulty,
        consistency, mock_score, weakness_gap,
        performance_index,
        round(weak_time, 2),
        round(strong_time, 2),
        round(revision_time, 2)
    ])

columns = [
    "hours", "weak_score", "strong_score", "difficulty",
    "consistency", "mock_score", "weakness_gap",
    "performance_index",
    "weak_time", "strong_time", "revision_time"
]

df = pd.DataFrame(data, columns=columns)

df.to_csv("data.csv", index=False)

print("🔥 Dataset generated in AI folder")