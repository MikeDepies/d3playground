jsml.aggregator = function(){};
	jsml.aggregator.majority = function() {
		var m = function (group) {

		};

		var aggregate = function(group, evaluation) {
			var count = [];
			for (var i = 0; i < group.length; i++) {
				var eval = evaluation(group[i]);
				if (!count[eval])
					count[eval] = 0;
				count[eval] += 1;
			}
			var maxKey,
				maxValue=-1;
			for (var key in count) {
				if (count[key] > maxValue) {
					maxKey = key;
					maxValue = count[key];
				}
			}
			return maxKey;
		}

		return aggregate;
	};