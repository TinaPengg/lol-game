import React, { useState } from 'react';

export default function GameStatsForm() {
  const [formData, setFormData] = useState({
    blueChampionKill: '',
    blueTowerKill: '',
    blueInhibitorKill: '',
    blueBaronKill: '',
    blueRiftHeraldKill: '',
    blueTotalGold: '',
    blueMinionsKilled: '',
    blueJungleMinionsKilled: '',
    blueAvgPlayerLevel: '',
    redChampionKill: '',
    redTowerKill: '',
    redInhibitorKill: '',
    redBaronKill: '',
    redRiftHeraldKill: '',
    redTotalGold: '',
    redMinionsKilled: '',
    redJungleMinionsKilled: '',
    redAvgPlayerLevel: '',
    blueDragonKill: '',
    blueDragonHextechKill: '',
    blueDragonChemtechKill: '',
    blueDragonFireKill: '',
    blueDragonAirKill: '',
    blueDragonEarthKill: '',
    blueDragonWaterKill: '',
    blueDragonElderKill: '',
    redDragonKill: '',
    redDragonHextechKill: '',
    redDragonChemtechKill: '',
    redDragonFireKill: '',
    redDragonAirKill: '',
    redDragonEarthKill: '',
    redDragonWaterKill: '',
    redDragonElderKill: '',
    blueVoidgrubKill: '',
    blueAtakhanKill: '',
    redVoidgrubKill: '',
    redAtakhanKill: '',
    redDragonChemtech_DragonKill: '',
    redDragonEarth_DragonKill: '',
    blueDragonHextech_DragonKill: '',
    redDragonHextech_DragonKill: '',
    redDragonWater_DragonKill: '',
    blueDragonFire_DragonKill: '',
    blueDragonChemtech_DragonKill: '',
    redDragonAir_DragonKill: '',
    blueDragonWater_DragonKill: '',
    redDragonFire_DragonKill: '',
    blueDragonEarth_DragonKill: '',
    blueDragonAir_DragonKill: '',
    redDragonElder_DragonKill: '',
    blueDragonElder_DragonKill: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      console.log('後端回傳結果:', responseData);
      setResult(responseData); // 設定結果
    } catch (error) {
      console.error('發送請求失敗:', error);
      setResult({ error: '發送請求失敗，請檢查後端服務。' });
    }
  };

  const groupStyle = {
    border: '1px solid #a88b4d',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '20px',
    background: '#111827'
  };

  const groupTitleStyle = {
    fontSize: '18px',
    color: '#c7a560',
    marginBottom: '10px',
    borderBottom: '1px solid #a88b4d',
    paddingBottom: '4px',
    fontWeight: 'bold'
  };

  const labelStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    fontFamily: 'Verdana, sans-serif'
  };

  const inputStyle = {
    width: '80px',
    padding: '6px',
    marginLeft: '10px',
    border: '1px solid #a88b4d',
    borderRadius: '4px',
    backgroundColor: '#1e2a44',
    color: '#e0d7c6'
  };

  const buttonStyle = {
    backgroundColor: '#a88b4d',
    color: '#0a0f1c',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    boxShadow: '0 0 10px #a88b4d',
    transition: 'all 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#c7a560',
    boxShadow: '0 0 20px #c7a560'
  };

  const [hover, setHover] = useState(false);
  const [result, setResult] = useState(null);

  const renderInput = (label, name) => (
    <div key={name} style={labelStyle}>
      <label htmlFor={name}>{label}：</label>
      <input
        type="number"
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        style={inputStyle}
      />
    </div>
  );

  return (
    <div style={{ background: '#0a0f1c', color: '#e0d7c6', padding: '20px', maxWidth: '700px', margin: '0 auto', borderRadius: '10px', border: '2px solid #a88b4d', boxShadow: '0 0 20px rgba(168,139,77,0.5)' }}>
      <h2 style={{ textAlign: 'center', color: '#a88b4d', fontFamily: 'Georgia, serif' }}>LoL 戰場數據分析</h2>
      <form onSubmit={handleSubmit}>
        <div style={groupStyle}>
          <div style={groupTitleStyle}>藍隊數據</div>
          {['blueChampionKill', 'blueTowerKill', 'blueInhibitorKill', 'blueBaronKill', 'blueRiftHeraldKill', 'blueTotalGold', 'blueMinionsKilled', 'blueJungleMinionsKilled', 'blueAvgPlayerLevel'].map((key) =>
            renderInput(key, key)
          )}
        </div>

        <div style={groupStyle}>
          <div style={groupTitleStyle}>紅隊數據</div>
          {['redChampionKill', 'redTowerKill', 'redInhibitorKill', 'redBaronKill', 'redRiftHeraldKill', 'redTotalGold', 'redMinionsKilled', 'redJungleMinionsKilled', 'redAvgPlayerLevel'].map((key) =>
            renderInput(key, key)
          )}
        </div>

        <div style={groupStyle}>
          <div style={groupTitleStyle}>藍隊龍</div>
          {['blueDragonKill', 'blueDragonHextechKill', 'blueDragonChemtechKill', 'blueDragonFireKill', 'blueDragonAirKill', 'blueDragonEarthKill', 'blueDragonWaterKill', 'blueDragonElderKill'].map((key) =>
            renderInput(key, key)
          )}
        </div>

        <div style={groupStyle}>
          <div style={groupTitleStyle}>紅隊龍</div>
          {['redDragonKill', 'redDragonHextechKill', 'redDragonChemtechKill', 'redDragonFireKill', 'redDragonAirKill', 'redDragonEarthKill', 'redDragonWaterKill', 'redDragonElderKill'].map((key) =>
            renderInput(key, key)
          )}
        </div>

        <div style={groupStyle}>
          <div style={groupTitleStyle}>藍隊虛空蟲與阿塔坎</div>
          {['blueVoidgrubKill', 'blueAtakhanKill'].map((key) =>
            renderInput(key, key)
          )}
        </div>

        <div style={groupStyle}>
          <div style={groupTitleStyle}>紅隊虛空蟲與阿塔坎</div>
          {['redVoidgrubKill', 'redAtakhanKill'].map((key) =>
            renderInput(key, key)
          )}
        </div>

        <div style={groupStyle}>
          <div style={groupTitleStyle}>各種龍擊殺次數</div>
          {[
            'redDragonChemtech_DragonKill', 'redDragonEarth_DragonKill', 'blueDragonHextech_DragonKill',
            'redDragonHextech_DragonKill', 'redDragonWater_DragonKill', 'blueDragonFire_DragonKill',
            'blueDragonChemtech_DragonKill', 'redDragonAir_DragonKill', 'blueDragonWater_DragonKill',
            'redDragonFire_DragonKill', 'blueDragonEarth_DragonKill', 'blueDragonAir_DragonKill',
            'redDragonElder_DragonKill', 'blueDragonElder_DragonKill'
          ].map((key) =>
            renderInput(key, key)
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            type="submit"
            style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            開始分析
          </button>
        </div>
      </form>


      {/* 結果區塊 */}
      {result && (
        <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#1e2a44', borderRadius: '8px', textAlign: 'center', border: '1px solid #a88b4d' }}>
          {result.error ? (
            <p style={{ color: 'red' }}>錯誤: {result.error}</p>
          ) : (
            <>
              <p style={{ fontSize: '18px', color: '#c7a560', fontWeight: 'bold' }}>{result.winner}</p>
              <p>藍隊勝率: {result.blue_win_rate}</p>
              <p>紅隊勝率: {result.red_win_rate}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}