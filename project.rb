#!/usr/bin/env ruby -w
require 'csv'

table = CSV.read(ARGV[0])
result = []
#opens new file with second argument and copies first argument over moving class to beginning and removing "Triceps skin fold thickness (mm)" column
CSV.open(ARGV[1], "w+") do |csv|
  table.each do |line|
    result << [line[9], line[0], line[1], line[2], line[3], line[5], line[6], line[7], line[8]]
  end
end

result.each {|row| puts row}

