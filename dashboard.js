<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<style>
#fbd,#fbd *{box-sizing:border-box;margin:0;padding:0;}
#fbd{font-family:'Montserrat',sans-serif;color:#fff;font-size:13px;padding:0 28px 28px;max-width:1440px;margin:0 auto;display:block;}
#fbd .card{background:rgba(8,29,60,.6);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:16px 18px;position:relative;overflow:hidden;}
#fbd .card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:#0050b3;opacity:.7;}
#fbd .lbl{font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:7px;}
#fbd .kval{font-size:26px;font-weight:700;line-height:1;margin-bottom:4px;}
#fbd .kval.pos{color:#00c864;}#fbd .kval.neg{color:#ff4455;}#fbd .kval.neu{color:#fff;}
#fbd .ksub{font-size:11px;color:rgba(255,255,255,.4);}
#fbd .kbar{margin-top:10px;height:3px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden;}
#fbd .kbf{height:100%;border-radius:2px;background:#00c864;transition:width .6s;}
#fbd .kbf.r{background:#ff4455;}
#fbd .kgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:10px;}
#fbd .topbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;flex-wrap:wrap;}
#fbd .tfilter{display:flex;align-items:center;gap:6px;flex-wrap:wrap;}
#fbd .tfb{padding:7px 13px;border-radius:7px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(255,255,255,.5);font-family:'Montserrat',sans-serif;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;white-space:nowrap;}
#fbd .tfb:hover{color:#fff;border-color:rgba(255,255,255,.25);}
#fbd .tfb.on{background:rgba(0,80,179,.4);border-color:#0050b3;color:#fff;}
#fbd .sbtn{background:#0050b3;color:#fff;border:none;padding:10px 18px;border-radius:8px;font-family:'Montserrat',sans-serif;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;}
#fbd .sbtn:hover{background:#1a6fd4;}
#fbd .chartcard{background:rgba(8,29,60,.6);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:18px 22px;margin-bottom:10px;}
#fbd .ctitle{font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:14px;}
#fbd .cwrap{position:relative;height:180px;width:100%;}
#fbd .calcard{background:rgba(8,29,60,.6);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:18px 22px;margin-bottom:10px;}
#fbd .calhdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
#fbd .calhl{display:flex;align-items:center;gap:12px;}
#fbd .calnav{display:flex;gap:6px;}
#fbd .calnav button{background:rgba(4,14,30,.85);border:1px solid rgba(255,255,255,.08);color:#fff;width:26px;height:26px;border-radius:5px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;}
#fbd .calnav button:hover{background:#0050b3;border-color:#0050b3;}
#fbd .calmo{font-size:13px;font-weight:700;}
#fbd .calsbtn{background:rgba(0,80,179,.2);color:rgba(255,255,255,.6);border:1px solid rgba(0,80,179,.3);padding:5px 12px;border-radius:6px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:600;cursor:pointer;}
#fbd .calsbtn:hover{background:#0050b3;color:#fff;}
#fbd .caldh{display:grid;grid-template-columns:repeat(7,1fr) 100px;gap:3px;margin-bottom:3px;}
#fbd .caldh span{text-align:center;font-size:9px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.4);padding:4px 0;}
#fbd .calgrid{display:grid;grid-template-columns:repeat(7,1fr) 100px;gap:3px;}
#fbd .cc{min-height:64px;border-radius:7px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;padding:6px 7px;cursor:default;transition:all .15s;}
#fbd .cc.cp{cursor:pointer;}#fbd .cc.cp:hover{border-color:rgba(255,255,255,.18);background:rgba(255,255,255,.05);}
#fbd .cc.win{background:rgba(0,200,100,.07);border-color:rgba(0,200,100,.2);}
#fbd .cc.loss{background:rgba(255,68,85,.07);border-color:rgba(255,68,85,.2);}
#fbd .cc.emp{background:transparent!important;border-color:transparent!important;}
#fbd .cc.tod{border-color:rgba(255,255,255,.28)!important;}
#fbd .cc.tod .cdate{color:rgba(255,255,255,.9);font-weight:700;}
#fbd .cdate{font-size:9px;color:rgba(255,255,255,.4);margin-bottom:5px;font-weight:500;}
#fbd .cpnl{font-size:12px;font-weight:700;line-height:1;}
#fbd .cpnl.pos{color:#00c864;}#fbd .cpnl.neg{color:#ff4455;}
#fbd .ctlbl{font-size:9px;color:rgba(255,255,255,.35);margin-top:2px;}
#fbd .cwtot{min-height:64px;border-radius:7px;background:rgba(0,80,179,.1);border:1px solid rgba(0,80,179,.2);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6px;}
#fbd .cwtot.cp{cursor:pointer;}#fbd .cwtot.cp:hover{border-color:#0050b3;}
#fbd .cwtlbl{font-size:9px;color:rgba(255,255,255,.4);letter-spacing:.8px;text-transform:uppercase;margin-bottom:4px;font-weight:600;}
#fbd .cwtvl{font-size:13px;font-weight:700;}
#fbd .logcard{background:rgba(8,29,60,.6);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:18px 22px;margin-bottom:20px;}
#fbd .loghdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
#fbd .addbtn{background:#0050b3;color:#fff;border:none;padding:8px 16px;border-radius:7px;font-family:'Montserrat',sans-serif;font-size:12px;font-weight:600;cursor:pointer;}
#fbd .addbtn:hover{background:#1a6fd4;}
#fbd table{width:100%;border-collapse:collapse;}
#fbd th{text-align:left;font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.4);padding:8px 10px;border-bottom:1px solid rgba(255,255,255,.08);white-space:nowrap;}
#fbd td{padding:10px;border-bottom:1px solid rgba(255,255,255,.04);vertical-align:middle;font-size:13px;}
#fbd tr:last-child td{border-bottom:none;}
#fbd tr:hover td{background:rgba(0,80,179,.05);}
#fbd .ni{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:11px;color:rgba(255,255,255,.4);max-width:160px;display:block;}
#fbd .pp{color:#00c864;font-weight:600;}#fbd .pn{color:#ff4455;font-weight:600;}
#fbd .db{display:inline-block;padding:3px 9px;border-radius:4px;font-size:11px;font-weight:600;}
#fbd .db.long{background:rgba(0,200,100,.12);color:#00c864;border:1px solid rgba(0,200,100,.2);}
#fbd .db.short{background:rgba(255,68,85,.12);color:#ff4455;border:1px solid rgba(255,68,85,.2);}
#fbd .tvl{color:rgba(255,255,255,.4);text-decoration:none;font-size:11px;}
#fbd .tvl:hover{color:#fff;}
#fbd .ib{background:none;border:none;color:rgba(255,255,255,.4);cursor:pointer;font-size:13px;padding:3px 5px;}
#fbd .ib:hover{color:#fff;}#fbd .ib.d:hover{color:#ff4455;}
#fbd .es{text-align:center;padding:36px;color:rgba(255,255,255,.4);font-size:12px;}
#fbd .mbg{display:none;position:fixed;inset:0;background:rgba(0,4,16,.87);z-index:99999;align-items:center;justify-content:center;}
#fbd .mbg.open{display:flex;}
#fbd .mbox{background:linear-gradient(135deg,#0c2045,#060f24);border:1px solid rgba(255,255,255,.1);border-radius:14px;position:relative;max-height:90vh;overflow-y:auto;max-width:96vw;}
#fbd .mcl{position:absolute;top:14px;right:14px;background:none;border:none;color:rgba(255,255,255,.4);font-size:18px;cursor:pointer;z-index:2;line-height:1;}
#fbd .mcl:hover{color:#fff;}
#fbd .mttl{font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;margin-bottom:18px;color:#fff;}
#fbd .mp{padding:26px;width:500px;}
#fbd .fg{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:11px;}
#fbd .fgf{grid-column:1/-1;}
#fbd .fg>div{display:flex;flex-direction:column;gap:5px;}
#fbd .fl{font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.4);}
#fbd input[type=text],#fbd input[type=number],#fbd input[type=date],#fbd select,#fbd textarea{background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#fff;font-family:'Montserrat',sans-serif;font-size:13px;padding:9px 11px;width:100%;color-scheme:dark;}
#fbd input:focus,#fbd select:focus,#fbd textarea:focus{outline:none;border-color:#1a6fd4;}
#fbd select option{background:#0c2045;}
#fbd textarea{resize:vertical;min-height:65px;}
#fbd input[type=date]::-webkit-calendar-picker-indicator{filter:invert(1) brightness(.7);cursor:pointer;}
#fbd .msub{width:100%;background:#0050b3;color:#fff;border:none;padding:11px;border-radius:7px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;cursor:pointer;margin-top:6px;}
#fbd .msub:hover{background:#1a6fd4;}
#fbd .wkp{padding:24px;width:680px;}
#fbd .wks{display:flex;gap:18px;flex-wrap:wrap;margin-bottom:14px;}
#fbd .wksi{display:flex;flex-direction:column;gap:3px;}
#fbd .wksil{font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.4);}
#fbd .wksiv{font-size:18px;font-weight:700;}
#fbd .wkch{position:relative;height:150px;width:100%;margin-bottom:14px;}
#fbd .dp{padding:24px;width:460px;}
#fbd .dpt{font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;margin-bottom:14px;color:#fff;}
#fbd .shp{padding:26px;width:560px;}
#fbd .sprev{background:#071528;border:1px solid #1a3560;border-radius:12px;padding:20px;cursor:pointer;margin-bottom:6px;position:relative;overflow:hidden;}
#fbd .sprev::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#0050b3,rgba(0,200,100,.4));}
#fbd .sprev:hover{border-color:#2a55a0;}
#fbd .slogo{text-align:center;font-size:10px;font-weight:700;letter-spacing:2.5px;color:rgba(255,255,255,.3);text-transform:uppercase;margin-bottom:16px;}
#fbd .sstats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
#fbd .sstat{text-align:center;padding:10px 4px;background:rgba(255,255,255,.03);border-radius:7px;border:1px solid rgba(255,255,255,.05);}
#fbd .ssv{font-size:18px;font-weight:700;line-height:1;margin-bottom:4px;}
#fbd .ssl{font-size:8px;color:rgba(255,255,255,.4);letter-spacing:1.2px;text-transform:uppercase;font-weight:600;}
#fbd .pkl{font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:8px;}
#fbd .pkr{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;}
#fbd .pill{padding:6px 14px;border-radius:20px;font-size:11px;font-weight:600;cursor:pointer;user-select:none;border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.4);background:rgba(255,255,255,.04);font-family:'Montserrat',sans-serif;transition:all .15s;}
#fbd .pill:hover{border-color:rgba(255,255,255,.2);color:rgba(255,255,255,.7);}
#fbd .pill.on{border-color:#0050b3;color:#fff;background:rgba(0,80,179,.25);}
#fbd .cfb{text-align:center;font-size:10px;color:#00c864;height:16px;margin-top:6px;transition:opacity .3s;}
#fbd .sdiv{height:1px;background:rgba(255,255,255,.06);margin:12px 0;}
#fbd .sact{display:flex;gap:8px;}
#fbd .sab{flex:1;padding:10px;border-radius:7px;border:none;font-family:'Montserrat',sans-serif;font-size:11px;font-weight:600;cursor:pointer;}
#fbd .sab.sc{background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.1);}
#fbd .sab.si{background:#0050b3;color:#fff;}
#fbd .sab.si:hover{background:#1a6fd4;}
#fbd .csp{padding:26px;width:880px;}
#fbd #cit{background:#071528;padding:18px;border-radius:10px;cursor:pointer;}
#fbd #cit:hover{opacity:.9;}
#fbd .cih{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}
#fbd .cil{font-size:10px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,.25);text-transform:uppercase;}
#fbd .cim{font-size:13px;font-weight:700;color:rgba(255,255,255,.65);}
#fbd .cidh{display:grid;grid-template-columns:repeat(7,1fr) 100px;gap:3px;margin-bottom:3px;}
#fbd .cidh span{text-align:center;font-size:9px;font-weight:600;color:rgba(255,255,255,.3);text-transform:uppercase;padding:3px 0;}
#fbd .cig{display:grid;grid-template-columns:repeat(7,1fr) 100px;gap:3px;}
#fbd .ic{min-height:60px;border-radius:6px;background:#0d1e38;border:1px solid #1a2d50;display:flex;flex-direction:column;padding:5px 6px;}
#fbd .ic.win{background:#0a2d1e;border-color:#1a5e38;}
#fbd .ic.loss{background:#2d0a10;border-color:#5e1a22;}
#fbd .ic.emp{background:transparent!important;border-color:transparent!important;}
#fbd .icd{font-size:9px;color:rgba(255,255,255,.35);margin-bottom:4px;}
#fbd .icp{font-size:12px;font-weight:700;line-height:1;}
#fbd .icp.pos{color:#00c864;}#fbd .icp.neg{color:#ff4455;}
#fbd .ict{font-size:9px;color:rgba(255,255,255,.3);margin-top:2px;}
#fbd .icw{min-height:60px;border-radius:6px;background:#0a1a38;border:1px solid #1a3060;display:flex;align-items:center;justify-content:center;}
#fbd .icwv{font-size:13px;font-weight:700;}
</style>
<div id="fbd">
<div style="height:20px"></div>
<!-- TIME FILTER BAR -->
<div class="topbar">
  <div class="tfilter">
    <button class="tfb on" onclick="fbFilt('7d',this)">7 dagen</button>
    <button class="tfb" onclick="fbFilt('14d',this)">14 dagen</button>
    <button class="tfb" onclick="fbFilt('30d',this)">30 dagen</button>
    <button class="tfb" onclick="fbFilt('month',this)">Deze maand</button>
    <button class="tfb" onclick="fbFilt('all',this)">All time</button>
  </div>
  <button class="sbtn" onclick="fbOpenShare()">&#8599; Deel resultaat</button>
