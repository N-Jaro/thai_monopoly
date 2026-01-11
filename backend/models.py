from sqlalchemy import Column, Integer, String, ForeignKey, Date, Boolean, Float
from sqlalchemy.orm import relationship
from .database import Base

class Clan(Base):
    __tablename__ = "clans"
    id = Column(Integer, primary_key=True, index=True)
    name_th = Column(String, unique=True, index=True)
    base_province = Column(String)
    
    politicians = relationship("Politician", back_populates="clan")

class Politician(Base):
    __tablename__ = "politicians"
    id = Column(Integer, primary_key=True, index=True)
    name_th = Column(String, index=True)
    name_en = Column(String)
    photo_url = Column(String)
    clan_id = Column(Integer, ForeignKey("clans.id"), nullable=True)
    is_proxy = Column(Boolean, default=False)
    proxy_for_id = Column(Integer, ForeignKey("politicians.id"), nullable=True)
    
    clan = relationship("Clan", back_populates="politicians")
    tenures = relationship("Tenure", back_populates="politician")

class Party(Base):
    __tablename__ = "parties"
    id = Column(Integer, primary_key=True, index=True)
    name_th = Column(String, unique=True, index=True)
    color_code = Column(String)
    logo_url = Column(String)
    
    tenures = relationship("Tenure", back_populates="party")

class Ministry(Base):
    __tablename__ = "ministries"
    id = Column(Integer, primary_key=True, index=True)
    name_th = Column(String, unique=True, index=True)
    budget_grade = Column(String) # A, B, C
    
    tenures = relationship("Tenure", back_populates="ministry")

class Tenure(Base):
    __tablename__ = "tenures"
    id = Column(Integer, primary_key=True, index=True)
    politician_id = Column(Integer, ForeignKey("politicians.id"))
    party_id = Column(Integer, ForeignKey("parties.id"))
    ministry_id = Column(Integer, ForeignKey("ministries.id"))
    start_date = Column(String) # For simplicity, using string or YYYY-MM-DD
    end_date = Column(String, nullable=True)
    is_caretaker = Column(Boolean, default=False)
    
    politician = relationship("Politician", back_populates="tenures")
    party = relationship("Party", back_populates="tenures")
    ministry = relationship("Ministry", back_populates="tenures")

class Relationship(Base):
    __tablename__ = "relationships"
    id = Column(Integer, primary_key=True, index=True)
    person_a_id = Column(Integer, ForeignKey("politicians.id"))
    person_b_id = Column(Integer, ForeignKey("politicians.id"))
    type = Column(String) # Family, Proxy, Ally
