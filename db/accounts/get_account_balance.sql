SELECT fund_amount from account_funds
WHERE $1 = user_id
ORDER BY fund_id DESC
LIMIT 1