</div>
<!-- KPI CARDS -->
<div class="kgrid">
  <div class="card"><div class="lbl">Net P&L</div><div class="kval neu" id="fb-pnl">—</div><div class="ksub" id="fb-pnl-s">0 trades</div></div>
  <div class="card"><div class="lbl">Avg Win / Avg Loss</div><div class="kval neu" id="fb-rat">—</div><div class="ksub" id="fb-rat-s">ratio</div><div class="kbar"><div class="kbf" id="fb-rat-b" style="width:0"></div></div></div>
  <div class="card"><div class="lbl">Trade Win %</div><div class="kval neu" id="fb-wp">—</div><div class="ksub" id="fb-wp-s">0W / 0L</div><div class="kbar"><div class="kbf" id="fb-wp-b" style="width:0"></div></div></div>
  <div class="card"><div class="lbl">Profit Factor</div><div class="kval neu" id="fb-pf">—</div><div class="ksub" id="fb-pf-s">winst / verlies</div><div class="kbar"><div class="kbf" id="fb-pf-b" style="width:0"></div></div></div>
</div>
<!-- EQUITY CHART -->
<div class="chartcard"><div class="ctitle">Dagelijkse cumulatieve W/V — Vermogenscurve</div><div class="cwrap"><canvas id="fb-eq"></canvas></div></div>
<!-- CALENDAR -->
<div class="calcard">
  <div class="calhdr"><div class="calhl"><div class="calnav"><button onclick="fbCM(-1)">&#8249;</button><button onclick="fbCM(1)">&#8250;</button></div><div class="calmo" id="fb-mo">—</div></div><button class="calsbtn" onclick="fbCalShare()">Deel kalender</button></div>
  <div class="caldh"><span>Ma</span><span>Di</span><span>Wo</span><span>Do</span><span>Vr</span><span>Za</span><span>Zo</span><span>Totaal</span></div>
  <div class="calgrid" id="fb-cg"></div>
