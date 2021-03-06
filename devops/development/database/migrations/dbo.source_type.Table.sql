USE [worker]
GO
/****** Object:  Table [dbo].[source_type]    Script Date: 10-07-2021 11:59:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[source_type](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](100) NULL,
	[is_deleted] [bit] NULL,
PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
