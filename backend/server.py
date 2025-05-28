from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# 載入模型
model_path = 'rf_model.pkl'  # 確保與你的檔案名稱一致
if not os.path.exists(model_path):
    raise FileNotFoundError(f"找不到模型檔案: {model_path}")

model = joblib.load(model_path)

@app.route('/api/analyze', methods=['POST'])
def analyze():
    try:
        data = request.json
        print("收到前端資料:", data)

        # 將資料轉換為模型需要的格式 (假設是單筆預測)
        features = [
            float(data.get(key, 0)) for key in [
                'blueChampionKill', 'blueTowerKill', 'blueInhibitorKill', 'blueBaronKill',
                'blueRiftHeraldKill', 'blueTotalGold', 'blueMinionsKilled', 'blueJungleMinionsKilled', 'blueAvgPlayerLevel',
                'redChampionKill', 'redTowerKill', 'redInhibitorKill', 'redBaronKill',
                'redRiftHeraldKill', 'redTotalGold', 'redMinionsKilled', 'redJungleMinionsKilled', 'redAvgPlayerLevel',
                'blueDragonKill', 'blueDragonHextechKill', 'blueDragonChemtechKill', 'blueDragonFireKill',
                'blueDragonAirKill', 'blueDragonEarthKill', 'blueDragonWaterKill', 'blueDragonElderKill',
                'redDragonKill', 'redDragonHextechKill', 'redDragonChemtechKill', 'redDragonFireKill',
                'redDragonAirKill', 'redDragonEarthKill', 'redDragonWaterKill', 'redDragonElderKill',
                'blueVoidgrubKill', 'blueAtakhanKill', 'redVoidgrubKill', 'redAtakhanKill'
            ]
        ]

        features = np.array(features).reshape(1, -1)

        # 使用模型預測
        prediction = model.predict(features)[0]
        result = {'prediction': int(prediction)}

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)