</div>
<!-- TRADE LOG -->
<div class="logcard">
  <div class="loghdr"><div class="ctitle" style="margin-bottom:0">Trade Log</div><button class="addbtn" onclick="fbAddOpen()">+ Trade toevoegen</button></div>
  <div id="fb-tw"><div class="es">Nog geen trades.</div></div>
</div>
<!-- ADD MODAL -->
<div class="mbg" id="m-add"><div class="mbox mp"><button class="mcl" onclick="fbClose('m-add')">&#10005;</button><div class="mttl">Trade toevoegen</div><div class="fg"><div><label class="fl">Symbool</label><input type="text" id="a-sy" placeholder="BTC"/></div><div><label class="fl">Datum</label><input type="date" id="a-dt"/></div><div><label class="fl">Richting</label><select id="a-dr"><option value="long">Long</option><option value="short">Short</option></select></div><div><label class="fl">P&L ($)</label><input type="number" id="a-pl" step="0.01" placeholder="150 of -50"/></div><div><label class="fl">Entry Price</label><input type="number" id="a-en" step="0.01" placeholder="optioneel"/></div><div><label class="fl">Exit Price</label><input type="number" id="a-ex" step="0.01" placeholder="optioneel"/></div><div class="fgf"><label class="fl">TradingView Link</label><input type="text" id="a-tv" placeholder="https://..."/></div><div class="fgf"><label class="fl">Notitie</label><textarea id="a-no" placeholder="Waarom deze trade?"></textarea></div></div><button class="msub" onclick="fbAddSave()">Opslaan</button></div></div>
<!-- EDIT MODAL -->
<div class="mbg" id="m-edit"><div class="mbox mp"><button class="mcl" onclick="fbClose('m-edit')">&#10005;</button><div class="mttl">Trade bewerken</div><input type="hidden" id="e-id"/><div class="fg"><div><label class="fl">Symbool</label><input type="text" id="e-sy"/></div><div><label class="fl">Datum</label><input type="date" id="e-dt"/></div><div><label class="fl">Richting</label><select id="e-dr"><option value="long">Long</option><option value="short">Short</option></select></div><div><label class="fl">P&L ($)</label><input type="number" id="e-pl" step="0.01"/></div><div><label class="fl">Entry Price</label><input type="number" id="e-en" step="0.01" placeholder="optioneel"/></div><div><label class="fl">Exit Price</label><input type="number" id="e-ex" step="0.01" placeholder="optioneel"/></div><div class="fgf"><label class="fl">TradingView Link</label><input type="text" id="e-tv"/></div><div class="fgf"><label class="fl">Notitie</label><textarea id="e-no"></textarea></div></div><button class="msub" onclick="fbEditSave()">Opslaan</button></div></div>
<!-- WEEK POPUP -->
<div class="mbg" id="m-wk"><div class="mbox wkp"><button class="mcl" onclick="fbClose('m-wk')">&#10005;</button><div class="mttl" id="wk-t">Week</div><div class="wks" id="wk-s"></div><div class="ctitle">Cumulatieve W/V deze week</div><div class="wkch"><canvas id="fb-wc"></canvas></div><div id="wk-tr"></div></div></div>
<!-- DAY POPUP -->
<div class="mbg" id="m-day"><div class="mbox dp"><button class="mcl" onclick="fbClose('m-day')">&#10005;</button><div class="dpt" id="day-t">—</div><div id="day-c"></div></div></div>
<!-- SHARE MODAL -->
<div class="mbg" id="m-share"><div class="mbox shp"><button class="mcl" onclick="fbClose('m-share')">&#10005;</button><div class="mttl">Deel resultaat <span style="font-size:10px;color:rgba(255,255,255,.35);font-weight:400;text-transform:none;letter-spacing:0">(klik preview om te kopiëren)</span></div><div class="pkl">Kies statistieken</div><div class="pkr" id="fb-pk"></div><div class="sprev" id="fb-sp" onclick="fbImgCopy()"><div class="slogo" id="fb-sl">Fiatballers Dashboard</div><div class="sstats" id="fb-ss"></div></div><div class="cfb" id="fb-cf"></div><div class="sdiv"></div><div class="sact"><button class="sab sc" id="fb-scb" onclick="fbStatsCopy()">Stats kopiëren</button><button class="sab si" onclick="fbImgSave()">Afbeelding opslaan</button></div></div></div>
<!-- CAL SHARE -->
<div class="mbg" id="m-csh"><div class="mbox csp"><button class="mcl" onclick="fbClose('m-csh')">&#10005;</button><div class="mttl">Deel kalender <span style="font-size:10px;color:rgba(255,255,255,.35);font-weight:400;text-transform:none;letter-spacing:0">(klik kalender om te kopiëren)</span></div><div id="cit" onclick="fbCalImgCopy()"></div><div class="cfb" id="cal-cf"></div><div class="sdiv"></div><div class="sact"><button class="sab si" onclick="fbCalImgSave()">Afbeelding opslaan</button></div></div></div>
</div>

