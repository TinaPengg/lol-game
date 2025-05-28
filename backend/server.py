from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# 載入模型
model_path = 'rf_model.pkl'
if not os.path.exists(model_path):
    raise FileNotFoundError(f"找不到模型檔案: {model_path}")

model = joblib.load(model_path)

# 定義完整的 52 個特徵欄位
ALL_FEATURES = [
    'blueChampionKill', 'blueTowerKill', 'blueInhibitorKill', 'blueBaronKill',
    'blueRiftHeraldKill', 'blueTotalGold', 'blueMinionsKilled', 'blueJungleMinionsKilled', 'blueAvgPlayerLevel',
    'redChampionKill', 'redTowerKill', 'redInhibitorKill', 'redBaronKill',
    'redRiftHeraldKill', 'redTotalGold', 'redMinionsKilled', 'redJungleMinionsKilled', 'redAvgPlayerLevel',
    'blueDragonKill', 'blueDragonHextechKill', 'blueDragonChemtechKill', 'blueDragonFireKill',
    'blueDragonAirKill', 'blueDragonEarthKill', 'blueDragonWaterKill', 'blueDragonElderKill',
    'redDragonKill', 'redDragonHextechKill', 'redDragonChemtechKill', 'redDragonFireKill',
    'redDragonAirKill', 'redDragonEarthKill', 'redDragonWaterKill', 'redDragonElderKill',
    'blueVoidgrubKill', 'blueAtakhanKill', 'redVoidgrubKill', 'redAtakhanKill',
    'redDragonChemtech_DragonKill', 'redDragonEarth_DragonKill', 'blueDragonHextech_DragonKill',
    'redDragonHextech_DragonKill', 'redDragonWater_DragonKill', 'blueDragonFire_DragonKill',
    'blueDragonChemtech_DragonKill', 'redDragonAir_DragonKill', 'blueDragonWater_DragonKill',
    'redDragonFire_DragonKill', 'blueDragonEarth_DragonKill', 'blueDragonAir_DragonKill',
    'redDragonElder_DragonKill', 'blueDragonElder_DragonKill'
]

@app.route('/api/analyze', methods=['POST'])
def analyze():
    try:
        data = request.json
        print("收到前端資料:", data)

        # 處理資料，缺少欄位補 0
        features = [float(data.get(key, 0) or 0) for key in ALL_FEATURES]
        features = np.array(features).reshape(1, -1)

        # 預測結果
        prediction = model.predict(features)[0]  # 0:紅隊勝利, 1:藍隊勝利

        # 預測機率
        probabilities = model.predict_proba(features)[0]  # [P(紅隊勝利), P(藍隊勝利)]
        blue_win_rate = probabilities[1] * 100
        red_win_rate = probabilities[0] * 100

        result = {
            'winner': '藍隊勝利' if prediction == 1 else '紅隊勝利',
            'blue_win_rate': f"{blue_win_rate:.2f}%",
            'red_win_rate': f"{red_win_rate:.2f}%"
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)