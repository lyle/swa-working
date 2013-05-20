
guidedModel =// @startlock
{
	Person :
	{
		email :
		{
			events :
			{
				onLoad:function(attributeName)
				{// @endlock
					this.email = "*****";
				}// @startlock
			}
		},
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName + " " + this.lastName;
			}// @startlock
		}
	}
};// @endlock
