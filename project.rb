#!/usr/bin/env ruby -w
require 'csv'

table = CSV.read(ARGV[0])
result = Array.new
new_result = []

#opens new file with second argument and copies first argument over moving class to beginning and removing "Triceps skin fold thickness (mm)" column
# CSV.open(ARGV[1], "w+") do |csv|
  table.each do |line|
    result << [line[9], line[0], line[1], line[2], line[3], line[5], line[6], line[7], line[8]]
  end
# end

i = 0
result.each do |row|
  if i == 0
    new_result << "Age(days)"
    i += 1
  else
    cell = row[row.length-1].to_i*365
    new_result << cell
    i += 1
  end
end

CSV.open(ARGV[1], 'w') do |csv|
  j=0
  new_result.each do |row|
    result[j] << row
    j += 1
  end
  csv << result
end


# result.each { |row| puts row.inspect}
# print result