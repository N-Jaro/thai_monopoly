from .database import SessionLocal, engine
from . import models
from datetime import date

def seed_data():
    models.Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    # 1. Clans
    clans = [
        models.Clan(name_th="ชิดชอบ", base_province="บุรีรัมย์"),
        models.Clan(name_th="ไทยเศรษฐ์", base_province="อุทัยธานี"),
        models.Clan(name_th="พรหมเผ่า", base_province="พะเยา"),
        models.Clan(name_th="จึงรุ่งเรืองกิจ", base_province="กรุงเทพฯ"),
        models.Clan(name_th="วงษ์สุวรรณ", base_province="กรุงเทพฯ"),
    ]
    db.add_all(clans)
    db.commit()
    
    # 2. Parties (simplified names)
    parties = [
        models.Party(name_th="เพื่อไทย", color_code="#ff0000", logo_url="/logos/pheuthai.png"),
        models.Party(name_th="ภูมิใจไทย", color_code="#0000ff", logo_url="/logos/bhumjaithai.png"),
        models.Party(name_th="พลังประชารัฐ", color_code="#0055ff", logo_url="/logos/pprp.png"),
        models.Party(name_th="ก้าวไกล/ประชาชน", color_code="#ff8800", logo_url="/logos/mfp.png"),
        models.Party(name_th="ประชาธิปัตย์", color_code="#00ccff", logo_url="/logos/democrat.png"),
        models.Party(name_th="อิสระ/ทหาร", color_code="#555555", logo_url="/logos/independent.png"),
    ]
    db.add_all(parties)
    db.commit()

    # 3. Ministries
    ministries = [
        models.Ministry(name_th="มหาดไทย", budget_grade="A"),
        models.Ministry(name_th="คมนาคม", budget_grade="A"),
        models.Ministry(name_th="เกษตรและสหกรณ์", budget_grade="A"),
        models.Ministry(name_th="การคลัง", budget_grade="A"),
        models.Ministry(name_th="กลาโหม", budget_grade="A"),
    ]
    db.add_all(ministries)
    db.commit()

    # 4. Politicians (Key figures)
    p_anutin = models.Politician(name_th="อนุทิน ชาญวีรกูล", name_en="Anutin Charnvirakul")
    p_suriya = models.Politician(name_th="สุริยะ จึงรุ่งเรืองกิจ", name_en="Suriya Jungrungreangkit", clan_id=4)
    p_thammanat = models.Politician(name_th="ธรรมนัส พรหมเผ่า", name_en="Thammanat Prompow", clan_id=3)
    p_anupong = models.Politician(name_th="อนุพงษ์ เผ่าจินดา", name_en="Anupong Paochinda")
    p_saksayam = models.Politician(name_th="ศักดิ์สยาม ชิดชอบ", name_en="Saksayam Chidchob", clan_id=1)
    
    db.add_all([p_anutin, p_suriya, p_thammanat, p_anupong, p_saksayam])
    db.commit()

    # 5. Tenures (Sample records for "The Loop")
    # Suriya 2002 (Legacy) -> 2023 (Pheu Thai)
    t1 = models.Tenure(politician_id=p_suriya.id, party_id=1, ministry_id=2, start_date="2023-09-01") # Transport
    
    # Anupong 2014-2023 (Interior)
    t2 = models.Tenure(politician_id=p_anupong.id, party_id=6, ministry_id=1, start_date="2014-08-30", end_date="2023-09-01")
    
    # Anutin (Interior) 2023-Present
    t3 = models.Tenure(politician_id=p_anutin.id, party_id=2, ministry_id=1, start_date="2023-09-01")
    
    # Saksayam (Transport) 2019-2023
    t4 = models.Tenure(politician_id=p_saksayam.id, party_id=2, ministry_id=2, start_date="2019-07-10", end_date="2023-03-03")

    db.add_all([t1, t2, t3, t4])
    db.commit()
    
    db.close()

if __name__ == "__main__":
    seed_data()
