export const FOCUS_AREAS = [
    { id: "economy", EN: "Economy", TH: "เศรษฐกิจ" },
    { id: "welfare", EN: "Welfare", TH: "สวัสดิการ" },
    { id: "politics", EN: "Politics", TH: "การเมือง" },
    { id: "agriculture", EN: "Agriculture", TH: "เกษตรกรรม" },
    { id: "social_equality", EN: "Social Equality", TH: "ความเท่าเทียมทางสังคม" },
    { id: "energy_env", EN: "Energy/Env", TH: "พลังงาน/สิ่งแวดล้อม" },
    { id: "governance", EN: "Governance", TH: "ธรรมาภิบาล" },
    { id: "education", EN: "Education", TH: "การศึกษา" }
];

export const PARTY_POLICIES = [
    {
        id: "pp",
        name: { EN: "People's Party", TH: "พรรคประชาชน" },
        leader: { EN: "Natthaphong Ruengpanyawut", TH: "ณัฐพงษ์ เรืองปัญญาวุฒิ" },
        color: "#ff4500",
        ballotNumber: "46",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/ประชาชน.png?path=document/political-party/2066c44aa316427/logo_party&type=image/png",
        website: "https://peoplesparty.or.th",
        policies: {
            economy: {
                EN: "De-monopolize energy and liquor; support SME growth through tax reform.",
                TH: "ทลายทุนผูกขาดพลังงานและสุรา; สนับสนุนการเติบโตของ SMEs ผ่านการปฏิรูปภาษี",
                status: "Confirmed"
            },
            welfare: {
                EN: "Universal welfare: 3,000 THB birth gift; 1,200 THB monthly child allowance.",
                TH: "สวัสดิการถ้วนหน้า: เงินรับขวัญเด็กแรกเกิด 3,000 บาท; เงินอุดหนุนเด็กรายเดือน 1,200 บาท",
                status: "Confirmed"
            },
            politics: {
                EN: "Drafting a new 'People's Constitution'; reducing the power of appointed bodies.",
                TH: "ร่าง 'รัฐธรรมนูญฉบับประชาชน' ใหม่; ลดอำนาจองค์กรที่มาจากการแต่งตั้ง",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Full land ownership reform for farmers; high-tech farming subsidies.",
                TH: "ปฏิรูปกรรมสิทธิ์ที่ดินเพื่อเกษตรกรอย่างเต็มรูปแบบ; อุดหนุนเกษตรกรด้วยเทคโนโลยีขั้นสูง",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Full Marriage Equality implementation; reform of Lèse-majesté law (S. 112).",
                TH: "การบังคับใช้สมรสเท่าเทียมอย่างเต็มรูปแบบ; ปฏิรูปกฎหมาย ม.112",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Liberalize energy market; Net Zero target by 2040.",
                TH: "เสรีตลาดพลังงาน; เป้าหมาย Net Zero ภายในปี 2040",
                status: "Confirmed"
            },
            governance: {
                EN: "End mandatory military conscription; decentralize power to local governors.",
                TH: "ยกเลิกการเกณฑ์ทหาร; กระจายอำนาจสู่การเลือกตั้งผู้ว่าราชการจังหวัด",
                status: "Confirmed"
            },
            education: {
                EN: "Curriculum overhaul; free high-speed internet and tablets for students.",
                TH: "รื้อระบบหลักสูตรใหม่; อินเทอร์เน็ตความเร็วสูงและแท็บเล็ตฟรีสำหรับนักเรียน",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 7, welfare: 9, politics: 10, agriculture: 8, social_equality: 10, energy_env: 8, governance: 10, education: 9
        }
    },
    {
        id: "ptp",
        name: { EN: "Pheu Thai Party", TH: "พรรคเพื่อไทย" },
        leader: { EN: "Yodchanan Wongsawat", TH: "ยศชนัน วงศ์สวัสดิ์" },
        color: "#df0018",
        ballotNumber: "9",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/logoเพื่อไทย.jpg?path=document/political-party/206013863ee98c8/logo_party&type=image/jpeg",
        website: "https://ptp.or.th",
        policies: {
            economy: {
                EN: "Digital Wallet 2.0; 600 THB minimum wage; transforming Thailand into a regional manufacturing hub.",
                TH: "ดิจิทัลวอลเล็ต 2.0; ค่าแรงขั้นต่ำ 600 บาท; เปลี่ยนไทยเป็นศูนย์กลางการผลิตแห่งภูมิภาค",
                status: "Confirmed"
            },
            welfare: {
                EN: "30-Baht Plus Healthcare: adding cancer screening and mental health support.",
                TH: "30 บาทรักษาทุกที่พลัส: เพิ่มการคัดกรองมะเร็งและสนับสนุนสุขภาพจิต",
                status: "Confirmed"
            },
            politics: {
                EN: "Constitution reform via a fully elected Constitutional Drafting Assembly.",
                TH: "แก้รัฐธรรมนูญผ่าน สสร. ที่มาจากการเลือกตั้งทั้งหมด",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Crop price guarantees; 'Smart Farming' using AI and data analytics.",
                TH: "ประกันราคาพืชผล; สมาร์ทฟาร์มมิ่งด้วย AI และวิเคราะห์ข้อมูล",
                status: "Confirmed"
            },
            social_equality: {
                EN: "LGBTQ+ rights advocacy; gender-inclusive labor laws.",
                TH: "สนับสนุนสิทธิ LGBTQ+; กฎหมายแรงงานที่ครอบคลุมทุกเพศ",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Reduction of electricity and gas prices through state intervention and tech.",
                TH: "ลดราคาไฟฟ้าและก๊าซผ่านการแทรกแซงของรัฐและเทคโนโลยี",
                status: "Confirmed"
            },
            governance: {
                EN: "Digital Bureaucracy; anti-corruption via blockchain transparency.",
                TH: "ระบบราชการดิจิทัล; ต้านคอร์รัปชันด้วยความโปร่งใสผ่านบล็อกเชน",
                status: "Confirmed"
            },
            education: {
                EN: "One District One Hospital/School; focus on digital and vocational skills.",
                TH: "หนึ่งอำเภอ หนึ่งสถานพยาบาล/โรงเรียน; เน้นทักษะดิจิทัลและอาชีวศึกษา",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 10, welfare: 9, politics: 6, agriculture: 9, social_equality: 8, energy_env: 7, governance: 7, education: 8
        }
    },
    {
        id: "bjt",
        name: { EN: "Bhumjaithai Party", TH: "พรรคภูมิใจไทย" },
        leader: { EN: "Anutin Charnvirakul", TH: "อนุทิน ชาญวีรกูล" },
        color: "#0000ff",
        ballotNumber: "37",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/ภูมิใจไทย.jpg?path=document/political-party/206822fc37910a4/logo_party&type=image/jpeg",
        website: "https://bhumjaithai.com",
        policies: {
            economy: {
                EN: "3-year debt moratorium; full legalization of cannabis for medical and economic trade.",
                TH: "พักหนี้ 3 ปี; กัญชาเสรีเต็มรูปแบบเพื่อการแพทย์และการค้า",
                status: "Confirmed"
            },
            welfare: {
                EN: "Free Solar Roofs for households; 50,000 THB life insurance fund for all.",
                TH: "ติดตั้งโซลาร์รูฟฟรี; กองทุนประกันชีวิต 50,000 บาทสำหรับทุกคน",
                status: "Confirmed"
            },
            politics: {
                EN: "Decentralization based on the 'Buriram Model' of local development.",
                TH: "การกระจายอำนาจโดยใช้ 'บุรีรัมย์โมเดล' เป็นต้นแบบการพัฒนาท้องถิ่น",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Contract farming protection; water management systems to prevent drought.",
                TH: "คุ้มครองเกษตรพันธสัญญา; ระบบจัดการน้ำเพื่อแก้ปัญหาภัยแล้ง",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Equal access to medical and economic resources in rural areas.",
                TH: "การเข้าถึงทรัพยากรการแพทย์และเศรษฐกิจอย่างเท่าเทียมในพื้นที่ชนบท",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Solar liberalization; promoting the 'Green Economy' via hemp and solar power.",
                TH: "โซลาร์เสรี; สนับสนุน 'เศรษฐกิจสีเขียว' ผ่านกัญชงและพลังงานแสงอาทิตย์",
                status: "Confirmed"
            },
            governance: {
                EN: "Volunteer soldier program to eventually replace mandatory conscription.",
                TH: "โครงการทหารอาสาสมัครเพื่อทดแทนการเกณฑ์ทหารในอนาคต",
                status: "Confirmed"
            },
            education: {
                EN: "Lifelong learning centers; re-skilling programs for the elderly.",
                TH: "ศูนย์เรียนรู้ตลอดชีวิต; โปรแกรมฝึกทักษะใหม่สำหรับผู้สูงอายุ",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 8, welfare: 8, politics: 5, agriculture: 8, social_equality: 7, energy_env: 10, governance: 6, education: 7
        }
    },
    {
        id: "utn",
        name: { EN: "United Thai Nation", TH: "พรรครวมไทยสร้างชาติ" },
        leader: { EN: "Pirapan Salirathavibhaga", TH: "พีระพันธุ์ สาลีรัฐวิภาค" },
        color: "#2d3091",
        ballotNumber: "6",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/logo พรรครวมไทยสร้างชาติ_2.jpg?path=document/political-party/20635b34b1bd553/logo_party&type=image/jpeg",
        website: "https://unitedthaination.or.th",
        policies: {
            economy: {
                EN: "Stable fuel prices (Gasoline at 25 THB/L); continuation of infrastructure projects.",
                TH: "ตรึงราคาน้ำมัน (เบนซิน 25 บาท/ลิตร); สานต่อโครงการโครงสร้างพื้นฐาน",
                status: "Confirmed"
            },
            welfare: {
                EN: "Increased monthly allowance for the elderly and state welfare card 'Plus'.",
                TH: "เพิ่มเบี้ยยังชีพผู้สูงอายุและบัตรสวัสดิการแห่งรัฐ 'พลัส'",
                status: "Confirmed"
            },
            politics: {
                EN: "Protection of the Monarchy and national security institutions.",
                TH: "ปกป้องสถาบันพระมหากษัตริย์และหน่วยงานความมั่นคงแห่งชาติ",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Direct subsidies for rice harvesting costs (1,000 THB per rai).",
                TH: "เงินอุดหนุนตรงค่าเก็บเกี่ยวข้าว (1,000 บาทต่อไร่)",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Promoting traditional Thai values and social order.",
                TH: "ส่งเสริมค่านิยมไทยแบบดั้งเดิมและความเป็นระเบียบเรียบร้อยของสังคม",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Electricity price cap at 3.30 THB per unit; focus on energy security.",
                TH: "ตรึงราคาไฟฟ้าที่ 3.30 บาทต่อหน่วย; เน้นความมั่นคงทางพลังงาน",
                status: "Confirmed"
            },
            governance: {
                EN: "Tough anti-corruption laws; death penalty for high-level government graft.",
                TH: "กฎหมายต้านโกงที่เด็ดขาด; โทษประหารชีวิตสำหรับการคอร์รัปชันระดับสูง",
                status: "Confirmed"
            },
            education: {
                EN: "Vocational training aligned with industrial and security needs.",
                TH: "การอาชีวศึกษาที่สอดคล้องกับความต้องการภาคอุตสาหกรรมและความมั่นคง",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 7, welfare: 8, politics: 10, agriculture: 7, social_equality: 5, energy_env: 8, governance: 9, education: 6
        }
    },
    {
        id: "kt",
        name: { EN: "Kla Tham Party", TH: "พรรคคล้าธรรม" },
        leader: { EN: "Thammanat Prompow", TH: "ธรรมนัส พรหมเผ่า" },
        color: "#006400",
        ballotNumber: "42",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/กล้าธรรม.jpg?path=document/political-party/2067c7d105c917f/logo_party&type=image/jpeg",
        website: "https://www.facebook.com/p/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%98%E0%B8%A3%E0%B8%A1-100093307453432/",
        policies: {
            economy: {
                EN: "Regional economic hubs; debt relief for informal workers.",
                TH: "ศูนย์กลางเศรษฐกิจภูมิภาค; แก้ปัญหาหนี้นอกระบบสำหรับแรงงานอิสระ",
                status: "Confirmed"
            },
            welfare: {
                EN: "Community-based welfare; mobile medical units for remote villages.",
                TH: "สวัสดิการโดยชุมชน; หน่วยแพทย์เคลื่อนที่สำหรับหมู่บ้านห่างไกล",
                status: "Confirmed"
            },
            politics: {
                EN: "Political stability through compromise; focus on provincial power.",
                TH: "เสถียรภาพทางการเมืองผ่านการประนีประนอม; เน้นอำนาจส่วนจังหวัด",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Conversion of land reform documents (Sor Por Kor) into full title deeds.",
                TH: "เปลี่ยนเอกสาร ส.ป.ก. เป็นโฉนดที่ดินเพื่อการเกษตร",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Support for ethnic groups and rural land rights.",
                TH: "สนับสนุนกลุ่มชาติพันธุ์และสิทธิในที่ดินทำกินของชาวชนบท",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Local biomass energy production; community-led water management.",
                TH: "การผลิตพลังงานชีวมวลในท้องถิ่น; การจัดการน้ำโดยชุมชน",
                status: "Confirmed"
            },
            governance: {
                EN: "Streamlining local bureaucracy; increased budget for village funds.",
                TH: "ปรับลดขั้นตอนราชการท้องถิ่น; เพิ่มงบประมาณกองทุนหมู่บ้าน",
                status: "Confirmed"
            },
            education: {
                EN: "Local wisdom-based curriculum; scholarships for rural students.",
                TH: "หลักสูตรอิงภูมิปัญญาท้องถิ่น; ทุนการศึกษาสำหรับนักเรียนชนบท",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 6, welfare: 7, politics: 6, agriculture: 10, social_equality: 7, energy_env: 7, governance: 7, education: 5
        }
    },
    {
        id: "dp",
        name: { EN: "Democrat Party", TH: "พรรคประชาธิปัตย์" },
        leader: { EN: "Abhisit Vejjajiva", TH: "อภิสิทธิ์ เวชชาชีวะ" },
        color: "#00bfff",
        ballotNumber: "27",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/ประชาธิปัตย์.jpg?path=document/political-party/2069439e8522c77/logo_party&type=image/jpeg",
        website: "https://democrat.or.th",
        policies: {
            economy: {
                EN: "Boosting GDP to 5%; focus on integrity and sustainable SME growth.",
                TH: "ดัน GDP โต 5%; เน้นความสุจริตและการเติบโตของ SMEs อย่างยั่งยืน",
                status: "Confirmed"
            },
            welfare: {
                EN: "Universal basic income for the lowest-income groups; education subsidies.",
                TH: "รายได้พื้นฐานถ้วนหน้าสำหรับกลุ่มรายได้ต่ำสุด; เงินอุดหนุนการศึกษา",
                status: "Confirmed"
            },
            politics: {
                EN: "Constitutional reform focused on the Rule of Law and transparency.",
                TH: "ปฏิรูปรัฐธรรมนูญที่ยึดนิติธรรมและความโปร่งใส",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Modernizing the cooperative system; insurance for crop failures.",
                TH: "ยกระดับระบบสหกรณ์ให้ทันสมัย; การประกันภัยพืชผลเสียหาย",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Narrowing the wealth gap through progressive taxation.",
                TH: "ลดช่องว่างความเหลื่อมล้ำผ่านระบบภาษีก้าวหน้า",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Pollution control laws (PM 2.5); clean energy regional leadership.",
                TH: "กฎหมายควบคุมมลพิษ (PM 2.5); ผู้นำสะอาดระดับภูมิภาค",
                status: "Confirmed"
            },
            governance: {
                EN: "Civil service reform to ensure independence from political interference.",
                TH: "ปฏิรูประบบราชการเพื่อความเป็นอิสระจากการแทรกแซงทางการเมือง",
                status: "Confirmed"
            },
            education: {
                EN: "Free milk and lunch program extension; focus on critical thinking.",
                TH: "ขยายโครงการนมและอาหารกลางวันฟรี; เน้นการคิดวิเคราะห์",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 7, welfare: 7, politics: 8, agriculture: 7, social_equality: 9, energy_env: 8, governance: 9, education: 8
        }
    },
    {
        id: "pprp",
        name: { EN: "Palang Pracharath Party", TH: "พรรคพลังประชารัฐ" },
        leader: { EN: "Trinuch Thienthong", TH: "ตรีนุช เทียนทอง" },
        color: "#00008b",
        ballotNumber: "43",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/พลังประชารัฐ.jpg?path=document/political-party/20693f6f988efa9/logo_party&type=image/jpeg",
        website: "https://pprp.or.th",
        policies: {
            economy: {
                EN: "Welfare state capitalism; low-interest loans for the poor.",
                TH: "ทุนนิยมรัฐสวัสดิการ; เงินกู้ดอกเบี้ยต่ำสำหรับผู้มีรายได้น้อย",
                status: "Confirmed"
            },
            welfare: {
                EN: "Expansion of the State Welfare Card (Pracharat Card) benefits.",
                TH: "ขยายสิทธิประโยชน์บัตรสวัสดิการแห่งรัฐ (บัตรประชารัฐ)",
                status: "Confirmed"
            },
            politics: {
                EN: "Overcoming political conflict; conservative stability.",
                TH: "ก้าวข้ามความขัดแย้งทางการเมือง; เสถียรภาพแบบอนุรักษนิยม",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Debt relief for farmers; stabilizing agricultural commodity prices.",
                TH: "ปลดหนี้เกษตรกร; ตรึงราคาพืชผลทางการเกษตร",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Social order and harmony; traditional family values.",
                TH: "ความเป็นระเบียบและสามัคคีในสังคม; ค่านิยมครอบครัวดั้งเดิม",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Subsidized electricity for low-income households.",
                TH: "อุดหนุนค่าไฟฟ้าสำหรับครัวเรือนรายได้น้อย",
                status: "Confirmed"
            },
            governance: {
                EN: "Military-civilian cooperation in national development.",
                TH: "ความร่วมมือทหาร-พลเรือนในการพัฒนาประเทศ",
                status: "Confirmed"
            },
            education: {
                EN: "Morality-based education; vocational school funding.",
                TH: "คุณธรรมนำการศึกษา; สนับสนุนงบประมาณโรงเรียนอาชีวะ",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 7, welfare: 10, politics: 7, agriculture: 7, social_equality: 5, energy_env: 6, governance: 8, education: 7
        }
    },
    {
        id: "pc",
        name: { EN: "Prachachart Party", TH: "พรรคประชาชาติ" },
        leader: { EN: "Tawee Sodsong", TH: "ทวี สอดส่อง" },
        color: "#ffd700",
        ballotNumber: "33",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/M2xevpGASZ53DoX6?path=document/logo-party/./.M2xevpGASZ53DoX6&type=image/png",
        website: "https://prachachat.org",
        policies: {
            economy: {
                EN: "Halal economy hub; southern border trade liberalization.",
                TH: "ศูนย์กลางเศรษฐกิจฮาลาล; เสรีการค้าชายแดนใต้",
                status: "Confirmed"
            },
            welfare: {
                EN: "Welfare for religious leaders and local communities.",
                TH: "สวัสดิการสำหรับผู้นำศาสนาและชุมชนท้องถิ่น",
                status: "Confirmed"
            },
            politics: {
                EN: "Peace process in the South; decentralization to the 'Deep South'.",
                TH: "กระบวนการสันติภาพชายแดนใต้; กระจายอำนาจสู่ 3 จังหวัดชายแดนใต้",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Rubber and palm oil price stabilization.",
                TH: "ตรึงราคายางพาราและปาล์มน้ำมัน",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Multicultural rights; religious freedom protection.",
                TH: "สิทธิพหุวัฒนธรรม; คุ้มครองเสรีภาพในการนับถือศาสนา",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Community forest rights; environmental justice for local tribes.",
                TH: "สิทธิป่าชุมชน; ความเป็นธรรมทางสิ่งแวดล้อมสำหรับกลุ่มชาติพันธุ์",
                status: "Confirmed"
            },
            governance: {
                EN: "Reform of security laws in the southern provinces.",
                TH: "ปฏิรูปกฎหมายความมั่นคงในจังหวัดชายแดนภาคใต้",
                status: "Confirmed"
            },
            education: {
                EN: "Bi-lingual education support; religious school (Pondok) modernization.",
                TH: "สนับสนุนการศึกษาทวิภาษา; ยกระดับโรงเรียนปอเนาะให้ทันสมัย",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 6, welfare: 7, politics: 7, agriculture: 8, social_equality: 10, energy_env: 7, governance: 8, education: 9
        }
    },
    {
        id: "tst",
        name: { EN: "Thai Sang Thai Party", TH: "พรรคไทยสร้างไทย" },
        leader: { EN: "Sudarat Keyuraphan", TH: "สุดารัตน์ เกยุราพันธุ์" },
        color: "#800080",
        ballotNumber: "48",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/ไทยสร้างไทย.png?path=document/political-party/206835632826050/logo_party&type=image/png",
        website: "https://thaisangthai.org",
        policies: {
            economy: {
                EN: "Economic liberation; 'Unlocking' small businesses from restrictive laws.",
                TH: "ปลดปล่อยเศรษฐกิจ; ปลดล็อกธุรกิจขนาดเล็กจากกฎหมายที่เป็นอุปสรรค",
                status: "Confirmed"
            },
            welfare: {
                EN: "3,000 THB monthly pension for the elderly; child support.",
                TH: "บำนาญประชาชน 3,000 บาทต่อเดือน; สนับสนุนเด็ก",
                status: "Confirmed"
            },
            politics: {
                EN: "Anti-militarism; drafting a constitution for the 'little people'.",
                TH: "ต่อต้านเผด็จการทหาร; ร่างรัฐธรรมนูญเพื่อ 'คนตัวเล็ก'",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Rice price guarantee; high-yield seed technology.",
                TH: "ประกันราคาข้าว; เทคโนโลยีเมล็ดพันธุ์ที่ให้ผลผลิตสูง",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Women's empowerment and economic independence.",
                TH: "เสริมสร้างอำนาจผู้หญิงและความเป็นอิสระทางการเงิน",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Reducing electricity costs by renegotiating private power contracts.",
                TH: "ลดค่าไฟฟ้าด้วยการเจรจาสัญญาซื้อขายไฟฟ้าจากเอกชนใหม่",
                status: "Confirmed"
            },
            governance: {
                EN: "Bureaucratic 'guillotine' (cutting unnecessary regulations).",
                TH: "กิโยตินกฎหมาย (ตัดระเบียบราชการที่ไม่จำเป็น)",
                status: "Confirmed"
            },
            education: {
                EN: "Reducing years of schooling; faster path to employment.",
                TH: "ลดจำนวนปีการศึกษา; เส้นทางสู่การสมัครงานที่รวดเร็วขึ้น",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 8, welfare: 10, politics: 9, agriculture: 7, social_equality: 9, energy_env: 7, governance: 8, education: 8
        }
    },
    {
        id: "cp",
        name: { EN: "Chart Pattana Party", TH: "พรรคชาติพัฒนา" },
        leader: { EN: "Suwat Liptapanlop", TH: "สุวัจน์ ลิปตพัลลภ" },
        color: "#f0f000",
        ballotNumber: "45",
        logoUrl: "https://party-admin.ect.go.th/public/static/file/ชาติพัฒนา.jpg?path=document/political-party/206695ea7e0d553/logo_party&type=image/jpeg",
        website: "https://www.facebook.com/ChartpattanaParty",
        policies: {
            economy: {
                EN: "Korat as a regional transport and logistics hub; tourism 'soft power'.",
                TH: "โคราชเป็นศูนย์กลางขนส่งและโลจิสติกส์ภูมิภาค; ซอฟต์พาวเวอร์การท่องเที่ยว",
                status: "Confirmed"
            },
            welfare: {
                EN: "Sports-based welfare; community exercise and health centers.",
                TH: "สวัสดิการเน้นกีฬา; ศูนย์สุขภาพและออกกำลังกายชุมชน",
                status: "Confirmed"
            },
            politics: {
                EN: "Economic-led politics; avoiding ideological extremes.",
                TH: "การเมืองนำเศรษฐกิจ; หลีกเลี่ยงความขัดแย้งทางอุดมการณ์สุดโต่ง",
                status: "Confirmed"
            },
            agriculture: {
                EN: "Logistics infrastructure for agricultural exports.",
                TH: "โครงสร้างพื้นฐานโลจิสติกส์เพื่อการส่งออกสินค้าเกษตร",
                status: "Confirmed"
            },
            social_equality: {
                EN: "Equal opportunity through digital access.",
                TH: "โอกาสที่เท่าเทียมผ่านการเข้าถึงระบบดิจิทัล",
                status: "Confirmed"
            },
            energy_env: {
                EN: "Eco-tourism promotion; renewable energy for industrial zones.",
                TH: "ส่งเสริมการท่องเที่ยวเชิงนิเวศ; พลังงานหมุนเวียนในเขตอุตสาหกรรม",
                status: "Confirmed"
            },
            governance: {
                EN: "Efficiency in local infrastructure project approval.",
                TH: "ความรวดเร็วในการอนุมัติโครงการโครงสร้างพื้นฐานท้องถิ่น",
                status: "Confirmed"
            },
            education: {
                EN: "Sports excellence scholarships; digital skills for tourism.",
                TH: "ทุนการศึกษาสู่ความเป็นเลิศด้านกีฬา; ทักษะดิจิทัลเพื่อการท่องเที่ยว",
                status: "Confirmed"
            }
        },
        scores: {
            economy: 9, welfare: 6, politics: 5, agriculture: 7, social_equality: 7, energy_env: 8, governance: 7, education: 6
        }
    }
];

export const ARCHETYPES = [
    {
        id: "labor_welfare",
        EN: "Labor & Welfare Advocates",
        TH: "กลุ่มพิทักษ์แรงงานและสวัสดิการ",
        description: {
            EN: "Parties focused on universal basic income, worker rights, and high-impact social welfare.",
            TH: "พรรคการเมืองที่เน้นเรื่องรายได้พื้นฐานถ้วนหน้า สิทธิแรงงาน และสวัสดิการสังคมที่ส่งผลกระทบสูง"
        },
        common_policies: {
            EN: ["3,000 THB Pension", "Labor Protection", "Debt Relief"],
            TH: ["บำนาญ 3,000 บาท", "การคุ้มครองแรงงาน", "การพักหนี้"]
        }
    },
    {
        id: "justice_reform",
        EN: "Justice & Reform Progressives",
        TH: "กลุ่มก้าวหน้าเพื่อความยุติธรรมและปฏิรูป",
        description: {
            EN: "Progressive groups advocating for constitutional change, judicial transparency, and human rights.",
            TH: "กลุ่มก้าวหน้าที่สนับสนุนการเปลี่ยนแปลงรัฐธรรมนูญ ความโปร่งใสของกระบวนการยุติธรรม และสิทธิมนุษยชน"
        },
        common_policies: {
            EN: ["Police Reform", "S.112 Amendment", "LGBTQ+ Rights"],
            TH: ["ปฏิรูปตำรวจ", "แก้ไข ม.112", "สิทธิ LGBTQ+"]
        }
    },
    {
        id: "stability_tradition",
        EN: "Traditionalist & Stability Parties",
        TH: "กลุ่มอนุรักษนิยมและเสถียรภาพ",
        description: {
            EN: "Parties prioritizing national security, traditional institutions, and social order.",
            TH: "พรรคการเมืองที่ให้ความสำคัญกับการรักษาความมั่นคงแห่งชาติ สถาบันหลัก และความเป็นระเบียบเรียบร้อยของสังคม"
        },
        common_policies: {
            EN: ["Monarchy Protection", "Village Funds", "Social Order"],
            TH: ["การปกป้องสถาบัน", "กองทุนหมู่บ้าน", "ความเป็นระเบียบของสังคม"]
        }
    },
    {
        id: "niche_guild",
        EN: "Niche & Professional Guilds",
        TH: "กลุ่มผลประโยชน์เฉพาะทางและวิชาชีพ",
        description: {
            EN: "Parties representing specific professions, local regions, or specialized economic issues.",
            TH: "พรรคการเมืองที่เป็นตัวแทนของกลุ่มอาชีพเฉพาะ ท้องถิ่น หรือประเด็นทางเศรษฐกิจเฉพาะทาง"
        },
        common_policies: {
            EN: ["Teacher Welfare", "High-Tech Seeds", "Special Economic Zones"],
            TH: ["สวัสดิการครู", "เมล็ดพันธุ์ไฮเทค", "เขตเศรษฐกิจพิเศษ"]
        }
    }
];

export const SMALLER_PARTIES = [
    // LABOR & WELFARE
    {
        id: "tst_s",
        name: { EN: "Thai Sang Thai Party", TH: "พรรคไทยสร้างไทย" },
        archetype: "labor_welfare",
        special_focus: { EN: "3,000 THB Monthly Pension for Elderly", TH: "บำนาญประชาชน 3,000 บาทต่อเดือน" }
    },
    {
        id: "pc_s",
        name: { EN: "Prachachart Party", TH: "พรรคประชาชาติ" },
        archetype: "labor_welfare",
        special_focus: { EN: "Southern Border Economy & Halal Hub", TH: "เศรษฐกิจชายแดนใต้และศูนย์กลางฮาลาล" }
    },
    {
        id: "tsdp",
        name: { EN: "Thai Social Democratic Party", TH: "พรรคสังคมประชาธิปไตยไทย" },
        archetype: "labor_welfare",
        special_focus: { EN: "Worker Rights & Inequality Reduction", TH: "สิทธิแรงงานและลดความเหลื่อมล้ำ" }
    },
    {
        id: "pnl",
        name: { EN: "Phuecheevitmai Party (New Life)", TH: "พรรคเพื่อชีวิตใหม่" },
        archetype: "labor_welfare",
        special_focus: { EN: "Life Quality Improvement for Workers", TH: "การยกระดับคุณภาพชีวิตผู้ใช้แรงงาน" }
    },
    {
        id: "na",
        name: { EN: "New Alternative Party", TH: "พรรคทางเลือกใหม่" },
        archetype: "labor_welfare",
        special_focus: { EN: "New Economic Alternatives for Small Farmers", TH: "ทางเลือกเศรษฐกิจใหม่สำหรับเกษตรกรรายย่อย" }
    },
    {
        id: "fnt",
        name: { EN: "Farmer Network of Thailand Party", TH: "พรรคเครือข่ายชาวนาแห่งประเทศไทย" },
        archetype: "labor_welfare",
        special_focus: { EN: "Farmer Sovereignty & Debt Relief", TH: "อำนาจอธิปไตยของชาวนาและการปลดหนี้" }
    },
    {
        id: "nsp",
        name: { EN: "New Social Power Party", TH: "พรรคพลังสังคมใหม่" },
        archetype: "labor_welfare",
        special_focus: { EN: "Universal Basic Welfare Expansion", TH: "การขยายสวัสดิการพื้นฐานถ้วนหน้า" }
    },
    {
        id: "tlp",
        name: { EN: "Thai Local Power Party", TH: "พรรคพลังท้องถิ่นไท" },
        archetype: "labor_welfare",
        special_focus: { EN: "Empowering Local Administrative Bodies", TH: "การให้อำนาจองค์กรปกครองส่วนท้องถิ่น" }
    },
    {
        id: "pb",
        name: { EN: "Phalang Burapha Party", TH: "พรรคพลังบูรพา" },
        archetype: "labor_welfare",
        special_focus: { EN: "Eastern Province Labor Rights", TH: "สิทธิแรงงานในพื้นที่ภาคตะวันออก" }
    },
    {
        id: "gi",
        name: { EN: "Independent Party (Gao Isara)", TH: "พรรคก้าวอิสระ" },
        archetype: "labor_welfare",
        special_focus: { EN: "Freedom from Debt & Independent Labor", TH: "การหลุดพ้นจากหนี้และแรงงานอิสระ" }
    },
    {
        id: "sp",
        name: { EN: "Social Power Party", TH: "พรรคพลังสังคม" },
        archetype: "labor_welfare",
        special_focus: { EN: "Social Justice and Welfare Distribution", TH: "ความยุติธรรมทางสังคมและการกระจายสวัสดิการ" }
    },
    {
        id: "lc",
        name: { EN: "Labor Construction Party", TH: "พรรคสร้างงาน" },
        archetype: "labor_welfare",
        special_focus: { EN: "Employment Creation & Fair Wages", TH: "การสร้างงานและค่าแรงที่เป็นธรรม" }
    },

    // JUSTICE & REFORM
    {
        id: "fair",
        name: { EN: "Fair Party (Pen Tham)", TH: "พรรคเป็นธรรม" },
        archetype: "justice_reform",
        special_focus: { EN: "Southern Peace Process and Justice Reform", TH: "กระบวนการสันติภาพชายแดนใต้และการปฏิรูปความยุติธรรม" }
    },
    {
        id: "srt",
        name: { EN: "Thai Liberal Party (Seri Ruam Thai)", TH: "พรรคเสรีรวมไทย" },
        archetype: "justice_reform",
        special_focus: { EN: "Anti-corruption & Reform of Govt Institutions", TH: "ต่อต้านการทุจริตและปฏิรูปองค์กรภาครัฐ" }
    },
    {
        id: "pm",
        name: { EN: "Movement Party (Phonlawat)", TH: "พรรคพลวัฒน์" },
        archetype: "justice_reform",
        special_focus: { EN: "Structural Political & Judicial Reform", TH: "การปฏิรูปโครงสร้างทางการเมืองและตุลาการ" }
    },
    {
        id: "gt",
        name: { EN: "Green Party Thailand", TH: "พรรคพรรคเขียวไทย" },
        archetype: "justice_reform",
        special_focus: { EN: "Environmental Justice & Sustainability", TH: "ความยุติธรรมทางสิ่งแวดล้อมและความยั่งยืน" }
    },
    {
        id: "ft",
        name: { EN: "Futurise Thailand Party", TH: "พรรคไทยอนาคต" },
        archetype: "justice_reform",
        special_focus: { EN: "Digital Rights and Modern Governance", TH: "สิทธิดิจิทัลและธรรมาภิบาลสมัยใหม่" }
    },
    {
        id: "tpm",
        name: { EN: "Thai Progress Party (Thai Kao Mai)", TH: "พรรคไทยก้าวใหม่" },
        archetype: "justice_reform",
        special_focus: { EN: "Democratic Progress and Public Participation", TH: "ความก้าวหน้าทางประชาธิปไตยและการมีส่วนร่วม" }
    },
    {
        id: "tf",
        name: { EN: "Thai Forward Party", TH: "พรรคไทยก้าวหน้า" },
        archetype: "justice_reform",
        special_focus: { EN: "Forward-thinking Policy Reform", TH: "การปฏิรูปนโยบายที่มองไปข้างหน้า" }
    },
    {
        id: "comm",
        name: { EN: "Commoners Party", TH: "พรรคสามัญชน" },
        archetype: "justice_reform",
        special_focus: { EN: "Grassroots Democracy & Human Rights", TH: "ประชาธิปไตยจากฐานรากและสิทธิมนุษยชน" }
    },
    {
        id: "tl",
        name: { EN: "Thai Lead Party", TH: "พรรคไทยนำ" },
        archetype: "justice_reform",
        special_focus: { EN: "Leading Reform in Public Service", TH: "การนำการปฏิรูปในภาคบริการสาธารณะ" }
    },

    // STABILITY & TRADITION
    {
        id: "nd",
        name: { EN: "New Democracy Party", TH: "พรรคประชาธิปไตยใหม่" },
        archetype: "stability_tradition",
        special_focus: { EN: "National Stability & Monarchy Preservation", TH: "เสถียรภาพแห่งชาติและการรักษาสถาบันกษัตริย์" }
    },
    {
        id: "pt",
        name: { EN: "Thai Citizen Party (Prachakorn Thai)", TH: "พรรคประชากรไทย" },
        archetype: "stability_tradition",
        special_focus: { EN: "Social Stability in Urban Centers", TH: "เสถียรภาพทางสังคมในเขตเมือง" }
    },
    {
        id: "rp",
        name: { EN: "Ruam Phalang Party", TH: "พรรครวมพลัง" },
        archetype: "stability_tradition",
        special_focus: { EN: "National Unity and Patriotic Values", TH: "ความสามัคคีแห่งชาติและค่านิยมรักชาติ" }
    },
    {
        id: "td",
        name: { EN: "Thai Morality Party (Thai Dhamma)", TH: "พรรคไทยธรรม" },
        archetype: "stability_tradition",
        special_focus: { EN: "Morality in Politics & Traditional Ethics", TH: "คุณธรรมในการเมืองและจริยธรรมแบบดั้งเดิม" }
    },
    {
        id: "rc",
        name: { EN: "Rak Chart Party", TH: "พรรครักชาติ" },
        archetype: "stability_tradition",
        special_focus: { EN: "Preservation of Thai Cultural Heritage", TH: "การอนุรักษ์มรดกทางวัฒนธรรมไทย" }
    },
    {
        id: "pdd",
        name: { EN: "Phaendin Dhamma Party (Land of Dharma)", TH: "พรรคแผ่นดินธรรม" },
        archetype: "stability_tradition",
        special_focus: { EN: "Buddhism-based Governance & Calmness", TH: "ธรรมาภิบาลตามหลักพุทธศาสนาและความสงบ" }
    },
    {
        id: "trt",
        name: { EN: "Thai Ruam Thai Party", TH: "พรรคไทยรวมไทย" },
        archetype: "stability_tradition",
        special_focus: { EN: "United Stability across all Provinces", TH: "เสถียรภาพที่รวมกันในทุกจังหวัด" }
    },
    {
        id: "nap",
        name: { EN: "New Aspiration Party", TH: "พรรคความหวังใหม่" },
        archetype: "stability_tradition",
        special_focus: { EN: "Restoring National Aspirations & Security", TH: "การฟื้นฟูความหวังและความมั่นคงของชาติ" }
    },
    {
        id: "ptrc",
        name: { EN: "Palang Thai Rak Chart Party", TH: "พรรคพลังไทยรักชาติ" },
        archetype: "stability_tradition",
        special_focus: { EN: "Traditional Guard of National Sovereignty", TH: "องครักษ์ดั้งเดิมของอธิปไตยแห่งชาติ" }
    },
    {
        id: "df",
        name: { EN: "Democratic Force Party", TH: "พรรคพลังประชาธิปไตย" },
        archetype: "stability_tradition",
        special_focus: { EN: "Stability-driven Democratic Values", TH: "ค่านิยมประชาธิปไตยที่ขับเคลื่อนด้วยเสถียรภาพ" }
    },
    {
        id: "tpk",
        name: { EN: "Thai Pakdee Party", TH: "พรรคไทยภักดี" },
        archetype: "stability_tradition",
        special_focus: { EN: "Staunch Defence of the Monarchy", TH: "การปกป้องสถาบันกษัตริย์อย่างเหนียวแน่น" }
    },
    {
        id: "ptf",
        name: { EN: "Protect the Thai Forest Party", TH: "พรรครักษ์ผืนป่าไทย" },
        archetype: "stability_tradition",
        special_focus: { EN: "Conservation as National Heritage Protection", TH: "การอนุรักษ์ในฐานะการปกป้องมรดกของชาติ" }
    },

    // NICHE & PROFESSIONAL GUILD
    {
        id: "ttp",
        name: { EN: "Thai Teachers for People Party", TH: "พรรคครูไทยเพื่อประชาชน" },
        archetype: "niche_guild",
        special_focus: { EN: "Education Reform & Teacher Support", TH: "การปฏิรูปการศึกษาและสนับสนุนครู" }
    },
    {
        id: "ktp",
        name: { EN: "Klong Thai Party", TH: "พรรคคลองไทย" },
        archetype: "niche_guild",
        special_focus: { EN: "Construction of the Thai Canal Project", TH: "การผลักดันโครงการขุดคลองไทย" }
    },
    {
        id: "np",
        name: { EN: "New Party (Phak Mai)", TH: "พรรคใหม่" },
        archetype: "niche_guild",
        special_focus: { EN: "Digital Economy for Young Entrepreneurs", TH: "เศรษฐกิจดิจิทัลสำหรับผู้ประกอบการรุ่นใหม่" }
    },
    {
        id: "ep",
        name: { EN: "Economic Party", TH: "พรรคเศรษฐกิจไทย" },
        archetype: "niche_guild",
        special_focus: { EN: "Specialized Economic Relief Measures", TH: "มาตรการเยียวยาทางเศรษฐกิจเฉพาะด้าน" }
    },
    {
        id: "vm",
        name: { EN: "Vision Mai Party", TH: "พรรควิสัยทัศน์ใหม่" },
        archetype: "niche_guild",
        special_focus: { EN: "Vision-led Strategic Development", TH: "การพัฒนาเชิงยุทธศาสตร์ที่นำโดยวิสัยทัศน์" }
    },
    {
        id: "tpr",
        name: { EN: "Thai Prompt Party", TH: "พรรคไทยพร้อม" },
        archetype: "niche_guild",
        special_focus: { EN: "Readiness for Future Global Challenges", TH: "ความพร้อมสำหรับความท้าทายระดับโลกในอนาคต" }
    },
    {
        id: "spyp",
        name: { EN: "Surat Power Party", TH: "พรรคพลังสุราษฎร์" },
        archetype: "niche_guild",
        special_focus: { EN: "Southern Regional Logistics and Trade", TH: "โลจิสติกส์และการค้าในภาคใต้" }
    },
    {
        id: "ndp",
        name: { EN: "New Dimension Party", TH: "พรรคมิติใหม่" },
        archetype: "niche_guild",
        special_focus: { EN: "Multi-dimensional Social Growth", TH: "การเติบโตทางสังคมในหลากหลายมิติ" }
    },
    {
        id: "rjt",
        name: { EN: "Ruam Jai Thai Party", TH: "พรรครวมใจไทย" },
        archetype: "niche_guild",
        special_focus: { EN: "National Resilience and Collective Spirit", TH: "ความยืดหยุ่นของชาติและสปิริตส่วนรวม" }
    },
    {
        id: "tct",
        name: { EN: "Thai Counties Party (Thongthi Thai)", TH: "พรรคท้องที่ไทย" },
        archetype: "niche_guild",
        special_focus: { EN: "Local County and Sub-district Development", TH: "การพัฒนาท้องที่และตำบล" }
    },
    {
        id: "nep",
        name: { EN: "New Economics Party", TH: "พรรคเศรษฐกิจใหม่" },
        archetype: "niche_guild",
        special_focus: { EN: "Sustainable Modern Economics", TH: "เศรษฐกิจยุคใหม่ที่ยั่งยืน" }
    },
    {
        id: "sme",
        name: { EN: "SME Thai Party", TH: "พรรค SME ไทย" },
        archetype: "niche_guild",
        special_focus: { EN: "Support and Subsidies for SMEs", TH: "การสนับสนุนและอุดหนุนวิสาหกิจขนาดเล็ก" }
    },
    {
        id: "tstp",
        name: { EN: "Thai Sub Thawee Party", TH: "พรรคไทยทรัพย์ทวี" },
        archetype: "niche_guild",
        special_focus: { EN: "Wealth Redistribution & Asset Accumulation", TH: "การจัดสรรปันส่วนความมั่งคั่งและทรัพย์สิน" }
    }
];
