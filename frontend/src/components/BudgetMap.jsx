import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
    Landmark,
    TrendingUp,
    MapPin,
    Users,
    Briefcase,
    Database,
    ChevronRight,
    AlertCircle,
    Info,
    Building2,
    Construction,
    LocateFixed
} from 'lucide-react';

const T = {
    EN: {
        title: "Patronage Budget Map",
        subtitle: "Geospatial Intelligence: Political Clan 'Baan Yai' Territories (2016–2026)",
        protocol: "Protocol: Territorial Loyalty is exchanged for budget access. Hover or click markers to identify the Baan Yai governing the national supply chain.",
        tacticalOverlay: "Tactical Overlay",
        activeBaanYai: "Active Baan Yai",
        northernHighlands: "Sector: Northern Highlands",
        southernIsthmus: "Sector: Southern Isthmus",
        localHQ: "Local HQ",
        primaryManager: "Primary Manager",
        status: "Status",
        activeFiefdom: "Active Fiefdom",
        ministerialSupplyChain: "Ministerial Supply Chain",
        department: "DEPARTMENT",
        fy2023Allocation: "FY2023 ALLOCATION",
        samenessFactor: "The 'Sameness' Factor",
        fieldIntelligence: "Field Intelligence (Patronage Evidence)",
        securityClearance: "Security Clearance: LEVEL 4",
        awaitingGeoLock: "Awaiting Geo-Lock",
        initializeIntelFeed: "Select a territorial marker to initialize intel feed.",
        transactionalLocalism: "Transactional Localism",
        transactionalLocalismDesc: "Clans transform local needs (irrigation/roads) into lifelong voter loyalty.",
        bjtStrategy: "The BJT Strategy",
        bjtStrategyDesc: "Affiliating with 'Baan Yai' allows BJT to capture provinces without a national brand.",
        constructionNexus: "Construction Nexus",
        constructionNexusDesc: "The 'Five Tigers' cartel ensures budget capture remains in closed circles.",
        intelConfirmed: "INTEL: CONFIRMED",
        sourceDeclassified: "SOURCE: DECLASSIFIED"
    },
    TH: {
        title: "แผนที่งบประมาณระบบอุปถัมภ์",
        subtitle: "ข่าวกรองเชิงพื้นที่: อาณาเขตของ 'บ้านใหญ่' (2559–2569)",
        protocol: "โปรโตคอล: ความจงรักภักดีในพื้นที่ถูกแลกเปลี่ยนกับการเข้าถึงงบประมาณ วางเมาส์หรือคลิกที่เครื่องหมายเพื่อระบุตระกูลบ้านใหญ่ที่คุมห่วงโซ่อุปทานระดับชาติ",
        tacticalOverlay: "เลเยอร์ยุทธวิธี",
        activeBaanYai: "ตระกูลบ้านใหญ่ที่ประจำการ",
        northernHighlands: "เขต: ภาคเหนือและที่สูง",
        southernIsthmus: "เขต: ภาคใต้และคาบสมุทร",
        localHQ: "ฐานที่มั่นหลัก",
        primaryManager: "ผู้บริหารจัดการหลัก",
        status: "สถานะ",
        activeFiefdom: "เขตอิทธิพลที่ยังทำงานอยู่",
        ministerialSupplyChain: "ห่วงโซ่อุปทานระดับกระทรวง",
        department: "หน่วยงาน",
        fy2023Allocation: "การจัดสรรงบประมาณปี 2566",
        samenessFactor: "ปัจจัย 'ความเหมือนที่แตกต่าง'",
        fieldIntelligence: "ข้อมูลข่าวกรองภาคสนาม (หลักฐานการใช้อุปถัมภ์)",
        securityClearance: "ระดับการเข้าถึงข้อมูล: เลเวล 4",
        awaitingGeoLock: "กำลังรอยืนยันพิกัดภูมิศาสตร์",
        initializeIntelFeed: "เลือกเครื่องหมายบนแผนที่เพื่อเริ่มรับข้อมูลข่าวกรอง",
        transactionalLocalism: "ท้องถิ่นนิยมเชิงแลกเปลี่ยน",
        transactionalLocalismDesc: "บ้านใหญ่เปลี่ยนความต้องการในพื้นที่ (โครงการชลประทาน/ถนน) เป็นความจงรักภักดีของผู้มีสิทธิเลือกตั้งตลอดชีพ",
        bjtStrategy: "ยุทธศาสตร์พรรคภูมิใจไทย",
        bjtStrategyDesc: "การจับมือกับ 'บ้านใหญ่' ทำให้พรรคเข้ายึดพื้นที่รายจังหวัดได้โดยไม่ต้องสร้างแบรนด์ระดับประเทศ",
        constructionNexus: "เครือข่ายธุรกิจก่อสร้าง",
        constructionNexusDesc: "กลุ่ม 'ห้าเสือ' ก่อสร้างทำให้มั่นใจได้ว่าการเข้าถึงงบประมาณจะยังคงอยู่ในวงจำกัดของตระกูล",
        intelConfirmed: "การยืนยันข้อมูล: ยืนยันแล้ว",
        sourceDeclassified: "แหล่งที่มา: เปิดเผยข้อมูลแล้ว"
    }
};

