import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const allMinistries = {
    EN: [
        "Prime Minister", "Interior", "Transport", "Agriculture", "Defence",
        "Finance", "Foreign Affairs", "Public Health", "Commerce", "Industry",
        "Education", "Justice", "Labour", "Tourism/Sports", "Social Dev.",
        "Digital/ICT", "Natural Res.", "Energy", "Culture", "Higher Ed."
    ],
    TH: [
        "นายกรัฐมนตรี", "มหาดไทย", "คมนาคม", "เกษตรและสหกรณ์", "กลาโหม",
        "การคลัง", "ต่างประเทศ", "สาธารณสุข", "พาณิชย์", "อุตสาหกรรม",
        "ศึกษาธิการ", "ยุติธรรม", "แรงงาน", "ท่องเที่ยวและกีฬา", "พัฒนาสังคมฯ",
        "ดีอีเอส", "ทรัพยากรฯ", "พลังงาน", "วัฒนธรรม", "อว."
    ]
};

export const TRANSLATIONS = {
    EN: {
        title: "THE MUSICAL CHAIRS",
        subtitle: "Fixed Slots. Shifting Power. Professional Survivors.",
        pause: "PAUSE LOOP",
        play: "START AUTO-SCAN",
        insightTitle: "Intelligence Insight",
        recycledSurvivor: "RECYCLED SURVIVOR",
        stayed: "STAYED",
        dualPortfolio: "DUAL PORTFOLIO",
        stayedSame: "Stayed (Same Portfolio)",
        protocol: "Protocol: Anti-Corruption / Stability Metrics",
        faction: "Faction",
        profile: "Operational Profile",
        status: "Current Status",
        activeAgent: "Active Agent",
        assetNote: "Strategic asset of the network. Notable capacity for concurrent executive roles and cross-coalition survival.",
        serviceRecord: "Classified Service Record",
        analysis: "10-Year Trajectory Analysis",
        securityClearance: "TS: TOP-SECRET/EYES-ONLY",
        multiSpec: "Multi-Portfolio Specialist",
        multiSpecNote: "Detected history of holding multiple ministries simultaneously.",
        totalPosts: "Total Posts",
        uniqueMin: "Unique Ministries",
        affiliations: "Affiliations",
        eject: "Eject Dossier [ESC]",
        keyTitle: "Politician Dossier Key",
        keySubtitle: "How to read the Musical Chairs visualization",
        return: "Return to Intelligence Feed",
        confidential: "CONFIDENTIAL",
        cam: "CAM",
        historyEncrypted: "Historical data encrypted or unavailable."
    },
    TH: {
        title: "เก้าอี้ดนตรีแห่งอำนาจ",
        subtitle: "ตำแหน่งคงเดิม อำนาจที่เปลี่ยนมือ และเหล่านักเอาตัวรอดมืออาชีพ",
        pause: "หยุดการวนซ้ำ",
        play: "เริ่มการสแกนอัตโนมัติ",
        insightTitle: "เจาะลึกข้อมูลข่าวกรอง",
        recycledSurvivor: "นักเอาตัวรอดรีไซเคิล",
        stayed: "คนเดิม",
        dualPortfolio: "ควบสองตำแหน่ง",
        stayedSame: "คงเดิม (ตำแหน่งเดิม)",
        protocol: "โปรโตคอล: ตัวชี้วัดการต่อต้านคอร์รัปชันและความมั่นคง",
        faction: "กลุ่ม/ตระกูล",
        profile: "ข้อมูลการปฏิบัติการ",
        status: "สถานะปัจจุบัน",
        activeAgent: "กำลังปฏิบัติงาน",
        assetNote: "สินทรัพย์ทางยุทธศาสตร์ของเครือข่าย มีความสามารถโดดเด่นในการควบตำแหน่งบริหารและรอดพ้นจากการเปลี่ยนขั้วรัฐบาล",
        serviceRecord: "ประวัติการรับราชการ (ชั้นความลับ)",
        analysis: "การวิเคราะห์เส้นทางอำนาจ 10 ปี",
        securityClearance: "ระดับชั้นความลับ: ข้อมูลปกปิดชั้นสูงสุด",
        multiSpec: "ผู้เชี่ยวชาญการควบตำแหน่ง",
        multiSpecNote: "ตรวจพบประวัติการดำรงตำแหน่งรัฐมนตรีหลายกระทรวงพร้อมกัน",
        totalPosts: "ตำแหน่งทั้งหมด",
        uniqueMin: "กระทรวงที่เคยคุม",
        affiliations: "สังกัด/พรรค",
        eject: "ปิดแฟ้มข้อมูล [ESC]",
        keyTitle: "คำอธิบายสัญลักษณ์ข้อมูล",
        keySubtitle: "วิธีอ่านข้อมูลการเคลื่อนย้ายตำแหน่งรัฐมนตรี",
        return: "กลับสู่หน้าข้อมูลหลัก",
        confidential: "ความลับ",
        cam: "กล้อง",
        historyEncrypted: "ข้อมูลประวัติถูกเข้ารหัสหรือไม่สามารถเข้าถึงได้"
    }
};
