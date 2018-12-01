
export default class DistrictRepository {
  constructor(data) {
    this.stats = this.filterData(data);
  }

  filterData = (data) => {
    const newData = data.reduce((acc, district) => {
      const roundedNum = Math.round(district.Data * 1000) / 1000 || 0;
      if (!acc[district.Location.toUpperCase()]) {
        acc[district.Location.toUpperCase()] = {
          location: district.Location.toUpperCase(),
          stats: {[district.TimeFrame]: roundedNum}
        }
      } else {
        acc[district.Location.toUpperCase()].stats = Object.assign(acc[district.Location.toUpperCase()].stats, {[district.TimeFrame]: roundedNum})
      }
      return acc;
    }, {})
    return newData;
  }

  findByName = (name) => {
    if (name) {
      return this.stats[name.toUpperCase()]
    }
  }

  findAllMatches = (districts) => {
    const districtNames = Object.keys(this.stats)
    let filteredLocations = districtNames;
    if (districts) {
      filteredLocations = districtNames.filter((district) => {
        return district.toUpperCase().includes(districts.toUpperCase())
      })
    }

    return filteredLocations.map(location => {
      return this.stats[location]
    })
  }

  findAverage = (district) => {
    const values = Object.values(this.stats[district.toUpperCase()].stats)
    let total = values.reduce((sum, stat) => {
      sum += stat;
      return sum;
    }, 0) / values.length;

    return Math.round(total * 1000) / 1000;
  }
  
  compareDistrictAverages = (district1, district2) => {
    let avg1 = this.findAverage(district1)
    let avg2 = this.findAverage(district2)
    return {
      [district1.toUpperCase()]: avg1,
      [district2.toUpperCase()]: avg2,
      compared:  Math.round(avg1/avg2 * 1000) / 1000
    }
  }
}