<script>
// ── STATE ──────────────────────────────────────────────────────────────
var fbT = [], fbName = '';
var fbMo = new Date().getMonth(), fbYr = new Date().getFullYear();
var fbTD = new Date();
var fbAF = '7d'; // active filter
var fbEQ = null;  // equity chart instance

var MONTHS = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];

// ── INIT ──────────────────────────────────────────────────────────────
async function fbInit() {
  try {
    if (window.$memberstackDom) {
      var mj = await window.$memberstackDom.getMemberJSON();
      fbT = (mj && mj.data && mj.data.trades) || [];
      try {
        var mm = await window.$memberstackDom.getMember();
        var d = mm && (mm.data || mm);
        fbName = (d && d.customFields && (d.customFields['first-name'] || d.customFields['firstName'])) ||
                 (d && (d.firstName || d['first-name'])) || '';
        if (!fbName) {
          var el = document.querySelector('[data-ms-member="first-name"]');
          fbName = (el && (el.textContent || el.value || '').trim()) || '';
        }
      } catch(e) {}
    }
  } catch(e) {}
  fbRefresh();
}

function fbSave() {
  if (!window.$memberstackDom) return;
  window.$memberstackDom.getMemberJSON().then(function(mj) {
    var d = (mj && mj.data) || {}; d.trades = fbT;
    window.$memberstackDom.updateMemberJSON({ json: d });
  }).catch(function(){});
}

// ── FILTER ──────────────────────────────────────────────────────────────
function fbGetFiltered() {
  if (fbAF === 'all') return fbT;
  var now = new Date(), from, to = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  if (fbAF === '7d')    { from = new Date(now); from.setDate(from.getDate() - 6); }
  else if (fbAF === '14d') { from = new Date(now); from.setDate(from.getDate() - 13); }
  else if (fbAF === '30d') { from = new Date(now); from.setDate(from.getDate() - 29); }
  else if (fbAF === 'month') { from = new Date(now.getFullYear(), now.getMonth(), 1); }
  else return fbT;
  return fbT.filter(function(t) { var d = new Date(t.date); return d >= from && d < to; });
}

function fbFilt(key, btn) {
  fbAF = key;
  document.querySelectorAll('#fbd .tfb').forEach(function(b) { b.classList.remove('on'); });
  if (btn) btn.classList.add('on');
  fbRefresh();
}

// ── REFRESH ──────────────────────────────────────────────────────────────
function fbRefresh() {
  var ft = fbGetFiltered();
  fbKPI(ft);
  fbRenderEquityChart(ft);  // uses original working pattern
  fbCal();
  fbTable();
}

// ── KPI ──────────────────────────────────────────────────────────────
function fbSt(arr) {
  var tot = 0, wins = [], loss = [];
  arr.forEach(function(t) { tot += t.pnl; if (t.pnl > 0) wins.push(t); else if (t.pnl < 0) loss.push(t); });
  var tw = wins.reduce(function(s,t){return s+t.pnl;}, 0);
  var tl = Math.abs(loss.reduce(function(s,t){return s+t.pnl;}, 0));
  var aw = wins.length ? tw / wins.length : 0, al = loss.length ? tl / loss.length : 0;
  var wp = arr.length ? wins.length / arr.length * 100 : 0;
  var pf = tl ? tw / tl : 0, ratio = al ? aw / al : 0;
  var bd = fbGD(arr), dv = Object.values(bd).map(function(ts) { return ts.reduce(function(s,t){return s+t.pnl;},0); });
  return { tot:tot, wins:wins, loss:loss, tw:tw, tl:tl, aw:aw, al:al, wp:wp, pf:pf, ratio:ratio, n:arr.length,
    best: dv.length ? Math.max.apply(null,dv) : 0, worst: dv.length ? Math.min.apply(null,dv) : 0 };
}

