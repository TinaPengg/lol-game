import React, { useState } from 'react';

export default function GameStatsForm() {
  const fieldMap = {
    blueChampionKill: 'Blue Side Champion Kills',
    blueTowerKill: 'Blue Side Tower Kills',
    blueInhibitorKill: 'Blue Side Inhibitor Kills',
    blueBaronKill: 'Blue Side Baron Kills',
    blueRiftHeraldKill: 'Blue Side Rift Herald Kills',
    blueTotalGold: 'Blue Side Total Gold',
    blueMinionsKilled: 'Blue Side Minions Killed',
    blueJungleMinionsKilled: 'Blue Side Jungle Minions Killed',
    blueAvgPlayerLevel: 'Blue Side Average Player Level',

    redChampionKill: 'Red Side Champion Kills',
    redTowerKill: 'Red Side Tower Kills',
    redInhibitorKill: 'Red Side Inhibitor Kills',
    redBaronKill: 'Red Side Baron Kills',
    redRiftHeraldKill: 'Red Side Rift Herald Kills',
    redTotalGold: 'Red Side Total Gold',
    redMinionsKilled: 'Red Side Minions Killed',
    redJungleMinionsKilled: 'Red Side Jungle Minions Killed',
    redAvgPlayerLevel: 'Red Side Average Player Level',

    blueDragonKill: 'Blue Side Dragon Kills',
    blueDragonHextechKill: 'Blue Side Hextech Dragon Kills',
    blueDragonChemtechKill: 'Blue Side Chemtech Dragon Kills',
    blueDragonFireKill: 'Blue Side Fire Dragon Kills',
    blueDragonAirKill: 'Blue Side Air Dragon Kills',
    blueDragonEarthKill: 'Blue Side Earth Dragon Kills',
    blueDragonWaterKill: 'Blue Side Water Dragon Kills',
    blueDragonElderKill: 'Blue Side Elder Dragon Kills',

    redDragonKill: 'Red Side Dragon Kills',
    redDragonHextechKill: 'Red Side Hextech Dragon Kills',
    redDragonChemtechKill: 'Red Side Chemtech Dragon Kills',
    redDragonFireKill: 'Red Side Fire Dragon Kills',
    redDragonAirKill: 'Red Side Air Dragon Kills',
    redDragonEarthKill: 'Red Side Earth Dragon Kills',
    redDragonWaterKill: 'Red Side Water Dragon Kills',
    redDragonElderKill: 'Red Side Elder Dragon Kills',

    blueVoidgrubKill: 'Blue Side Voidgrub Kills',
    blueAtakhanKill: 'Blue Side Atakhan Kills',
    redVoidgrubKill: 'Red Side Voidgrub Kills',
    redAtakhanKill: 'Red Side Atakhan Kills',

    blueDragonHextech_DragonKill: 'Blue Side Hextech Dragon Kills',
    blueDragonChemtech_DragonKill: 'Blue Side Chemtech Dragon Kills',
    blueDragonFire_DragonKill: 'Blue Side Fire Dragon Kills',
    blueDragonAir_DragonKill: 'Blue Side Air Dragon Kills',
    blueDragonEarth_DragonKill: 'Blue Side Earth Dragon Kills',
    blueDragonWater_DragonKill: 'Blue Side Water Dragon Kills',
    blueDragonElder_DragonKill: 'Blue Side Elder Dragon Kills',

    redDragonHextech_DragonKill: 'Red Side Hextech Dragon Kills',
    redDragonChemtech_DragonKill: 'Red Side Chemtech Dragon Kills',
    redDragonFire_DragonKill: 'Red Side Fire Dragon Kills',
    redDragonAir_DragonKill: 'Red Side Air Dragon Kills',
    redDragonEarth_DragonKill: 'Red Side Earth Dragon Kills',
    redDragonWater_DragonKill: 'Red Side Water Dragon Kills',
    redDragonElder_DragonKill: 'Red Side Elder Dragon Kills',
  };

  const [formData, setFormData] = useState(
    Object.fromEntries(Object.keys(fieldMap).map((key) => [key, '']))
  );

  const [hover, setHover] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      setResult(responseData);
    } catch (error) {
      console.error('Sending request failed:', error);
      setResult({ error: 'Sending request failed, please check backend.' });
    }
  };

  const groupStyle = { border: '1px solid #a88b4d', borderRadius: '8px', padding: '12px', marginBottom: '20px', background: '#111827' };
  const groupTitleStyle = { fontSize: '18px', color: '#c7a560', marginBottom: '10px', borderBottom: '1px solid #a88b4d', paddingBottom: '4px', fontWeight: 'bold' };
  const labelStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontFamily: 'Verdana, sans-serif' };
  const inputStyle = { width: '80px', padding: '6px', marginLeft: '10px', border: '1px solid #a88b4d', borderRadius: '4px', backgroundColor: '#1e2a44', color: '#e0d7c6' };
  const buttonStyle = { backgroundColor: '#a88b4d', color: '#0a0f1c', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 0 10px #a88b4d', transition: 'all 0.3s ease' };
  const buttonHoverStyle = { backgroundColor: '#c7a560', boxShadow: '0 0 20px #c7a560' };

  const renderInput = (name) => (
    <div key={name} style={labelStyle}>
      <label htmlFor={name}>{fieldMap[name]}：</label>
      <input type="number" name={name} id={name} value={formData[name]} onChange={handleChange} style={inputStyle} />
    </div>
  );

  const blueKeys = ['blueChampionKill', 'blueTowerKill', 'blueInhibitorKill', 'blueBaronKill', 'blueRiftHeraldKill', 'blueTotalGold', 'blueMinionsKilled', 'blueJungleMinionsKilled', 'blueAvgPlayerLevel'];
  const redKeys = ['redChampionKill', 'redTowerKill', 'redInhibitorKill', 'redBaronKill', 'redRiftHeraldKill', 'redTotalGold', 'redMinionsKilled', 'redJungleMinionsKilled', 'redAvgPlayerLevel'];
  const blueDragonKeys = ['blueDragonKill', 'blueDragonHextechKill', 'blueDragonChemtechKill', 'blueDragonFireKill', 'blueDragonAirKill', 'blueDragonEarthKill', 'blueDragonWaterKill', 'blueDragonElderKill'];
  const redDragonKeys = ['redDragonKill', 'redDragonHextechKill', 'redDragonChemtechKill', 'redDragonFireKill', 'redDragonAirKill', 'redDragonEarthKill', 'redDragonWaterKill', 'redDragonElderKill'];
  const voidAtakhanBlue = ['blueVoidgrubKill', 'blueAtakhanKill'];
  const voidAtakhanRed = ['redVoidgrubKill', 'redAtakhanKill'];
  const dragonTypeKeys = [
    'blueDragonHextech_DragonKill', 'blueDragonChemtech_DragonKill', 'blueDragonFire_DragonKill',
    'blueDragonAir_DragonKill', 'blueDragonEarth_DragonKill', 'blueDragonWater_DragonKill', 'blueDragonElder_DragonKill',
    'redDragonHextech_DragonKill', 'redDragonChemtech_DragonKill', 'redDragonFire_DragonKill',
    'redDragonAir_DragonKill', 'redDragonEarth_DragonKill', 'redDragonWater_DragonKill', 'redDragonElder_DragonKill'
  ];

  return (
    <div style={{ background: '#0a0f1c', color: '#e0d7c6', padding: '20px', maxWidth: '700px', margin: '0 auto', borderRadius: '10px', border: '2px solid #a88b4d', boxShadow: '0 0 20px rgba(168,139,77,0.5)' }}>
      <h2 style={{ textAlign: 'center', color: '#a88b4d', fontFamily: 'Georgia, serif' }}>LoL MATCH DATA ANALYSIS</h2>
      <form onSubmit={handleSubmit}>
        <div style={groupStyle}><div style={groupTitleStyle}>BLUE SIDE DATA</div>{blueKeys.map(renderInput)}</div>
        <div style={groupStyle}><div style={groupTitleStyle}>RED SIDE DATA</div>{redKeys.map(renderInput)}</div>
        <div style={groupStyle}><div style={groupTitleStyle}>BLUE SIDE DRAGON</div>{blueDragonKeys.map(renderInput)}</div>
        <div style={groupStyle}><div style={groupTitleStyle}>RED SIDE DRAGON</div>{redDragonKeys.map(renderInput)}</div>
        <div style={groupStyle}><div style={groupTitleStyle}>BLUE SIDE VOIDGRUB AND ATAKHAN</div>{voidAtakhanBlue.map(renderInput)}</div>
        <div style={groupStyle}><div style={groupTitleStyle}>RED SIDE VOIDGRUB AND ATAKHAN</div>{voidAtakhanRed.map(renderInput)}</div>
        <div style={groupStyle}><div style={groupTitleStyle}>DRAGON KILLS BY TYPE</div>{dragonTypeKeys.map(renderInput)}</div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Start Analysis</button>
        </div>
      </form>

      {result && (
        <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#1e2a44', borderRadius: '8px', textAlign: 'center', border: '1px solid #a88b4d' }}>
          {result.error ? <p style={{ color: 'red' }}>Error: {result.error}</p> : (<>
            <p style={{ fontSize: '18px', color: '#c7a560', fontWeight: 'bold' }}>{result.winner}</p>
            <p>Blue Side Win Rate: {result.blue_win_rate}</p>
            <p>Red Side Win Rate: {result.red_win_rate}</p>
          </>)}
        </div>
      )}
    </div>
  );
}