const CLANS_DATA = {
    EN: [
        {
            id: "chidchob",
            clan: "Chidchob",
            manager: "Saksayam Chidchob (Min. Transport 2019-23), Anutin Charnvirakul (Successor)",
            base: "Buri Ram",
            portfolios: [
                { name: "Min. of Transport", fy22: "173,164.3M", fy23: "180,312.9M" },
                { name: "Min. of Interior", fy22: "315,513.1M", fy23: "325,245.9M" }
            ],
            evidence: "Buriram Infrastructure: Sports stadiums (Chang Arena), racing circuits, and highways. State land (Khao Kradong) retention. Border security projects funneling to family-linked firm Buriram Concrete.",
            sameness: "Newin orchestrated moves from Thaksin's network to Democrats, later forming coalitions with Gen. Prayut and Paetongtarn.",
            color: "#0000ff"
        },
        {
            id: "thaiseth",
            clan: "Thaiseth",
            manager: "Mananya (Deputy Ag. 2019-23), Chada (Deputy Interior 2023-24), Sabida (Culture Min 2025-)",
            base: "Uthai Thani",
            portfolios: [
                { name: "Min. of Interior", fy22: "315,513.1M", fy23: "325,245.9M" },
                { name: "Min. of Agriculture", fy22: "109,852.6M", fy23: "128,133.5M" },
                { name: "Min. of Culture", fy23: "6,735.1M" }
            ],
            evidence: "Infrastructure Control: Billions overseen by Chada. Family business dominance in construction/quarrying ('Godfather' status). Padet Nuipree (BJT) maintains PAO presidency.",
            sameness: "Three successive members in three consecutive cabinets (Prayut, Srettha, Paetongtarn/Anutin) regardless of leading party.",
            color: "#ff8800"
        },
        {
            id: "prompow",
            clan: "Prompow",
            manager: "Thammanat Prompow (Min. Agriculture 2019-24, VPM 2025-)",
            base: "Phayao",
            portfolios: [
                { name: "Min. of Agriculture", fy22: "109,852.6M", fy23: "128,133.5M" }
            ],
            evidence: "Budget Mobilization: Directed 128.1B THB in FY2023, large-scale irrigation (77.4B via RID). Securing localism-based dominance in Phayao.",
            sameness: "Switched logos from TRT to PT, then PPRP, now Kla Tham/Thammanat Faction while remaining core cabinet figure.",
            color: "#888888"
        },
        {
            id: "thepsuthin",
            clan: "Thepsuthin",
            manager: "Somsak Thepsuthin (Min. Justice 2019-23, Min. Health 2024-)",
            base: "Sukhothai",
            portfolios: [
                { name: "Min. of Public Health", fy23: "152,263.9M" },
                { name: "Min. of Justice", fy22: "24,003.8M", fy23: "24,603.1M" }
            ],
            evidence: "Construction Roots: Wealth via Krung Thon Engineer. Brother-in-law Manu Phukprasert re-elected PAO President 2024. Shadow influence in Uttaradit via 'Rak Uttaradit'.",
            sameness: "10-term MP, never in opposition. Switched parties 5 times across 13 elections to remain in ruling coalition.",
            color: "#ff3333"
        },
        {
            id: "promphat",
            clan: "Promphat",
            manager: "Santi Promphat (Deputy Finance 2019-23, Deputy Social Dev 2023-24)",
            base: "Phetchabun",
            portfolios: [
                { name: "Min. of Finance", fy22: "273,602.8M", fy23: "285,154.7M" },
                { name: "Min. of Social Dev.", fy23: "24,616.9M" }
            ],
            evidence: "Baan Rao Group: Dominates Phetchabun politics. Wealth in real estate/auto parts. Candidate Akkaradej Tongjaisod secured 2024 PAO presidency.",
            sameness: "Switched parties 5 times: New Aspiration (1994), Thaksin (2001-11), PPRP (2018-).",
            color: "#00ccff"
        },
        {
            id: "liptapanlop",
            clan: "Liptapanlop",
            manager: "Suwat Liptapanlop (Faction Leader / Chart Pattana Mentor)",
            base: "Nakhon Ratchasima",
            portfolios: [
                { name: "Min. of Transport (Influence)", fy23: "180,312.9M" }
            ],
            evidence: "The Five Tigers: Prayunewit Engineering (family firm) dominated Dept of Highways projects for decades via rotation. Strong support for ITD projects.",
            sameness: "Mainstay since 1980s. Pivoting between TRT, Chart Pattana, and various ruling coalitions.",
            color: "#ffff00"
        },
        {
            id: "charnvirakul",
            clan: "Charnvirakul",
            manager: "Anutin Charnvirakul (DPM/Interior 2023-, PM 2025-)",
            base: "Bangkok",
            portfolios: [
                { name: "Min. of Interior", fy23: "325,245.9M" },
                { name: "Min. of Public Health", fy23: "152,263.9M" }
            ],
            evidence: "Sino-Thai Nexus: Sino-Thai Engineering and B.Grimm linked to state contract favoritism. 1M+ Health Volunteers used as vote canvasser network.",
            sameness: "Billionaire technocrat in 90s to folksy conservative frontman. Survived multiple coalition collapses.",
            color: "#00bfff"
        },
        {
            id: "ratanakorn",
            clan: "Ratanakorn / Lik",
            manager: "Varatep Ratanakorn (Faction Leader), Pai Lik (Thammanat Faction)",
            base: "Kamphaeng Phet",
            portfolios: [
                { name: "Integrated Budget (Regional)", fy22: "204,179.4M", fy23: "218,124.8M" }
            ],
            evidence: "Clan Synergy: Lik and Ratanakorn families cooperate to monopolize projects. Brother Sunthorn Ratanakorn re-elected PAO President 2024.",
            sameness: "Varatep migrated from pro-Thaksin to PPRP in 2018. Pai Lik moved to Kla Tham in 2024.",
            color: "#33ff33"
        },
        {
            id: "silpaarcha",
            clan: "Silpa-archa",
            manager: "Varawut Silpa-archa (Min. Natural Res 2019-23, Social Dev 2023-)",
            base: "Suphanburi",
            portfolios: [
                { name: "Min. of Natural Resources", fy23: "30,453.9M" },
                { name: "Min. of Social Development", fy23: "24,616.9M" }
            ],
            evidence: "Construction Tiger: See Sang Engineering is one of the 'Five Tigers'. Suphanburi is a 'classic example' of one-family rule. Firm legacy.",
            sameness: "Despite patriarch death, remains core coalition partner in every government from Prayut to Paetongtarn.",
            color: "#ff0088"
        },
        {
            id: "asawahame",
            clan: "Asawahame",
            manager: "Wattana Asawahame (Patriarch), Local successors (PAO Control)",
            base: "Samut Prakan",
            portfolios: [
                { name: "Ministry of Interior (Historical Influence)", fy23: "325,245.9M" }
            ],
            evidence: "Klong-Dan Scandal: 22.95B THB wastewater project inflation. plant remains non-operational due to inappropriate placement for land purchase scandals.",
            sameness: "Despite patriarch fleeing conviction, Baan Yai network remains dominant force in Samut Prakan local admin.",
            color: "#8800ff"
        }
    ],
    TH: [
        {
            id: "chidchob",
            clan: "ชิดชอบ",
            manager: "ศักดิ์สยาม ชิดชอบ (รมว. คมนาคม 2562-66), อนุทิน ชาญวีรกูล (ผู้สืบทอด)",
            base: "Buri Ram",
            baseTh: "จังหวัดบุรีรัมย์",
            portfolios: [
                { name: "กระทรวงคมนาคม", fy22: "173,164.3 ล้าน", fy23: "180,312.9 ล้าน" },
                { name: "กระทรวงมหาดไทย", fy22: "315,513.1 ล้าน", fy23: "325,245.9 ล้าน" }
            ],
            evidence: "โครงสร้างพื้นฐานบุรีรัมย์: สนามกีฬามาตรฐานโลก (ช้างอารีนา) สนามแข่งรถระดับนานาชาติ และทางหลวง การถือครองที่ดินรัฐที่เขากระโดง โครงการความมั่นคงชายแดนที่ส่งผ่านธุรกิจครอบครัว บุรีรัมย์คอนกรีต",
            sameness: "เนวินบริหารจัดการการย้ายขั้วจากเครือข่ายทักษิณมายังประชาธิปัตย์ และต่อมาได้รวมกลุ่มกับทั้ง พล.อ.ประยุทธ์ และแพทองธาร ชินวัตร",
            color: "#0000ff"
        },
        {
            id: "thaiseth",
            clan: "ไทยเศรษฐ์",
            manager: "มนัญญา (รมช. เกษตร 2562-66), ชาดา (รมช. มหาดไทย 2566-67), ซาบีดา (รมว. วัฒนธรรม 2568-)",
            base: "Uthai Thani",
            baseTh: "จังหวัดอุทัยธานี",
            portfolios: [
                { name: "กระทรวงมหาดไทย", fy22: "315,513.1 ล้าน", fy23: "325,245.9 ล้าน" },
                { name: "กระทรวงเกษตรและสหกรณ์", fy22: "109,852.6 ล้าน", fy23: "128,133.5 ล้าน" },
                { name: "กระทรวงวัฒนธรรม", fy23: "6,735.1 ล้าน" }
            ],
            evidence: "การคุมโครงสร้างพื้นฐาน: งบประมาณหลายพันล้านที่ดูแลโดยชาดา ความเป็นเจ้าตลาดในธุรกิจก่อสร้าง อสังหาริมทรัพย์ และเหมืองหิน สถานะ 'เจ้าพ่อ' ท้องถิ่น",
            sameness: "สมาชิกครอบครัว 3 รุ่น ดำรงตำแหน่งใน 3 คณะรัฐมนตรีติดต่อกัน (ประยุทธ์, เศรษฐา, แพทองธาร/อนุทิน) ไม่ว่าพรรคแกนนำจะเป็นใคร",
            color: "#ff8800"
        },
        {
            id: "prompow",
            clan: "พรหมเผ่า",
            manager: "ธรรมนัส พรหมเผ่า (รมว. เกษตร 2562-67, รองนายกฯ 2568-)",
            base: "Phayao",
            baseTh: "จังหวัดพะเยา",
            portfolios: [
                { name: "กระทรวงเกษตรและสหกรณ์", fy22: "109,852.6 ล้าน", fy23: "128,133.5 ล้าน" }
            ],
            evidence: "การเคลื่อนไหวงบประมาณ: กำกับการใช้งบเกษตร 128.1 พันล้านในปี 2566 รวมโครงการชลประทานขนาดใหญ่ 77.4 พันล้านผ่านกรมชลประทาน สร้างอิทธิพลท้องถิ่นนิยมในพะเยา",
            sameness: "สลับโลโก้พรรคจากไทยรักไทย มาเพื่อไทย พลังประชารัฐ จนถึงพรรคคล้าธรรม/กลุ่มธรรมนัส โดยยังเป็นบุคคลสำคัญในรัฐบาลเสมอ",
            color: "#888888"
        },
        {
            id: "thepsuthin",
            clan: "เทพสุทิน",
            manager: "สมศักดิ์ เทพสุทิน (รมว. ยุติธรรม 2562-66, รมว. สาธารณสุข 2567-)",
            base: "Sukhothai",
            baseTh: "จังหวัดสุโขทัย",
            portfolios: [
                { name: "กระทรวงสาธารณสุข", fy23: "152,263.9 ล้าน" },
                { name: "กระทรวงยุติธรรม", fy22: "24,003.8 ล้าน", fy23: "24,603.1 ล้าน" }
            ],
            evidence: "รากฐานจากธุรกิจก่อสร้าง: ความมั่งคั่งผ่านบริษัท กรุงธนเอนยิเนียร์ มนู พุกประเสริฐ (น้องเขย) ได้รับเลือกเป็นนายก อบจ. ปี 2567 อิทธิพลในอุตรดิตถ์ผ่านกลุ่ม 'รักอุตรดิตถ์'",
            sameness: "ส.ส. 10 สมัย ที่ไม่เคยเป็นฝ่ายค้าน สลับพรรค 5 ครั้ง ตลอดการเลือกตั้ง 13 ครั้ง เพื่อให้ได้อยู่ในรัฐบาลเสมอ",
            color: "#ff3333"
        },
        {
            id: "promphat",
            clan: "พรหมพัตร",
            manager: "สันติ พรหมพัตร (รมช. คลัง 2562-66, รมช. พัฒนาสังคม 2566-67)",
            base: "Phetchabun",
            baseTh: "จังหวัดเพชรบูรณ์",
            portfolios: [
                { name: "กระทรวงการคลัง", fy22: "273,602.8 ล้าน", fy23: "285,154.7 ล้าน" },
                { name: "กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์", fy23: "24,616.9 ล้าน" }
            ],
            evidence: "กลุ่มบ้านเรา: ครองการเมืองเพชรบูรณ์ ความมั่งคั่งในอสังหาริมทรัพย์และอะไหล่ยนต์ อัครเดช ทองใจสด (ตัวแทนกลุ่ม) คว้าตำแหน่งนายก อบจ. ปี 2567",
            sameness: "สลับพรรค 5 ครั้ง: ความหวังใหม่ (2537), เครือข่ายทักษิณ (2544-54), พลังประชารัฐ (2561-)",
            color: "#00ccff"
        },
        {
            id: "liptapanlop",
            clan: "ลิปตพัลลภ",
            manager: "สุวัจน์ ลิปตพัลลภ (หัวหน้ากลุ่ม / เมนเทอร์พรรคชาติพัฒนา)",
            base: "Nakhon Ratchasima",
            baseTh: "จังหวัดนครราชสีมา",
            portfolios: [
                { name: "กระทรวงคมนาคม (อิทธิพล)", fy23: "180,312.9 ล้าน" }
            ],
            evidence: "กลุ่มห้าเสือ: ประยูรวิศว์เอนยิเนียร์ (บริษัทครอบครัว) ครองโครงการกรมทางหลวงมานานหลายทศวรรษผ่านระบบหมุนเวียนงาน สนับสนุนโครงการของอิตาเลียนไทย",
            sameness: "เสาหลักการเมืองไทยตั้งแต่ปี 2520 สลับขั้วระหว่างไทยรักไทย ชาติพัฒนา และรัฐบาลชุดต่างๆ",
            color: "#ffff00"
        },
        {
            id: "charnvirakul",
            clan: "ชาญวีรกูล",
            manager: "อนุทิน ชาญวีรกูล (รองนายกฯ/มหาดไทย 2566-, นายกฯ 2568-)",
            base: "Bangkok",
            baseTh: "กรุงเทพมหานคร",
            portfolios: [
                { name: "กระทรวงมหาดไทย", fy23: "325,245.9 ล้าน" },
                { name: "กระทรวงสาธารณสุข", fy23: "152,263.9 ล้าน" }
            ],
            evidence: "เครือข่าย ซิโน-ไทย: ซิโน-ไทย เอ็นจีเนียริ่ง และบี.กริม เชื่อมโยงกับโครงการรัฐขนาดใหญ่ อาสาสมัครสาธารณสุข (อสม.) กว่า 1 ล้านคน ถูกใช้เป็นเครือข่ายหาเสียงที่มีประสิทธิภาพ",
            sameness: "จากมหาเศรษฐีนักเทคโนแครตในยุค 90 สู่หน้าฉากสายอนุรักษนิยมที่เข้าถึงง่าย รอดพ้นจากการล่มสลายของรัฐบาลหลายชุด",
            color: "#00bfff"
        },
        {
            id: "ratanakorn",
            clan: "รัตนากร / หลีก",
            manager: "วราเทพ รัตนากร (ผู้นำกลุ่ม), ไผ่ หลีก (กลุ่มธรรมนัส)",
            base: "Kamphaeng Phet",
            baseTh: "จังหวัดกำแพงเพชร",
            portfolios: [
                { name: "งบประมาณบูรณาการ (ภูมิภาค)", fy22: "204,179.4 ล้าน", fy23: "218,124.8 ล้าน" }
            ],
            evidence: "พลังเสริมของตระกูล: ครอบครัวหลีกและรัตนากรร่วมมือกันครองโครงการท้องถิ่น สุนทร รัตนากร (พี่ชาย) ได้รับเลือกเป็นนายก อบจ. ปี 2567",
            sameness: "วราเทพย้ายจากพรรคสายทักษิณมาพลังประชารัฐปี 2561 ไผ่ หลีก ย้ายร่วมพรรคคล้าธรรมปี 2567",
            color: "#33ff33"
        },
        {
            id: "silpaarcha",
            clan: "ศิลปอาชา",
            manager: "วราวุธ ศิลปอาชา (รมว. ทรัพยากรฯ 2562-66, พัฒนาสังคม 2566-)",
            base: "Suphanburi",
            baseTh: "จังหวัดสุพรรณบุรี",
            portfolios: [
                { name: "กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม", fy23: "30,453.9 ล้าน" },
                { name: "กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์", fy23: "24,616.9 ล้าน" }
            ],
            evidence: "เสือก่อสร้าง: สีแสงการโยธา เป็นหนึ่งในกลุ่ม 'ห้าเสือ' ครองงานกรมทางหลวง สุพรรณบุรีเป็นตัวอย่างคลาสสิกของการปกครองโดยครอบครัวเดียว",
            sameness: "แม้สิ้นผู้ก่อตั้งตระกูล แต่ยังเป็นพาร์ทเนอร์หลักในทุกรัฐบาลตั้งแต่ประยุทธ์จนถึงแพทองธาร",
            color: "#ff0088"
        },
        {
            id: "asawahame",
            clan: "อัศวเหม",
            manager: "วัฒนา อัศวเหม (ผู้ก่อตั้ง), ผู้สืบทอดท้องถิ่น (คุม อบจ.)",
            base: "Samut Prakan",
            baseTh: "จังหวัดสมุทรปราการ",
            portfolios: [
                { name: "กระทรวงมหาดไทย (อิทธิพลในอดีต)", fy23: "325,245.9 ล้าน" }
            ],
            evidence: "คดีคลองด่าน: โครงการบำบัดน้ำเสีย 2.2 หมื่นล้านที่ราคาสูงเกินจริง โรงงานมูลค่า 2 หมื่นล้านยังไม่ได้ใช้งานจากการจัดวางพื้นที่ที่ไม่เหมาะสมเพื่อเอื้อประโยชน์ที่ดิน",
            sameness: "แม้ตัวผู้นำตระกูลจะหลบหนีคดี แต่เครือข่าย 'บ้านใหญ่' ยังคงเป็นพลังหลักในการบริหารส่วนท้องถิ่นสมุทรปราการ",
            color: "#8800ff"
        }
    ]
};