function fbKPI(arr) {
  var s = fbSt(arr);
  var e = document.getElementById('fb-pnl'); e.textContent = fbF(s.tot); e.className = 'kval ' + (s.tot > 0 ? 'pos' : s.tot < 0 ? 'neg' : 'neu');
  document.getElementById('fb-pnl-s').textContent = s.n + ' trades';
  var r = document.getElementById('fb-rat'); r.textContent = s.ratio ? s.ratio.toFixed(2) : '—'; r.className = 'kval ' + (s.ratio >= 1 ? 'pos' : s.ratio > 0 ? 'neg' : 'neu');
  document.getElementById('fb-rat-s').textContent = 'W ' + fbF(s.aw) + ' / L ' + fbF(-s.al);
  var rb = document.getElementById('fb-rat-b'); rb.style.width = Math.min(s.ratio * 50, 100) + '%'; rb.className = 'kbf' + (s.ratio >= 1 ? '' : ' r');
  var w = document.getElementById('fb-wp'); w.textContent = s.n ? s.wp.toFixed(1) + '%' : '—'; w.className = 'kval ' + (s.wp >= 50 ? 'pos' : s.n ? 'neg' : 'neu');
  document.getElementById('fb-wp-s').textContent = s.wins.length + 'W / ' + s.loss.length + 'L';
  var wb = document.getElementById('fb-wp-b'); wb.style.width = s.wp + '%'; wb.className = 'kbf' + (s.wp >= 50 ? '' : ' r');
  var p = document.getElementById('fb-pf'); p.textContent = s.pf ? s.pf.toFixed(2) : '—'; p.className = 'kval ' + (s.pf >= 1 ? 'pos' : s.pf > 0 ? 'neg' : 'neu');
  document.getElementById('fb-pf-s').textContent = fbF(s.tw) + ' / ' + fbF(-s.tl);
  var pb = document.getElementById('fb-pf-b'); pb.style.width = Math.min(s.pf * 33, 100) + '%'; pb.className = 'kbf' + (s.pf >= 1 ? '' : ' r');
}

// ── EQUITY CHART — copied directly from working v5 pattern ──────────────
function fbRenderEquityChart(arr) {
  var byDay = fbGD(arr);
  var sortedDays = Object.keys(byDay).sort();
  var cum = 0, labels = [], data = [];
  sortedDays.forEach(function(day) {
    cum += byDay[day].reduce(function(s,t){return s+t.pnl;}, 0);
    labels.push(day.slice(5));
    data.push(parseFloat(cum.toFixed(2)));
  });
  var ctx = document.getElementById('fb-eq').getContext('2d');
  var isPos = cum >= 0;
  var grad = ctx.createLinearGradient(0, 0, 0, 180);
  grad.addColorStop(0, isPos ? 'rgba(0,200,100,0.15)' : 'rgba(255,68,85,0.15)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  if (fbEQ) { fbEQ.destroy(); fbEQ = null; }
  fbEQ = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['—'],
      datasets: [{
        data: data.length ? data : [0],
        borderColor: isPos ? '#00c864' : '#ff4455',
        borderWidth: 1.5,
        fill: true,
        backgroundColor: grad,
        pointRadius: data.length <= 20 ? 3 : 0,
        pointBackgroundColor: isPos ? '#00c864' : '#ff4455',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(8,29,60,0.95)',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          callbacks: { label: function(c) { return ' ' + fbF(c.raw); } }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(255,255,255,0.25)', font: { family: 'Montserrat', size: 10 }, maxTicksLimit: 14 } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(255,255,255,0.25)', font: { family: 'Montserrat', size: 10 }, callback: function(v) { return '$' + v; } } }
      }
    }
  });
}

// Week popup chart — same pattern, separate canvas
function fbRenderWeekChart(arr) {
  var byDay = fbGD(arr);
  var sortedDays = Object.keys(byDay).sort();
  var cum = 0, labels = [], data = [];
  sortedDays.forEach(function(day) {
    cum += byDay[day].reduce(function(s,t){return s+t.pnl;}, 0);
    labels.push(day.slice(5));
    data.push(parseFloat(cum.toFixed(2)));
  });
  var canvas = document.getElementById('fb-wc');
  var ctx = canvas.getContext('2d');
  var isPos = cum >= 0;
  var grad = ctx.createLinearGradient(0, 0, 0, 150);
  grad.addColorStop(0, isPos ? 'rgba(0,200,100,0.15)' : 'rgba(255,68,85,0.15)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  // destroy old week chart
  if (window._fbWK) { try { window._fbWK.destroy(); } catch(e){} window._fbWK = null; }
  window._fbWK = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['—'],
      datasets: [{
        data: data.length ? data : [0],
        borderColor: isPos ? '#00c864' : '#ff4455',
        borderWidth: 1.5,
        fill: true,
        backgroundColor: grad,
        pointRadius: data.length <= 20 ? 3 : 0,
        pointBackgroundColor: isPos ? '#00c864' : '#ff4455',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(8,29,60,0.95)', callbacks: { label: function(c) { return ' ' + fbF(c.raw); } } } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(255,255,255,0.25)', font: { size: 10 } } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(255,255,255,0.25)', font: { size: 10 }, callback: function(v) { return '$' + v; } } }
      }
    }
  });
}

// ── CALENDAR ──────────────────────────────────────────────────────────────
function fbGD(arr) {
  var m = {};
  (arr || []).forEach(function(t) { if (!m[t.date]) m[t.date] = []; m[t.date].push(t); });
  return m;
}

function fbCal() {
  document.getElementById('fb-mo').textContent = MONTHS[fbMo] + ' ' + fbYr;
  fbBuildGrid(document.getElementById('fb-cg'), fbGD(fbT), false);
}

