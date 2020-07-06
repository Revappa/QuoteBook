package com.thbs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thbs.model.Quote;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, Long>{

}
