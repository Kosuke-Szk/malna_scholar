# -*- encoding: utf-8 -*-
# stub: metainspector 5.4.2 ruby lib

Gem::Specification.new do |s|
  s.name = "metainspector".freeze
  s.version = "5.4.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jaime Iniesta".freeze]
  s.date = "2018-04-06"
  s.description = "MetaInspector lets you scrape a web page and get its links, images, texts, meta tags...".freeze
  s.email = ["jaimeiniesta@gmail.com".freeze]
  s.homepage = "https://github.com/jaimeiniesta/metainspector".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.11".freeze
  s.summary = "MetaInspector is a ruby gem for web scraping purposes, that returns metadata from a given URL".freeze

  s.installed_by_version = "2.6.11" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<nokogiri>.freeze, ["~> 1.7"])
      s.add_runtime_dependency(%q<faraday>.freeze, ["~> 0.11"])
      s.add_runtime_dependency(%q<faraday_middleware>.freeze, ["~> 0.11"])
      s.add_runtime_dependency(%q<faraday-cookie_jar>.freeze, ["~> 0.0"])
      s.add_runtime_dependency(%q<faraday-http-cache>.freeze, ["~> 2.0"])
      s.add_runtime_dependency(%q<faraday-encoding>.freeze, ["~> 0.0"])
      s.add_runtime_dependency(%q<addressable>.freeze, ["~> 2.5"])
      s.add_runtime_dependency(%q<fastimage>.freeze, ["~> 2.1"])
      s.add_runtime_dependency(%q<nesty>.freeze, ["~> 1.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<webmock>.freeze, [">= 0"])
      s.add_development_dependency(%q<awesome_print>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.1.0"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
      s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
    else
      s.add_dependency(%q<nokogiri>.freeze, ["~> 1.7"])
      s.add_dependency(%q<faraday>.freeze, ["~> 0.11"])
      s.add_dependency(%q<faraday_middleware>.freeze, ["~> 0.11"])
      s.add_dependency(%q<faraday-cookie_jar>.freeze, ["~> 0.0"])
      s.add_dependency(%q<faraday-http-cache>.freeze, ["~> 2.0"])
      s.add_dependency(%q<faraday-encoding>.freeze, ["~> 0.0"])
      s.add_dependency(%q<addressable>.freeze, ["~> 2.5"])
      s.add_dependency(%q<fastimage>.freeze, ["~> 2.1"])
      s.add_dependency(%q<nesty>.freeze, ["~> 1.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_dependency(%q<webmock>.freeze, [">= 0"])
      s.add_dependency(%q<awesome_print>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.1.0"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
      s.add_dependency(%q<rubocop>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1.7"])
    s.add_dependency(%q<faraday>.freeze, ["~> 0.11"])
    s.add_dependency(%q<faraday_middleware>.freeze, ["~> 0.11"])
    s.add_dependency(%q<faraday-cookie_jar>.freeze, ["~> 0.0"])
    s.add_dependency(%q<faraday-http-cache>.freeze, ["~> 2.0"])
    s.add_dependency(%q<faraday-encoding>.freeze, ["~> 0.0"])
    s.add_dependency(%q<addressable>.freeze, ["~> 2.5"])
    s.add_dependency(%q<fastimage>.freeze, ["~> 2.1"])
    s.add_dependency(%q<nesty>.freeze, ["~> 1.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<webmock>.freeze, [">= 0"])
    s.add_dependency(%q<awesome_print>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.1.0"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<rubocop>.freeze, [">= 0"])
  end
end