function fbBuildGrid(grid, bd, isImg) {
  grid.innerHTML = '';
  var fd = new Date(fbYr, fbMo, 1).getDay(), off = (fd + 6) % 7;
  var dim = new Date(fbYr, fbMo + 1, 0).getDate(), d = 1 - off;
  while (d <= dim) {
    var wk = []; for (var c = 0; c < 7; c++) { wk.push(d); d++; }
    wk.forEach(function(day) {
      var el = document.createElement('div');
      if (day < 1 || day > dim) { el.className = isImg ? 'ic emp' : 'cc emp'; }
      else {
        var ds = fbYr + '-' + String(fbMo+1).padStart(2,'0') + '-' + String(day).padStart(2,'0');
        var isTod = (day === fbTD.getDate() && fbMo === fbTD.getMonth() && fbYr === fbTD.getFullYear());
        var dt = bd[ds] || [], dp = dt.reduce(function(s,t){return s+t.pnl;}, 0), has = dt.length > 0;
        if (isImg) {
          el.className = 'ic' + (has ? dp >= 0 ? ' win' : ' loss' : '');
          el.innerHTML = '<span class="icd">' + day + '</span>';
          if (has) el.innerHTML += '<span class="icp ' + (dp >= 0 ? 'pos' : 'neg') + '">' + fbF(dp) + '</span><span class="ict">' + (dt.length === 1 ? '1 trade' : dt.length + ' trades') + '</span>';
        } else {
          el.className = 'cc' + (isTod ? ' tod' : '') + (has ? (dp >= 0 ? ' win' : ' loss') + ' cp' : '');
          el.innerHTML = '<span class="cdate">' + day + '</span>';
          if (has) {
            el.innerHTML += '<span class="cpnl ' + (dp >= 0 ? 'pos' : 'neg') + '">' + fbF(dp) + '</span><span class="ctlbl">' + (dt.length === 1 ? '1 trade' : dt.length + ' trades') + '</span>';
            (function(ds2, dt2) { el.onclick = function() { fbDay(ds2, dt2); }; })(ds, dt);
          }
        }
      }
      grid.appendChild(el);
    });
    // week total
    var vd = wk.filter(function(x){return x>=1&&x<=dim;});
    var wdates = vd.map(function(x){return fbYr+'-'+String(fbMo+1).padStart(2,'0')+'-'+String(x).padStart(2,'0');});
    var wt = wdates.reduce(function(a,ds){return a.concat(bd[ds]||[]);}, []);
    var wp = wt.reduce(function(s,t){return s+t.pnl;}, 0);
    var wc = document.createElement('div');
    if (isImg) {
      wc.className = 'icw';
      wc.innerHTML = '<span class="icwv ' + (wt.length ? wp >= 0 ? 'pp' : 'pn' : '') + '">' + (wt.length ? fbF(wp) : '—') + '</span>';
    } else {
      wc.className = 'cwtot' + (wt.length ? ' cp' : '');
      wc.innerHTML = '<span class="cwtlbl">Totaal</span><span class="cwtvl ' + (wt.length ? wp >= 0 ? 'pp' : 'pn' : '') + '">' + (wt.length ? fbF(wp) : '—') + '</span>';
      if (wt.length) (function(wt2) { wc.onclick = function() { fbWeek(wt2); }; })(wt);
    }
    grid.appendChild(wc);
  }
}

function fbCM(dir) { fbMo += dir; if (fbMo > 11){fbMo=0;fbYr++;} if (fbMo < 0){fbMo=11;fbYr--;} fbCal(); }

