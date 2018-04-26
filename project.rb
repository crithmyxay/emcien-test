#!/usr/bin/env ruby -w
require 'csv'


table = CSV.read(ARGV[0])
=begin
opens new file with second argument and copies first argument over 
moving class to beginning and removing "Triceps skin fold thickness (mm)" column
adds column and takes age in years and converts to age in days
=end
# CSV.open(ARGV[1], "w+") do |csv|
  i = 0
  table.each do |line|
    new_line = ''
    if i == 0 
      new_line = "Age(days)"
      i += 1
    else
      new_line = line[8].to_i*365
      i += 1
    end
    if i % 100 == 0
      STDERR.puts "#{i} lines have been parsed"
    end
    print [line[9], line[0], line[1], line[2], line[3], line[5], line[6], line[7], line[8], new_line].to_csv
  end
# # end
STDERR.puts "#{i} lines have been parsed"

# CSV.foreach(ARGV[0]) do |row|
#   print row
# end