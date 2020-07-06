package com.thbs.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thbs.exception.ResourceNotFoundException;
import com.thbs.model.Quote;
import com.thbs.repository.QuoteRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class QuoteController {
	@Autowired
	private QuoteRepository quoteRepository;

	@GetMapping("/quotes")
	public List<Quote> getAllQuotes() {
		return quoteRepository.findAll();
	}

	@GetMapping("/quotes/{id}")
	public ResponseEntity<Quote> getQuoteById(@PathVariable(value = "id") Long QuoteId) throws ResourceNotFoundException {
		Quote Quote = quoteRepository.findById(QuoteId)
				.orElseThrow(() -> new ResourceNotFoundException("Quote not found for this id :: " + QuoteId));
		return ResponseEntity.ok().body(Quote);
	}

	@PostMapping("/quotes")
	public Quote createQuote(@Valid @RequestBody Quote Quote) {
		return quoteRepository.save(Quote);
	}

	@PutMapping("/quotes/{id}")
	public ResponseEntity<Quote> updateQuote(@PathVariable(value = "id") Long QuoteId,
			@Valid @RequestBody Quote QuoteDetails) throws ResourceNotFoundException {
		Quote Quote = quoteRepository.findById(QuoteId)
				.orElseThrow(() -> new ResourceNotFoundException("Quote not found for this id :: " + QuoteId));

		Quote.setCategory(QuoteDetails.getCategory());
		Quote.setAuthor(QuoteDetails.getAuthor());
		Quote.setQuoteName(QuoteDetails.getQuoteName());
		final Quote updatedQuote = quoteRepository.save(Quote);
		return ResponseEntity.ok(updatedQuote);
	}

	@DeleteMapping("/quotes/{id}")
	public Map<String, Boolean> deleteQuote(@PathVariable(value = "id") Long QuoteId) throws ResourceNotFoundException {
		Quote Quote = quoteRepository.findById(QuoteId)
				.orElseThrow(() -> new ResourceNotFoundException("Quote not found for this id :: " + QuoteId));

		quoteRepository.delete(Quote);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}