// ── TRADE TABLE ──────────────────────────────────────────────────────────────
function fbTable() {
  var wrap = document.getElementById('fb-tw');
  if (!fbT.length) { wrap.innerHTML = '<div class="es">Nog geen trades.</div>'; return; }
  var s = [].concat(fbT).sort(function(a,b){ return b.date.localeCompare(a.date) || b.id - a.id; });
  wrap.innerHTML = '<table><thead><tr><th>Symbool</th><th>Datum</th><th>Richting</th><th>Entry</th><th>Exit</th><th>P&L</th><th>Chart</th><th>Notitie</th><th></th></tr></thead><tbody>' +
    s.map(function(t) { return '<tr><td style="font-weight:600">' + t.symbol + '</td><td style="color:rgba(255,255,255,.4)">' + t.date + '</td>' +
      '<td><span class="db ' + t.direction + '">' + t.direction + '</span></td>' +
      '<td style="color:rgba(255,255,255,.4)">' + (t.entry != null ? t.entry : '—') + '</td>' +
      '<td style="color:rgba(255,255,255,.4)">' + (t.exit != null ? t.exit : '—') + '</td>' +
      '<td class="' + (t.pnl >= 0 ? 'pp' : 'pn') + '">' + fbF(t.pnl) + '</td>' +
      '<td>' + (t.tv ? '<a class="tvl" href="' + t.tv + '" target="_blank">&#128202;</a>' : '—') + '</td>' +
      '<td><span class="ni" title="' + (t.note||'').replace(/"/g,'&quot;') + '">' + (t.note||'—') + '</span></td>' +
      '<td style="white-space:nowrap"><button class="ib" onclick="fbView(' + t.id + ')">&#128196;</button> <button class="ib" onclick="fbEditOpen(' + t.id + ')">&#9997;</button> <button class="ib d" onclick="fbDel(' + t.id + ')">&#10005;</button></td></tr>'; }).join('') +
    '</tbody></table>';
}

// ── ADD / EDIT / DELETE ──────────────────────────────────────────────────────────────
function fbAddOpen() { document.getElementById('a-dt').value = new Date().toISOString().slice(0,10); document.getElementById('m-add').classList.add('open'); }
function fbAddSave() {
  var sy = document.getElementById('a-sy').value.trim(), dt = document.getElementById('a-dt').value, pl = parseFloat(document.getElementById('a-pl').value);
  if (!sy || !dt || isNaN(pl)) { alert('Vul minimaal symbool, datum en P&L in.'); return; }
  fbT.push({ id: Date.now(), symbol: sy, date: dt, direction: document.getElementById('a-dr').value, pnl: pl,
    entry: document.getElementById('a-en').value ? parseFloat(document.getElementById('a-en').value) : null,
    exit: document.getElementById('a-ex').value ? parseFloat(document.getElementById('a-ex').value) : null,
    tv: document.getElementById('a-tv').value.trim(), note: document.getElementById('a-no').value.trim() });
  fbSave(); fbClose('m-add');
  ['a-sy','a-pl','a-en','a-ex','a-tv','a-no'].forEach(function(id){document.getElementById(id).value='';});
  fbRefresh();
}
function fbEditOpen(id) {
  var t = fbT.find(function(x){return x.id===id;}); if (!t) return;
  document.getElementById('e-id').value = t.id; document.getElementById('e-sy').value = t.symbol;
  document.getElementById('e-dt').value = t.date; document.getElementById('e-dr').value = t.direction;
  document.getElementById('e-pl').value = t.pnl; document.getElementById('e-en').value = t.entry != null ? t.entry : '';
  document.getElementById('e-ex').value = t.exit != null ? t.exit : ''; document.getElementById('e-tv').value = t.tv || '';
  document.getElementById('e-no').value = t.note || ''; document.getElementById('m-edit').classList.add('open');
}
function fbEditSave() {
  var id = parseInt(document.getElementById('e-id').value), sy = document.getElementById('e-sy').value.trim();
  var dt = document.getElementById('e-dt').value, pl = parseFloat(document.getElementById('e-pl').value);
  if (!sy || !dt || isNaN(pl)) { alert('Vul minimaal symbool, datum en P&L in.'); return; }
  fbT = fbT.map(function(t) { return t.id === id ? { id: t.id, symbol: sy, date: dt, direction: document.getElementById('e-dr').value, pnl: pl,
    entry: document.getElementById('e-en').value ? parseFloat(document.getElementById('e-en').value) : null,
    exit: document.getElementById('e-ex').value ? parseFloat(document.getElementById('e-ex').value) : null,
    tv: document.getElementById('e-tv').value.trim(), note: document.getElementById('e-no').value.trim() } : t; });
  fbSave(); fbClose('m-edit'); fbRefresh();
}
function fbDel(id) { if (!confirm('Trade verwijderen?')) return; fbT = fbT.filter(function(t){return t.id!==id;}); fbSave(); fbRefresh(); }

// ── POPUPS ──────────────────────────────────────────────────────────────
function fbWeek(wt) {
  var s = fbSt(wt);
  document.getElementById('wk-t').textContent = 'Week — ' + MONTHS[fbMo] + ' ' + fbYr;
  document.getElementById('wk-s').innerHTML =
    '<div class="wksi"><div class="wksil">Totaal P&L</div><div class="wksiv ' + (s.tot>=0?'pp':'pn') + '">' + fbF(s.tot) + '</div></div>' +
    '<div class="wksi"><div class="wksil">Trades</div><div class="wksiv">' + s.n + '</div></div>' +
    '<div class="wksi"><div class="wksil">Win Rate</div><div class="wksiv">' + (s.n ? s.wp.toFixed(1)+'%' : '—') + '</div></div>' +
    '<div class="wksi"><div class="wksil">Beste dag</div><div class="wksiv pp">' + fbF(s.best) + '</div></div>' +
    '<div class="wksi"><div class="wksil">Slechtste dag</div><div class="wksiv pn">' + fbF(s.worst) + '</div></div>';
  document.getElementById('wk-tr').innerHTML = wt.map(function(t){return '<div style="background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:12px;margin-top:8px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-weight:600">' + t.symbol + ' <span class="db ' + t.direction + '">' + t.direction + '</span></span><span class="' + (t.pnl>=0?'pp':'pn') + '" style="font-size:16px;font-weight:700">' + fbF(t.pnl) + '</span></div><div style="font-size:11px;color:rgba(255,255,255,.4)">' + t.date + (t.entry!=null?' · Entry: '+t.entry:'') + (t.exit!=null?' → '+t.exit:'') + '</div>' + (t.note?'<div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:5px;font-style:italic">"'+t.note+'"</div>':'') + '</div>';}).join('');
  document.getElementById('m-wk').classList.add('open');
  // Draw week chart AFTER modal open (same pattern as working main chart)
  setTimeout(function(){ fbRenderWeekChart(wt); }, 50);
}

function fbDay(title, dt) {
  document.getElementById('day-t').textContent = title;
  var tot = dt.reduce(function(s,t){return s+t.pnl;}, 0);
  document.getElementById('day-c').innerHTML = '<div style="font-size:22px;font-weight:700;color:' + (tot>=0?'#00c864':'#ff4455') + ';margin-bottom:14px">' + fbF(tot) + '</div>' +
    dt.map(function(t){return '<div style="background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:12px;margin-bottom:8px"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-weight:600">' + t.symbol + ' <span class="db ' + t.direction + '">' + t.direction + '</span></span><span class="' + (t.pnl>=0?'pp':'pn') + '" style="font-size:17px;font-weight:700">' + fbF(t.pnl) + '</span></div>' + ((t.entry!=null||t.exit!=null)?'<div style="font-size:11px;color:rgba(255,255,255,.4);margin-bottom:4px">' + (t.entry!=null?'Entry: '+t.entry:'') + (t.entry!=null&&t.exit!=null?' → ':'') + (t.exit!=null?t.exit:'') + '</div>':'') + (t.note?'<div style="font-size:11px;color:rgba(255,255,255,.4);font-style:italic">"'+t.note+'"</div>':'') + '</div>';}).join('');
  document.getElementById('m-day').classList.add('open');
}

function fbView(id) {
  var t = fbT.find(function(x){return x.id===id;}); if (!t) return;
  // reuse day popup for view
  fbDay(t.symbol + ' — ' + t.date, [t]);
}

// ── SHARE ──────────────────────────────────────────────────────────────
var KOPTS=[{k:'netpnl',l:'Net P&L'},{k:'winrate',l:'Win Rate'},{k:'pf',l:'Profit Factor'},{k:'trades',l:'Trades'},{k:'totalwin',l:'Totaal wins'},{k:'totalloss',l:'Totaal verlies'},{k:'avgwin',l:'Gem. win'},{k:'avgloss',l:'Gem. verlies'},{k:'ratio',l:'W/L Ratio'},{k:'bestday',l:'Beste dag'},{k:'worstday',l:'Slechtste dag'}];
var fbSelK=['netpnl','winrate','pf','trades','totalwin','totalloss'];

function fbKV(k){
  var s=fbSt(fbGetFiltered());
  switch(k){
    case 'netpnl':    return{v:fbF(s.tot),c:s.tot>=0?'#00c864':'#ff4455'};
    case 'winrate':   return{v:s.n?s.wp.toFixed(1)+'%':'—',c:'#fff'};
    case 'pf':        return{v:s.pf?s.pf.toFixed(2):'—',c:s.pf>=1?'#00c864':'#ff4455'};
    case 'trades':    return{v:s.n,c:'#fff'};
    case 'totalwin':  return{v:fbF(s.tw),c:'#00c864'};
    case 'totalloss': return{v:fbF(-s.tl),c:'#ff4455'};
    case 'avgwin':    return{v:fbF(s.aw),c:'#00c864'};
    case 'avgloss':   return{v:fbF(-s.al),c:'#ff4455'};
    case 'ratio':     return{v:s.ratio?s.ratio.toFixed(2):'—',c:s.ratio>=1?'#00c864':'#ff4455'};
    case 'bestday':   return{v:fbF(s.best),c:'#00c864'};
    case 'worstday':  return{v:fbF(s.worst),c:'#ff4455'};
    default:return{v:'—',c:'#fff'};
  }
}
function fbRenderPicker(){
  document.getElementById('fb-pk').innerHTML=KOPTS.map(function(o){
    return '<div class="pill'+(fbSelK.indexOf(o.k)>=0?' on':'')+'" onclick="fbTogK(''+o.k+'')">'+o.l+'</div>';
  }).join('');
}
function fbRenderPreview(){
  var n=fbSelK.length,cols=n<=2?2:n<=4?2:3;
  var ss=document.getElementById('fb-ss');
  ss.style.gridTemplateColumns='repeat('+cols+',1fr)';
  ss.innerHTML=fbSelK.map(function(k){
    var o=KOPTS.find(function(x){return x.k===k;}),v=fbKV(k);
    return '<div class="sstat"><div class="ssv" style="color:'+v.c+'">'+v.v+'</div><div class="ssl">'+o.l+'</div></div>';
  }).join('');
}
function fbTogK(k){
  var i=fbSelK.indexOf(k);
  if(i>=0){if(fbSelK.length<=1)return;fbSelK.splice(i,1);}else{fbSelK.push(k);}
  fbRenderPicker();fbRenderPreview();
}
function fbOpenShare(){
  var nm=fbName?'Fiatballers Dashboard — '+fbName:'Fiatballers Dashboard';
  document.getElementById('fb-sl').textContent=nm;
  fbRenderPicker();
  fbRenderPreview();
  document.getElementById('m-share').classList.add('open');
}

async function fbImgCopy() {
  var el = document.getElementById('fb-sp');
  if (!window.html2canvas) { fbFB('fb-cf','Gebruik Afbeelding opslaan'); return; }
  try {
    var cv = await html2canvas(el, { backgroundColor:'#071528', scale:3, useCORS:true, logging:false });
    cv.toBlob(async function(b) {
      try { await navigator.clipboard.write([new ClipboardItem({'image/png':b})]); fbFB('fb-cf','✓ Gekopieerd!'); }
      catch(e) { var a=document.createElement('a');a.download='fb-stats.png';a.href=URL.createObjectURL(b);a.click(); }
    });
  } catch(e) { fbFB('fb-cf','Mislukt'); }
}
function fbImgSave() {
  if (!window.html2canvas) return;
  html2canvas(document.getElementById('fb-sp'), { backgroundColor:'#071528', scale:3, useCORS:true, logging:false }).then(function(cv){
    var a=document.createElement('a');a.download='fb-stats.png';a.href=cv.toDataURL();a.click();
  });
}
function fbStatsCopy() {
  var s = fbSt(fbGetFiltered());
  navigator.clipboard.writeText('📊 Fiatballers Stats\n━━━━━━━━━━━━━━━━━━\nNet P&L: '+fbF(s.tot)+'\nWin Rate: '+(s.n?s.wp.toFixed(1):0)+'%\nProfit Factor: '+(s.pf?s.pf.toFixed(2):'—')+'\nTrades: '+s.n+'\n━━━━━━━━━━━━━━━━━━').then(function(){
    var b=document.getElementById('fb-scb');b.textContent='✓ Gekopieerd';b.style.color='#00c864';setTimeout(function(){b.textContent='Stats kopiëren';b.style.color='';},2500);
  });
}

function fbCalShare() {
  var bd = fbGD(fbT), tgt = document.getElementById('cit'); tgt.innerHTML = '';
  var nm = fbName ? 'Fiatballers Dashboard — ' + fbName : 'Fiatballers Dashboard';
  var hdr = document.createElement('div'); hdr.className = 'cih';
  hdr.innerHTML = '<div class="cil">' + nm + '</div><div class="cim">' + MONTHS[fbMo] + ' ' + fbYr + '</div>';
  tgt.appendChild(hdr);
  var dh = document.createElement('div'); dh.className = 'cidh';
  ['Ma','Di','Wo','Do','Vr','Za','Zo','Totaal'].forEach(function(d){var s=document.createElement('span');s.textContent=d;dh.appendChild(s);});
  tgt.appendChild(dh);
  var g = document.createElement('div'); g.className = 'cig'; fbBuildGrid(g, bd, true); tgt.appendChild(g);
  document.getElementById('m-csh').classList.add('open');
}
async function fbCalImgCopy() {
  if (!window.html2canvas) return;
  try {
    var cv = await html2canvas(document.getElementById('cit'), { backgroundColor:'#071528', scale:2, useCORS:true, logging:false });
    cv.toBlob(async function(b){
      try { await navigator.clipboard.write([new ClipboardItem({'image/png':b})]); fbFB('cal-cf','✓ Gekopieerd!'); }
      catch(e){var a=document.createElement('a');a.download='fb-kalender.png';a.href=URL.createObjectURL(b);a.click();}
    });
  } catch(e){}
}
function fbCalImgSave() {
  if (!window.html2canvas) return;
  html2canvas(document.getElementById('cit'), { backgroundColor:'#071528', scale:2, useCORS:true, logging:false }).then(function(cv){
    var a=document.createElement('a');a.download='fb-kalender.png';a.href=cv.toDataURL();a.click();
  });
}

// ── UTILS ──────────────────────────────────────────────────────────────
function fbClose(id) { document.getElementById(id).classList.remove('open'); }
function fbFB(id, msg) { var el=document.getElementById(id);if(!el)return;el.innerHTML=msg;el.style.opacity='1';setTimeout(function(){el.style.opacity='0';},2500); }
function fbF(v) { return (v>=0?'+$':'-$') + Math.abs(v).toLocaleString('nl-NL',{minimumFractionDigits:2,maximumFractionDigits:2}); }

// Close modals on backdrop click
['m-add','m-edit','m-wk','m-day','m-share','m-csh'].forEach(function(id){
  var el = document.getElementById(id);
  if (el) el.addEventListener('click', function(e){ if (e.target === el) el.classList.remove('open'); });
});

// ── START — Webflow/Memberstack safe init ──
var fbStarted = false;
function fbStart() {
  if (fbStarted) return;
  fbStarted = true;
  fbInit();
}
// Method 1: Memberstack ready event
window.addEventListener('memberstack:init', fbStart);
// Method 2: Poll for Memberstack (up to 5s)
var fbPoll = 0;
var fbPollTimer = setInterval(function() {
  fbPoll++;
  if (window.$memberstackDom) { clearInterval(fbPollTimer); fbStart(); }
  else if (fbPoll > 50) { clearInterval(fbPollTimer); fbStart(); } // fallback: run without memberstack
}, 100);
</script>