const ThailandSVG = ({ selectedClan, onSelectClan }) => {
    const svgRef = useRef(null);
    const [geoData, setGeoData] = useState(null);
    const { language } = useLanguage();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apisit/thailand.json/refs/heads/master/thailand.json')
            .then(res => res.json())
            .then(data => setGeoData(data));
    }, []);

    useEffect(() => {
        if (!geoData || !svgRef.current) return;

        const container = svgRef.current.parentElement;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("*").remove();

        const projection = d3.geoMercator()
            .fitSize([width, height], geoData);

        const pathGenerator = d3.geoPath().projection(projection);

        const currentClans = CLANS_DATA[language];

        // Map provinces
        svg.append("g")
            .selectAll("path")
            .data(geoData.features)
            .join("path")
            .attr("d", pathGenerator)
            .attr("fill", d => {
                const provinceName = d.properties.name;
                const clan = currentClans.find(c => c.base === provinceName);
                if (selectedClan && selectedClan.base === provinceName) {
                    return selectedClan.color;
                }
                return clan ? `${clan.color}22` : "rgba(255,255,255,0.03)";
            })
            .attr("stroke", "rgba(255,255,255,0.1)")
            .attr("stroke-width", 0.5)
            .attr("class", "province-path transition-colors duration-500")
            .on("click", (event, d) => {
                const provinceName = d.properties.name;
                const clan = currentClans.find(c => c.base === provinceName);
                if (clan) onSelectClan(clan);
            });

        // Add clan markers
        const markers = svg.append("g")
            .selectAll("g")
            .data(currentClans)
            .join("g")
            .attr("class", "marker-group cursor-pointer")
            .on("click", (event, d) => onSelectClan(d));

        markers.each(function (d) {
            const province = geoData.features.find(f => f.properties.name === d.base);

            if (province) {
                const center = projection(d3.geoCentroid(province));
                const g = d3.select(this);

                if (selectedClan?.id === d.id) {
                    g.append("circle")
                        .attr("cx", center[0])
                        .attr("cy", center[1])
                        .attr("r", 15)
                        .attr("fill", d.color)
                        .attr("opacity", 0)
                        .append("animate")
                        .attr("attributeName", "opacity")
                        .attr("values", "0.4;0")
                        .attr("dur", "2s")
                        .attr("repeatCount", "indefinite");

                    g.append("circle")
                        .attr("cx", center[0])
                        .attr("cy", center[1])
                        .attr("r", 5)
                        .attr("fill", "none")
                        .attr("stroke", d.color)
                        .attr("stroke-width", 2)
                        .append("animate")
                        .attr("attributeName", "r")
                        .attr("values", "4;12")
                        .attr("dur", "2s")
                        .attr("repeatCount", "indefinite");
                }

                g.append("circle")
                    .attr("cx", center[0])
                    .attr("cy", center[1])
                    .attr("r", selectedClan?.id === d.id ? 5 : 3)
                    .attr("fill", selectedClan?.id === d.id ? "white" : d.color)
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("class", "marker-dot shadow-lg");

                // Multi-language marker labels for all home bases
                g.append("text")
                    .attr("x", center[0] + 8)
                    .attr("y", center[1] + 4)
                    .text(d.clan)
                    .attr("fill", selectedClan?.id === d.id ? "#ffffff" : "rgba(255,255,255,0.7)")
                    .attr("font-size", selectedClan?.id === d.id ? "13px" : "10px")
                    .attr("font-weight", "900")
                    .style("font-family", "'Outfit', 'Inter', sans-serif")
                    .style("pointer-events", "none")
                    .style("text-transform", language === 'TH' ? "none" : "uppercase")
                    .style("letter-spacing", language === 'TH' ? "0" : "0.05em")
                    .style("text-shadow", "0 0 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)");
            }
        });

    }, [geoData, selectedClan, onSelectClan, language]);

    return (
        <div className="relative w-full h-[650px] bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
            {/* Background Scanner Lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}
            />

            <svg ref={svgRef} className="drop-shadow-[0_0_20px_rgba(255,136,0,0.15)]"></svg>

            {/* Region Labels */}
            <div className="absolute top-10 left-10 text-[10px] font-mono opacity-20 uppercase tracking-[0.5em]">{T[language].northernHighlands}</div>
            <div className="absolute bottom-10 right-10 text-[10px] font-mono opacity-20 uppercase tracking-[0.5em]">{T[language].southernIsthmus}</div>

            {/* Interactive Legend */}
            <div className="absolute bottom-6 left-6 p-4 bg-black/60 border border-white/10 backdrop-blur-md">
                <div className="text-[8px] font-black uppercase tracking-widest opacity-40 mb-2">{T[language].tacticalOverlay}</div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-whistle-orange" />
                        <span className="text-[9px] font-black uppercase text-white/60 tracking-tighter">{T[language].activeBaanYai}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BudgetMap = () => {
    const { language } = useLanguage();
    const currentClans = CLANS_DATA[language];
    const [selectedClan, setSelectedClan] = useState(currentClans[0]);

    // Handle language change for selectedClan
    useEffect(() => {
        const updatedClan = currentClans.find(c => c.id === selectedClan.id);
        if (updatedClan) setSelectedClan(updatedClan);
    }, [language, currentClans, selectedClan.id]);

    return (
        <div className="p-8 max-w-7xl mx-auto min-h-screen">
            {/* Header Area */}
            <header className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                    <Landmark size={32} className="text-whistle-orange" />
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">{T[language].title}</h2>
                </div>
                <div className="text-[10px] font-mono text-whistle-orange uppercase tracking-[0.4em] mb-6">{T[language].subtitle}</div>

                <div className="p-4 bg-whistle-orange/5 border border-whistle-orange/20 relative overflow-hidden">
                    <div className="flex items-start gap-3">
                        <LocateFixed className="text-whistle-orange shrink-0 mt-0.5" size={18} />
                        <p className="text-[11px] italic opacity-70 leading-relaxed uppercase tracking-tight">
                            "{T[language].protocol}"
                        </p>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Map Visualization */}
                <div className="lg:col-span-5 h-full">
                    <ThailandSVG selectedClan={selectedClan} onSelectClan={setSelectedClan} />
                </div>

                {/* Intelligence Report (Details) */}
                <div className="lg:col-span-7">
                    <AnimatePresence mode="wait">
                        {selectedClan ? (
                            <motion.div
                                key={selectedClan.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="glass p-8 min-h-[600px] relative overflow-hidden flex flex-col h-full"
                            >
                                {/* Header Data */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-8">
                                    <div>
                                        <div className="flex items-center gap-2 text-whistle-orange text-xs font-black uppercase tracking-widest mb-2">
                                            <MapPin size={12} /> {T[language].localHQ}: {language === 'TH' ? selectedClan.baseTh : selectedClan.base}
                                        </div>
                                        <h3 className="text-5xl font-black uppercase tracking-tighter italic leading-none mb-4">{selectedClan.clan}</h3>
                                        <div className="flex items-start gap-3 bg-black/40 p-4 border border-white/5">
                                            <Users size={20} className="text-whistle-orange/60 mt-1" />
                                            <div>
                                                <div className="text-[9px] opacity-40 font-black uppercase tracking-widest leading-none">{T[language].primaryManager}</div>
                                                <div className="text-xs font-bold leading-relaxed">{selectedClan.manager}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="p-3 bg-whistle-orange/10 border border-whistle-orange/20 text-center">
                                            <TrendingUp size={24} className="text-whistle-orange mx-auto mb-1" />
                                            <div className="text-[8px] font-black uppercase leading-none opacity-60">{T[language].status}</div>
                                            <div className="text-xs font-black text-whistle-orange uppercase">{T[language].activeFiefdom}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                                    {/* Column 1: Budgets */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 mb-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                                            <Briefcase size={12} /> {T[language].ministerialSupplyChain}
                                        </div>
                                        <div className="space-y-3">
                                            {selectedClan.portfolios.map((p, idx) => (
                                                <div key={idx} className="bg-white/5 p-4 border-l-2 border-whistle-orange relative group hover:bg-white/10 transition-colors">
                                                    <div className="text-[8px] opacity-30 font-black mb-1">{T[language].department}</div>
                                                    <div className="text-sm font-black uppercase tracking-tighter mb-3">{p.name}</div>
                                                    <div className="flex justify-between items-end">
                                                        {p.fy23 && (
                                                            <div>
                                                                <div className="text-[7px] opacity-30 font-bold uppercase tracking-widest">{T[language].fy2023Allocation}</div>
                                                                <div className="text-lg font-mono font-black text-whistle-orange leading-none">{p.fy23} <span className="text-[8px] opacity-40">THB</span></div>
                                                            </div>
                                                        )}
                                                        <Database size={24} className="opacity-[0.05]" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Sameness Factor */}
                                        <div className="bg-whistle-orange/10 border-l-4 border-whistle-orange p-5 mt-6">
                                            <div className="flex items-center gap-2 mb-2 text-[10px] font-black uppercase tracking-widest text-whistle-orange">
                                                <Info size={14} /> {T[language].samenessFactor}
                                            </div>
                                            <p className="text-[10px] leading-relaxed font-bold uppercase tracking-tight opacity-90 leading-tight">
                                                {selectedClan.sameness}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Column 2: Evidence */}
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                                            <Construction size={12} /> {T[language].fieldIntelligence}
                                        </div>
                                        <div className="bg-black/30 p-6 border border-white/5 text-sm leading-relaxed text-white/70 italic font-serif flex-1">
                                            "{selectedClan.evidence}"
                                        </div>

                                        <div className="mt-6 p-4 border border-dashed border-white/10 flex items-center justify-between">
                                            <div className="text-[9px] font-black uppercase tracking-widest opacity-30">{T[language].securityClearance}</div>
                                            <div className="flex gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-whistle-orange animate-pulse" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-whistle-orange/40" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-whistle-orange/20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background Decoration */}
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                                    <div className="text-[100px] font-black leading-none uppercase italic">
                                        {language === 'TH' ? selectedClan.base : selectedClan.base.split(' ')[0]}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="glass h-full flex flex-col items-center justify-center text-center p-12 opacity-30">
                                <LocateFixed size={64} className="mb-6 animate-pulse" />
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{T[language].awaitingGeoLock}</h3>
                                <p className="text-sm uppercase tracking-widest">{T[language].initializeIntelFeed}</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Strategic Findings Footer */}
            <section className="mt-12 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass p-6 border-t-2 border-whistle-orange/20">
                        <div className="text-[10px] font-black text-whistle-orange uppercase tracking-widest mb-2">{T[language].transactionalLocalism}</div>
                        <p className="text-[10px] leading-relaxed opacity-50 uppercase font-bold tracking-tight">
                            {T[language].transactionalLocalismDesc}
                        </p>
                        <div className="mt-4 flex justify-between items-end">
                            <TrendingUp size={16} className="text-whistle-orange/30" />
                            <div className="text-[8px] opacity-20 font-mono">STATUS: STABLE</div>
                        </div>
                    </div>
                    <div className="glass p-6 border-t-2 border-whistle-orange/20">
                        <div className="text-[10px] font-black text-whistle-orange uppercase tracking-widest mb-2">{T[language].bjtStrategy}</div>
                        <p className="text-[10px] leading-relaxed opacity-50 uppercase font-bold tracking-tight">
                            {T[language].bjtStrategyDesc}
                        </p>
                        <div className="mt-4 flex justify-between items-end">
                            <Users size={16} className="text-whistle-orange/30" />
                            <div className="text-[8px] opacity-20 font-mono">{T[language].intelConfirmed}</div>
                        </div>
                    </div>
                    <div className="glass p-6 border-t-2 border-whistle-orange/20">
                        <div className="text-[10px] font-black text-whistle-orange uppercase tracking-widest mb-2">{T[language].constructionNexus}</div>
                        <p className="text-[10px] leading-relaxed opacity-50 uppercase font-bold tracking-tight">
                            {T[language].constructionNexusDesc}
                        </p>
                        <div className="mt-4 flex justify-between items-end">
                            <Construction size={16} className="text-whistle-orange/30" />
                            <div className="text-[8px] opacity-20 font-mono">{T[language].sourceDeclassified}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BudgetMap;
